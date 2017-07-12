'use strict';

var targetObject = loadAllItems()
function matchh (inputs,targetObject)
{
  var example = [{}]
  var goodIfo = []
  var count = 1

  for(var i = 0; i<inputs.length;i++)
  {
    for(var j = 0; j<targetObject.length; j++)
    {
      if(inputs[i]==targetObject[j].barcode)
      {
        example[i] = {barcode: "", name: "", unit: "", price: 0.00}
        example[i].barcode = targetObject[j].barcode
        example[i].name = targetObject[j].name
        example[i].unit = targetObject[j].unit
        example[i].price = targetObject[j].price
      }
    }
  }
  var isSame = example[0].barcode
  for(var i = 1;i<example.length;i++)
  {
    if(isSame != example[i].barcode)
    {
      count++
      isSame = example[i].barcode
    }
  }
  goodIfo[0] = {barcode: "", name: "", unit: "", price: 0.00, count: 0}
  goodIfo[0].barcode = example[0].barcode
  goodIfo[0].name = example[0].name
  goodIfo[0].unit = example[0].unit
  goodIfo[0].price = example[0].price
  for(var i = 0;i<count;i++)
  {
    isSame = goodIfo[i].barcode
    for(var j = 0;j<example.length;j++)
    {
      if(isSame !=example[j].barcode)
      {
        i++
        goodIfo[i] = {barcode: "", name: "", unit: "", price: 0.00, count: 0}
        goodIfo[i].barcode = example[j].barcode
        goodIfo[i].name = example[j].name
        goodIfo[i].unit = example[j].unit
        goodIfo[i].price = example[j].price
        goodIfo[i].count++
        isSame = goodIfo[i].barcode
      }
      else
      {
        goodIfo[i].count++
      }
    }

  }
  return goodIfo
}
function smallCount(goodIfo)
{

  var goodIfoAll =[]
  for(var i = 0; i<goodIfo.length;i++)
  {
    goodIfoAll[i]={barcode:"",name:"",unit:"",price:0.00,count:0,money:0.00}
    goodIfoAll[i].barcode=goodIfo[i].barcode
    goodIfoAll[i].name=goodIfo[i].name
    goodIfoAll[i].unit=goodIfo[i].unit
    goodIfoAll[i].price=goodIfo[i].price
    goodIfoAll[i].count=goodIfo[i].count
    goodIfoAll[i].money=goodIfoAll[i].price*goodIfoAll[i].count

  }
  return goodIfoAll

}
function allMoney(goodIfo) {
  var allMoney = 0
  for(var i = 0;i<goodIfo.length;i++)
    allMoney+=goodIfo[i].money
  return allMoney
}
function printff(goodIfo,allMoney) {
  var str=`***<没钱赚商店>收据***
    `
  for(var i=0;i< goodIfo.length;i++)
    str+=`名称:${goodIfo[i].name},数量:${goodIfo[i].count}${goodIfo[i].unit},单价:${goodIfo[i].price}.00(元),小计:${goodIfo[i].money}.00(元)
    `
  str+=`----------------------
    总计:${allMoney}.00(元)
    **********************`
  return str

}
function printReceipt(inputs) {
  var goodIfo = matchh(inputs,targetObject)
  var goodIfoAll = smallCount(goodIfo)
  var allMon = allMoney(goodIfoAll)
  var str = printff(goodIfoAll,allMon)
  console.log(str);
}
/*
 var inputs = [
 {
 barcode: 'ITEM000000',
 name: '可口可乐',
 unit: '瓶',
 price: 3.00

 },
 {
 barcode: 'ITEM000000',
 name: '可口可乐',
 unit: '瓶',
 price: 3.00
 },
 {
 barcode: 'ITEM000000',
 name: '可口可乐',
 unit: '瓶',
 price: 3.00
 },
 {
 barcode: 'ITEM000000',
 name: '可口可乐',
 unit: '瓶',
 price: 3.00
 },
 {
 barcode: 'ITEM000000',
 name: '可口可乐',
 unit: '瓶',
 price: 3.00
 },
 {
 barcode: 'ITEM000001',
 name: '雪碧',
 unit: '瓶',
 price: 3.00
 },
 {
 barcode: 'ITEM000001',
 name: '雪碧',
 unit: '瓶',
 price: 3.00
 },
 {
 barcode: 'ITEM000004',
 name: '电池',
 unit: '个',
 price: 2.00
 }
 ]
 printReceipt(inputs)*/


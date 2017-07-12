'use strict';

function printReceipt(inputs) {
  console.log('请在此实现练习要求，并改写该行代码。');
}
/**
 * Created by coco on 17-7-11.
 */
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
  {
    allMoney+=goodIfo[i].money
  }
  return allMoney
}
function printff(goodIfo,allMoney) {
  console.log("***<没钱赚商店>***\n")
  for(var i=0;i< goodIfo.length;i++)
  {
    console.log("名称:"+goodIfo[i].name+",数量:"+goodIfo[i].count+"瓶,单价:"+goodIfo[i].count+"(元),小计:"+goodIfo[i].money+"(元)"+"\n")
  }
  console.log("---------------")
  console.log("总计:"+allMoney+"(元)")
  console.log("******************************")

}

var goodIfo =[
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00,
    count: 5
  },
  {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00,
    count: 2
  },
  {
    barcode: 'ITEM000004',
    name: '电池',
    unit: '个',
    price: 2.00,
    count: 1
  }
]
var allMon = 0.00
var goodIfoAll = smallCount(goodIfo)
allMon = allMoney(goodIfoAll)
printff(goodIfoAll,allMon)

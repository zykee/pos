'use strict';
var targetObject = loadAllItems()
var specGoods = loadPromotions()
//匹配
function matchh (inputs)
{
  var example = [{}]
  var realBarcode = []
  var goodIfo = []
  var count = 1
  var isSame = ""
  for(var i = 0;i<inputs.length;i++)
  {
    realBarcode[i]=inputs[i].split("-")
  }
  for(var i = 0; i<realBarcode.length;i++)
  {
    for(var j = 0; j<targetObject.length; j++)
    {
      if(realBarcode[i][0]==targetObject[j].barcode)
      {
        example[i] = {barcode: "", name: "", unit: "", price: 0.00}
        example[i].barcode = targetObject[j].barcode
        example[i].name = targetObject[j].name
        example[i].unit = targetObject[j].unit
        example[i].price = targetObject[j].price
      }
    }
  }
  if(realBarcode[0].length==2)
    goodIfo[0]={barcode:realBarcode[0][0],name:"",unit:"",price:0.00,count:parseFloat(realBarcode[i][1])}
  else
    goodIfo[0]={barcode:realBarcode[0][0],name:"",unit:"",price:0.00,count:1}
  for(var i = 0;i<example.length;i++)
  {
    if(goodIfo[0].barcode==example[i].barcode)
    {
      goodIfo[0].name=example[i].name
      goodIfo[0].unit=example[i].unit
      goodIfo[0].price=example[i].price
      break
    }
  }//初始化goodIfo[0]
  isSame =realBarcode[0][0]
  for(var i = 1;i<realBarcode.length;i++)
  {
    if(isSame != realBarcode[i][0])
    {
      count ++
      if(realBarcode[i].length==2)
        goodIfo[count-1]={barcode:realBarcode[i][0],name:"",unit:"",price:0.00,count:parseFloat(realBarcode[i][1])}
      else
        goodIfo[count-1]={barcode:realBarcode[i][0],name:"",unit:"",price:0.00,count:1}
      isSame = realBarcode[i][0]
    }
    else
    {
      if(realBarcode[i].length==2)
        goodIfo[count-1].count+=parseFloat(realBarcode[i][1])
      else
        goodIfo[count-1].count+=1
    }
  }
  for(var i = 1;i<count;i++)
  {
    for(var j = 0;j<example.length;j++)
    {
      if(goodIfo[i].barcode==example[j].barcode) {
        goodIfo[i].name = example[j].name
        goodIfo[i].unit = example[j].unit
        goodIfo[i].price = example[j].price
        break
      }
    }
  }
  return goodIfo
}
//小计
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
//差价
function diffMoney(goodIfo) {
  var diffMoney = 0

  for(var i = 0;i<goodIfo.length;i++)
  {
    for(var j = 0;j<specGoods[0].barcodes.length;j++)
      if(goodIfo[i].barcode==specGoods[0].barcodes[j])
      {
        if(goodIfo[i].count>=2)
        {
          diffMoney+=goodIfo[i].price
          goodIfo[i].money-=goodIfo[i].price
        }
      }
  }
  return diffMoney
}
//总价
function allMoney(goodIfo) {
  var allMoney = 0
  for(var i = 0;i<goodIfo.length;i++)
    allMoney+=goodIfo[i].money
  return allMoney
}
//打印
function printff(goodIfo,allMoney,diffMoney) {
  var str=`***<没钱赚商店>收据***
`
  for(var i=0;i< goodIfo.length;i++)
    str+=`名称:${goodIfo[i].name},数量:${goodIfo[i].count}${goodIfo[i].unit},单价:${goodIfo[i].price.toFixed(2)}(元),小计:${goodIfo[i].money.toFixed(2)}(元)
`
  str+=`----------------------
总计:${allMoney.toFixed(2)}(元)
节省:${diffMoney.toFixed(2)}(元)
**********************`
  return str

}
function printReceipt(inputs) {
  var goodIfo = matchh(inputs)
  var goodIfoAll = smallCount(goodIfo)
  var diffMon=diffMoney(goodIfoAll)
  var allMon = allMoney(goodIfoAll)
  var str = printff(goodIfoAll,allMon,diffMon)
  console.log(str);
}

// 给你一个整数数组 nums 。数组中唯一元素是那些只出现恰好一次的元素。
// 请你返回 nums 中唯一元素的 和 。
// 输入：nums = [1,2,3,2]
// 输出：4
// 解释：唯一元素为 [1,3] ，和为 4 。
function singleDataSum(data){
  if(!data||(data&&!data.length)) return 0

  const map = new Map()
  let tmp = []
  data.forEach(item=>{
    if(map.has(item)) {
      map.set(item,map.get(item)+1)
    }else{
      map.set(item,1)
    }
  })
  for(const [key,value] of map){
    if(value==1){
      tmp.push(key)
    }
  }
  return tmp.reduce((pre,current)=>pre+current,0)
}

// 实现一个call
// fun.call(this,1,2,3)

function myCall(context,...rest){
  const key = new Symbol()
  context[key] = this;
  const res = context[key](...rest)
  delete context[key]
  return res
}
// bind

Function.prototype.myBind = function(context,...initArg){
  const fun = this; //函数自己
  let bindFun = function(...rest){
    if(this instanceof bindFun){
      return new foo(...initArg,...rest)
    }
    return fun.call(context,...initArg,...rest)
  }
  return bindFun
}

// 函数节流
// 原理：控制事件执行的间隔； 场景：resize、scroll、mousemove、click
/**
 * 4.函数节流
 * @param {回调函数} callback 
 * @param {执行间隔} wait 
 */
export function throttle(callback,wait){

  // 1.定义开始时间
  let strat = 0;

  // 2.返回结果是一个函数
  return function(e){

    // 获取当前的时间戳
    let now = Date.now();
    
    // 判断
    if (now - strat >= wait) {

      // this指向事件源
      callback.call(this,e);

      // 修改开始时间
      strat = now;
    }
  }
}

// 函数防抖
// 原理：调用函数是会从上一次被调用后延迟一段时间后在调用  场景：input搜索
/**
 * 5.函数防抖
 * @param {回调函数} callback 
 * @param {执行间隔} wait 
 */
 export function debounce(callback,wait){
  let timeId = null;
  // 返回函数
  return function(e){
    if (timeId !== null) {
      // 清空定时器
      clearTimeout(timeId)
    }

    // 启动定时器
    timeId = setTimeout(()=>{
      // 执行回调回调
      callback.call(this,e)

      // 重置定时器变量
      timeId = null;
    },wait)
  }
}

export function format(date, fmt){
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth()+1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k]+'';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt;
}
function padLeftZero(str){
  return ('00'+str).substr(str.length);
}
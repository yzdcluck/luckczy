// 用来存放工具性质的模块
function formatTime(time, format) {
  let temp = '0000000000' + time
  let len = format.length
 
  return temp.substr(-len)
}

module.exports = {
  formatTime: formatTime

}
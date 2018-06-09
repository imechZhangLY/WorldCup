const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const leftTime = time => {
  let days = formatNumber(parseInt(time / 1000 / 60 / 60 / 24, 10)); //计算剩余的天数 
  let hours = formatNumber(parseInt(time / 1000 / 60 / 60 % 24, 10)); //计算剩余的小时 
  let minutes = formatNumber(parseInt(time / 1000 / 60 % 60, 10));//计算剩余的分钟 
  let seconds = formatNumber(parseInt(time / 1000 % 60, 10));//计算剩余的秒数 
  console.log(days)
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}

module.exports = {
  formatTime: formatTime,
  leftTime: leftTime
}

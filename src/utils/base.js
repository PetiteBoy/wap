import moment from 'moment'
// 正则手机号
export function checkPhone(phone) {
  if ((/^1[34578]\d{9}$/.test(phone))) {
    return true
  } else {
    return false
  }
}

// 本次存储--存储
export function setLocalStorage(key, val) {
  localStorage.setItem(key, val)
}
// 本次存储--读取
export function getLocalStorage(key) {
  return localStorage.getItem(key)
}
// 本次存储--删除
export function delLocalStorage(key) {
  localStorage.removeItem(key)
}

// 格式化时间戳
export function momentTime(timestamp) {
  return moment(timestamp).format('YYYY-MM-DD')

}

/**
 * @description 根据路由name设置路由path
 * @param { Array } routeArray 要设置的路由数组
 * @param { String } str 路径前缀
 * @return { Array } 设置好的数组
 */
export const setRoutePath = (routeArray, str) => {
  routeArray.forEach((item) => {
    let path_ = str ? `/${str}/` : '/'
    item.path = item.path || path_ + (item.name || '')
  })
  return routeArray
}

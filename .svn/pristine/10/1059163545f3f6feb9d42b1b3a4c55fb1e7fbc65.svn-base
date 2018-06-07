/**
 * 存储SessionStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取SessionStorage
 */
export const getStore = name => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}

/**
 * 删除SessionStorage
 */
export const removeStore = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

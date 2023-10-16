import { RouterType } from './index'
/**
 * 为路由列表中的每个项生成新的键。
 *
 * @param {RouterType[]} list - 要生成键的路由项列表。
 * @return {RouterType[]} - 更新后的带有生成键的列表。
 */
export const generateRouterItemKey = (list: RouterType[]): RouterType[] => {
  function deepGenerate(arr: RouterType[], parent?: RouterType): void {
    arr.forEach((item: RouterType) => {
      item.path = parent ? `${parent.path}/${item.path}` : item.path
      item.key = item.path
      // 是否需要带上 上一级别菜单的 label
      // item.menuLabel = parent ? `${parent.label}-${item.label}` : item.label
      if (item.children) {
        deepGenerate(item.children, item)
      }
    })
  }
  deepGenerate(list)
  return list
}

// 递归打平 children
export const flattenRouter = (arr: any[]): any => {
  return arr.reduce((prev: any, next: any) => {
    return prev.concat(
      Array.isArray(next.children) ? flattenRouter(next.children) : next
    )
  }, [])
}

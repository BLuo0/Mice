/**
 * 首页列表排序类型
 */
export const HomeSortType = {
  // 推荐
  RECOMMEND: 1,
  // 最新
  NEWEST: 2,
  // 热门
  HOT: 3,
}
/**
 *首页头部标签
 */
export const Path = [
  { title: "首页", pathTo: '/home' },
  { title: "新闻列表", pathTo: '/about' },
  { title: "图表分析", pathTo: '/news' },
  { title: "新闻报告", pathTo: '/ant' },
]
/**
 *创建分享报告标签
 */
export const Tab = [
  { id: 1, name: "从空白处创建" },
  { id: 2, name: "使用模板创建" },
]
/**
 *添加移除图表标签
 */
export const Charts = [
  { id: 1, name: "添加图表" },
  { id: 2, name: "移除模块" },
]
// 导入单个组件
// eslint-disable-next-line import/no-named-default
import { default as Button } from './button'

// eslint-disable-next-line import/no-named-default
import { default as version } from './version'

/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of wkl-ui, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.'
  )
}
/* @remove-on-es-build-end */

// 以数组的结构保存组件，便于遍历
const components = [
  Button
]

// 定义 install 方法
const install = function (Vue) {
  components.map(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  version
}

export default {
  version,
  install
}

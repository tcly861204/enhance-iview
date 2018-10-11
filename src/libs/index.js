import * as form from './components/form'
import 'iview/dist/styles/iview.css'

const components = {
  ...form
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install: Vue => {
    Object.keys(components).forEach((key) => {
      Vue.component(components[key].name, components[key])
    })
  }
}

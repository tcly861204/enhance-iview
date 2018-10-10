import * as form from './components/form'
import 'iview/dist/styles/iview.css'

const components = {
  ...form
}
export default {
  install: Vue=>{
    Object.keys(components).forEach((key) => {
      Vue.component(components[key].name, components[key])
    })
  }
}
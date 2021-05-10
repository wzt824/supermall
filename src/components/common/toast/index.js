import Toast from "./Toast.vue"
const obj = {}

obj.install = function(Vue){
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);
  // 2.new的方式，根据组件构造器，创建出一个组件对象
  const toast = new toastContrustor();
  // 3.将组件对象，手动挂载到某个元素上
  toast.$mount(document.createElement('div'))
  // 4.获取组件的dom $el
  document.body.appendChild(toast.$el)
  // 5.添加到vue原型中
  Vue.prototype.$toast = toast
}

export default obj
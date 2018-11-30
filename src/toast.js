export default {
  install: (Vue, config = {}) => {
    let toastId = 1
    const ToastConstructor = Vue.extend(require('./toast.vue').default)

    Object.defineProperty(Vue.prototype, config.prefix || '$toast', {
      value: options => {
        if (typeof options === 'string' || typeof options === 'number') {
          options = {
            content: options
          }
        }

        const ToastInstance = new ToastConstructor({
          data: Object.assign({}, {
            show: true,
            duration: 1200,
          }, options)
        })

        ToastInstance.id = `dear-toast-${toastId}`
        ToastInstance.vm = ToastInstance.$mount()
        ToastInstance.dom = ToastInstance.vm.$el
        ToastInstance.dom.style.zIndex = 1000 + toastId
        document.body.appendChild(ToastInstance.dom)
        toastId++
        return ToastInstance
      }
    })
  }
}

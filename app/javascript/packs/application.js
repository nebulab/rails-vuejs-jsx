/* eslint no-console:0 */

import Turbolinks from 'turbolinks'
import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue'

// Import the store
import store from '../store'

// Import style
import '../sass/index.scss'

// Import all the macro components of the application
import * as instances from '../instances'

Vue.use(TurbolinksAdapter)

Turbolinks.start()

document.addEventListener('turbolinks:load', () => {
  // Initialize available instances
  Object.keys(instances).forEach((instanceName) => {
    const instance = instances[instanceName]
    const elements = document.querySelectorAll(instance.el)

    elements.forEach((element) => {
      const props = JSON.parse(element.getAttribute('data-props'))

      new Vue({
        el: element,
        store,
        render: h => h(instance.component, { props })
      })
    })
  })
})

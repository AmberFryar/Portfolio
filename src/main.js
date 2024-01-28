import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub, faVuejs, faJava, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faArrowRight, faBars, faDatabase } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faLinkedin, faGithub, faArrowRight, faArrowLeft, faVuejs, faJava, faJsSquare, faDatabase)

const app = createApp(App)

app.use(router)
app.component('icon', FontAwesomeIcon)
app.mount('#app')

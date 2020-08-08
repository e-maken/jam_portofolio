import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)
library.add(faTwitter,faGithub)

Vue.component('fa-icon',FontAwesomeIcon)

Vue.config.productionTip = false

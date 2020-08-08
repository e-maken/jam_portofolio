<template>
<div>
  <nuxt-link to="/">
  <div class="w-5/6 mx-auto mt-4">Home
  </div>
  </nuxt-link>
 <div class="font-main flex flex-wrap justify-around">
   <header class="w-64 h-64">
     <div class="w-64 mt-20 ml-2 relative md:fixed">
       <div class="flex">
         <div class="bg-center bg-cover w-16 h-16 mr-2 rounded-full shadow photo"></div>
         <div>
           <h1 class="font-bold">佐藤健</h1>
           <p class="text-xs text-justify">フロントエンドエンジニアの佐藤健です。Vue.js, Nuxt.jsが大好きです。Laravelも使います。ご依頼はDMからどうぞ。</p>
         </div>
       </div>
       <div class="flex justify-around mt-5 text-xs">
         <nuxt-link to="/">
          <button>
            <fa-layers full-width class="fa-2x block mx-auto mb-1">
              <fa :icon="faCode" />
            </fa-layers>
            Works
          </button>
        </nuxt-link>
        <a href="https://twitter.com/Oph67Ro0266hO0K" target="_blank" rel="noopener noreferrer">
          <button>
            <fa-layers full-width class="fa-2x block mx-auto mb-1">
              <fa :icon="faTwitter" />
            </fa-layers>
            Twitter
          </button>
        </a>
        <a href="https://github.com/e-maken" target="_blank" rel="noopener noreferrer">
          <button>
            <fa-layers full-width class="fa-2x block mx-auto mb-1">
              <fa :icon="faGithub" />
            </fa-layers>
            GitHub
          </button>
        </a>
       </div>
      <input type="text" placeholder="Keywords" class="bg-gray-300 p-2 text-xs rounded w-full mt-5 focus:outline-none" v-model="keyword" @keypress.enter="$router.push('/search/' + keyword)"> <!-- ここを追加 -->
     </div>
   </header>
   <main class="w-full mt-10">
     <nuxt />
   </main>
 </div>
</div>
</template>

<script>
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    faTwitter () {
      return faTwitter
    },
    faGithub () {
      return faGithub
    },
    faCode () {
      return faCode
    }
  }
}
</script>

<style>
main {
  max-width: 550px;
}
.photo {
  min-width: 4rem;
  min-height: 4rem;
  background-image: url('~assets/images/profile.jpeg');
}
button:focus {
  outline: none;
}
</style>

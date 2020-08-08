<template>
  <div>
    <div
      class="w-full h-64 my-6 bg-cover bg-center shadow-lg"
      :style=" 'background-image: url(' + work.fields.image.fields.file.url + ')' "
    ></div>
    <nuxt-link :to=" '/category/' + work.fields.category.sys.id "> <!-- ここを追加 -->
      <p class="text-center">{{ work.fields.category.fields.name }}</p>
    </nuxt-link> <!-- ここを追加 -->
    <h1 class="text-center text-4xl">{{ work.fields.title }}</h1>
    <p class="text-center text-sm">{{ work.fields.subtitle }}</p>
    <div class="flex justify-center mb-5">
      <li
        v-for="tag in work.fields.tag"
        :key="tag.sys.id"
        class="list-none text-xs m-1 bg-gray-200 p-1 rounded"
        @click="$router.push('/tag/'+tag.sys.id)"
      >
        {{ tag.fields.name }}
      </li>
    </div>
    <div class="my-10">
      <p v-if="work.fields.url" class="text-xs">
        <fa-layers full-width class="mr-1">
          <fa :icon="faLink" />
        </fa-layers>
        {{ work.fields.url }}
      </p>
      <p v-if="work.fields.gitHub" class="text-xs">
        <fa-layers full-width class="mr-1">
          <fa :icon="faGithub" />
        </fa-layers>
        {{ work.fields.gitHub }}
      </p>
    </div>
    <div v-html="$md.render(work.fields.content)"></div>
  </div>
</template>
// ここまで追加

<script>

// ここから追加
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// ここまで追加

import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  asyncData({params}) {
    return Promise.all([
      client.getEntries({
        'content_type': 'work',
        'fields.slug': params.slug
      })
    ]).then(([works]) => {
      return {
        work: works.items[0]
      }
    }).catch(console.error)
  },

  // ここから追加
  computed: {
    faLink () {
      return faLink
    },
    faGithub () {
      return faGithub
    }
  },
  asyncData({params}) {
    return Promise.all([
      client.getEntries({
        'content_type': 'work',
        'fields.slug': params.slug // 取得対象をslugフィールドがURL内のslugパラメータと等しいものに限定
      })
    ]).then(([works]) => {
      return {
        work: works.items[0] // 取得した配列データの初めの１つを変数workに入れる
      }
    }).catch(console.error)
  }
}
</script>

<style>
.content h1 {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 25px 0;
  border-bottom: 2px solid #000;
}
.content h2 {
  font-weight: bold;
  font-size: 1rem;
  margin: 20px 0;
  border-bottom: 1px solid #eee;
}
.content h3 {
  font-weight: bold;
  font-size: .8rem;
  margin: 15px 0;
}
.content a {
  color: blue;
}
.content li {
  list-style: disc;
}
.content code {
  background: #eee;
  padding: 2px;
}
.content pre code {
  background: none;
  padding: 0;
}
.content pre {
  background: #000;
  color: #fff;
  padding: 5px;
}
</style>

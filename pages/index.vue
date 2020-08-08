<template>
  <div>

    <!-- 元々のテンプレート内のコードを全削除し、代わりにここから追加 -->
    <Item
      v-for="work in works"
      :key="work.sys.id"
      :work="work"
    />
    <!-- ここまで追加 -->

  </div>
</template>

<script>

import Item from '@/components/Item' // ここを追加

import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {

  // ここから追加
  components: {
    Item
  },
  // ここまで追加

  asyncData() {
    return Promise.all([
      client.getEntries({
        'content_type': 'work',
        order: '-sys.createdAt'
      })
    ]).then(([works]) => {
      return {
        works: works.items
      }
    }).catch(console.error)
  }
}
</script>

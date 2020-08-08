<template>
  <div>
    <Item
      v-for="work in works"
      :key="work.sys.id"
      :work="work"
    />
  </div>
</template>
<script>
import Item from '@/components/Item'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  components: {
    Item
  },
  asyncData ({params}) {
    return Promise.all([
      client.getEntries({
        'content_type': 'work',
        'fields.category.sys.id': params.id,
        order: '-sys.createdAt'
      }),
    ]).then(([works]) => {
      return {
        works: works.items
      }
    }).catch(console.error)
  }
}
</script>

<template>
  <div class="comments" itemscope itemtype="http://schema.org/UserComments">
    <template v-for="comment in comments">
      <Comment :key="comment.id" :comment="comment" />
    </template>
  </div>
</template>

<script>
import { format } from 'fecha'
export default {
  name: 'BlogComments',
  components: {
    Comment: () => import('~/components/Comment.vue')
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    format
  }
}
</script>

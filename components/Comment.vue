<template>
  <div>
    <div class="comment">
      <figure
        class="d-none d-sm-block"
        itemscope
        itemtype="http://schema.org/Person"
      >
        <LazyImage
          class="comment__user__avatar img-fluid rounded-circle"
          :alt="comment.user.name"
          :lazy-srcset="comment.user.image().srcSet"
          :placeholder="comment.user.image().placeholder"
          :lazy-src="comment.user.image().src"
        />
        <figcaption class="sr-only">
          <span itemprop="name">{{ comment.user.name }}</span>
        </figcaption>
      </figure>
      <div class="comment__body">
        <p itemprop="commentText">
          {{ comment.body }}
        </p>
        <div class="comment__meta">
          <b-nav small class="align-items-center">
            <b-nav-text>
              <div class="d-block d-flex-md align-items-center mr-2">
                <LazyImage
                  class="comment__user__avatar--inline rounded-circle"
                  :alt="comment.user.name"
                  :lazy-srcset="comment.user.thumb().srcSet"
                  :placeholder="comment.user.thumb().placeholder"
                  :lazy-src="comment.user.thumb().src"
                  :height="comment.user.thumb().height"
                  :width="comment.user.thumb().width"
                />
                Created by&nbsp;
                <b>{{ comment.user.name }}</b>
                &nbsp;on&nbsp;
                <i>
                  <time
                    itemprop="commentTime"
                    :title="format(new Date(comment.created))"
                    :datetime="comment.created"
                    >{{
                      format(
                        new Date(comment.created),
                        'DD MMMM YYYY [at] HH:mm'
                      )
                    }}</time
                  >
                </i>
              </div>
            </b-nav-text>
            <b-nav-item to="#Reply">Reply</b-nav-item>
            <!-- <b-nav-item>Delete</b-nav-item> -->
            <!-- <b-nav-item>Edit</b-nav-item> -->
          </b-nav>
        </div>
      </div>
    </div>
    <template v-if="comment.comments">
      <div :key="`${comment.id}`" class="indented">
        <template v-for="indent in comment.comments">
          <Comment :key="indent.id" :comment="indent" />
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import { format } from 'fecha'
export default {
  name: 'Comment',
  components: {
    LazyImage: () => import('~/components/LazyImage.vue')
  },
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  methods: {
    format
  }
}
</script>

<template>
  <a-space style="padding-top: 20px" direction="vertical" :size="24">
    <a-card hoverable style="width: 95%">
      <template #cover>
        <a-comment>
          <template #actions>
            <span key="comment-basic-like">
              <a-tooltip title="Like">
                <template v-if="action === 'liked'">
                  <LikeFilled @click="like" />
                </template>
                <template v-else>
                  <LikeOutlined @click="like" />
                </template>
              </a-tooltip>
              <span style="padding-left: 8px; cursor: auto">{{ likes }}</span>
            </span>
            <span key="comment-basic-dislike">
              <a-tooltip title="Dislike">
                <template v-if="action === 'disliked'">
                  <DislikeFilled @click="dislike" />
                </template>
                <template v-else>
                  <DislikeOutlined @click="dislike" />
                </template>
              </a-tooltip>
              <span style="padding-left: 8px; cursor: auto">{{
                dislikes
              }}</span>
            </span>
            <span key="comment-basic-reply-to">Reply to</span>
          </template>
          <template #author>
            <a>Ginlon</a>
          </template>
          <template #avatar>
            <a-avatar :src="require('../assets/portrait.png')" alt="Han Solo" />
          </template>
          <template #content>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          </template>
          <template #datetime>
            <a-tooltip :title="moment().format('YYYY-MM-DD HH:mm:ss')">
              <span>{{ moment().fromNow() }}</span>
            </a-tooltip>
          </template>
        </a-comment>
      </template>
      <a-card-meta title="Comment 评论" description="普通的评论">
        <template #avatar>
          <a-avatar
            :src="require('../assets/portrait.png')"
            alt="Han Solo"
            size="large"
          />
        </template>
      </a-card-meta>
    </a-card>
    <a-card hoverable style="width: 95%" title="列表评论">
      <template #cover>
        <a-list
          class="comment-list"
          :header="`${data.length} replies`"
          item-layout="horizontal"
          :data-source="data"
        >
          <template #renderItem="{ item }">
            <a-list-item>
              <a-comment
                datetime="2022-08-22"
                :author="item.author"
                :avatar="item.avatar"
              >
                <template #actions>
                  <span v-for="(action, index) in item.actions" :key="index">{{
                    action
                  }}</span>
                </template>
                <template #content>
                  <p>
                    {{ item.content }}
                  </p>
                </template>
                <template #datetime>
                  <a-tooltip
                    :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')"
                  >
                    <span>{{ item.datetime.fromNow() }}</span>
                  </a-tooltip>
                </template>
                <a-comment>
                  <template #actions>
                    <span>Reply to</span>
                  </template>
                  <template #author>
                    <a href="">Ginlon</a>
                  </template>
                  <template #avatar>
                    <a-avatar
                      :src="require('../assets/portrait.png')"
                    ></a-avatar>
                  </template>
                  <template #content>
                    <p>嵌套评论内容</p>
                  </template>
                </a-comment>
              </a-comment>
            </a-list-item>
          </template>
        </a-list>
      </template>
    </a-card>
  </a-space>
</template>
<script>
import moment from 'moment'
import {
  LikeFilled,
  LikeOutlined,
  DislikeFilled,
  DislikeOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    LikeFilled,
    LikeOutlined,
    DislikeFilled,
    DislikeOutlined,
  },

  setup() {
    const likes = ref(0)
    const dislikes = ref(0)
    const action = ref()

    const like = () => {
      likes.value = 1
      dislikes.value = 0
      action.value = 'liked'
    }

    const dislike = () => {
      likes.value = 0
      dislikes.value = 1
      action.value = 'disliked'
    }

    return {
      likes,
      dislikes,
      action,
      like,
      dislike,
      moment,
      data: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(1, 'days'),
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days'),
        },
      ],
    }
  },
})
</script>
<style scoped></style>


<template>
  <div class="comment-info">
    <div class="info-header">
      <span class="header-title">用户评价</span>
      <span class="header-more" @click="moreClick"
            v-if="Object.keys(commentInfo).length !== 0">更多</span>
    </div>
    <div class="info-content" v-if="Object.keys(commentInfo).length !== 0">
      <div class="content-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="content-common">
        <div class="content-text">{{commentInfo.content}}</div>
        <div class="content-param">
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
      </div>
      <div class="content-img">
        <img v-for="item in commentInfo.images" :key="item" 
             :src="item" alt="">
      </div>
    </div>
    <div v-else class="empty-common">
      暂无用户评价信息
    </div>
  </div>
</template>

<script>
import { format } from "common/utils"
export default {
  name:'DetailCommentInfo',
  data() {
    return {

    }
  },
  props: {
    commentInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    moreClick(){
      console.log("查看更多评论");
    }
  },
  filters:{
    showDate(value){
      const date = new Date(value * 1000);
      return format(date,'yyyy-MM-dd hh:mm')
    }
  }
}
</script>

<style scoped lang="less">
  .comment-info{
    padding: 20px 15px 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;

    .info-header{
      display: flex;
      justify-content: space-between;
      border-bottom: 1.5px solid #eee;
      padding: 3px 0 15px;

      .header-more{
        font-size: 14px;
        font-weight: 600;
      }
    }

    .info-content{
      .content-user{
        display: flex;
        align-items: center;
        padding: 10px 0;
        font-size: 15px;
        img{
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 10px;
        }
      }

      .content-common{
        font-size: 15px;

        .content-param{
          color: var(--color-text);
          padding: 8px 0;

          .date{
            margin-right: 15px;
          }
        }
      }

      .content-img{
        img{
          width: 50px;
          height: 50px;
          margin-right: 5px;
        }
      }
    }

    .empty-common{
      text-align: center;
      font-size: 18px;
      color: var(--color-text);
      padding: 10px 0 0;
    }
  }
</style>

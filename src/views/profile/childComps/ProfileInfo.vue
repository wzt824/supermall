<template>
  <div class="profile-info">
    <div class="profile-content">
      <div class="info-imgage">
        <img src="../../../assets/img/profile/avatar.svg" alt="">
      </div>
      <div>
        <h3 class="user-name">{{userInfo ? userInfo.username :'登录/注册'}}</h3>
        <p>
          <i class="iconfont icon-shouji"></i><span class="user-phone">暂无绑定手机号</span>
        </p>
      </div>
    </div>
    <i class="iconfont icon-next-copy-copy"></i>
  </div>
</template>

<script>
export default {
  name:'ProfileInfo',
  data() {
    return {

    }
  },
  props: {
    userInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
  .profile-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background: var(--color-tint);
    color: #fff;

    .profile-content{
      display: flex;
      align-items: center;

      .info-imgage{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 8px;

        img{
          width: 100%;
          height: 100%;
        }
      }

      .user-name{
        font-size: 18px;
        line-height: 2;
      }
      .user-phone{
        margin-left: 2px;
      }
    }
  }
</style>

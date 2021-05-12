<template>
  <div class="login">

    <nav-bar>
      <div slot="left" @click="goBack">
        <i class="iconfont icon-zuo"></i>
      </div>
      <div slot="center">
        十一
      </div>
    </nav-bar>

    <img src="~assets/img/login/logo.png" alt="" srcset="">

    <form class="login-content">
      <div class="user-item user-name">
        <i class="iconfont icon-yonghu"></i>
        <input v-model.trim="username" placeholder="Username" type="text" autocomplete>
      </div>
      <div class="user-item user-password">
        <i class="iconfont icon-password"></i>
        <input v-model.trim="password" placeholder="Password" type="password" autocomplete>
      </div>
      <div class="btn" @click="login">LOG IN</div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"

import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    NavBar

  },
  methods:{
    ...mapActions(['userState']),
    goBack(){
      this.$router.back()
    },
    login(){
      // this.$router.back()
      if(this.username == ''){
        return this.$toast.show('用户名不能为空哟~',1000);
      }else if(this.password == ''){
        return this.$toast.show('密码不能为空哟~',1000);
      }
      const token = Date.now()
      const userInfo = {
        username:this.username,
        password:this.password,
        token:token,
      }
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
      sessionStorage.setItem('token', token);
      this.userState(userInfo)
      this.$toast.show('登录成功',1000);
      setTimeout(()=>{
        this.$router.back()
      })
    }
  },
  
}
</script>

<style scoped lang="less">
  .login{
    width: 100%;
    height: 100vh;
    background: url("~assets/img/login/login-bg.jpg");
    color: #000;

    img{
      display: block;
      width: 300px;
      margin: 0 auto;
      padding-top: 50px;
    }

    .login-content{
      width: 70%;
      // color: #fff;
      font-size: 25px;

      position: fixed;
      left: 15%;
      bottom: 100px;

      .user-item{
        overflow: hidden;
        height: 40px;
        margin: 15px 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #000;

        i{
          font-size: 25px;
          margin-right: 20px;
        }

        input{
          flex: 1;
          height: 40px;
          background: transparent;
          border: none;
          outline: none;
          // color: #fff;
          width: 100%;
        }

        input::-webkit-input-placeholder{ 
          color: #000;
          opacity:.65; 
        }
      }

      .btn{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: var(--color-tint);
        color: #fff;
        text-align: center;
        border-radius: 5px;
        margin-top: 50px;
      }
    }
  }
</style>

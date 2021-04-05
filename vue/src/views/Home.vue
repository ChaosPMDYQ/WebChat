<template>
  <div class="home">
    <div class="main">
      <div class="nav">
        <div class="aside">
          <img class="user-icon" :src="userIcon" alt="头像" title="个人信息" @click="showMyInfo">
          <i class="el-icon-chat-dot-round" :class="classBgColor[0]" title="消息" @click="showChatMessageList"></i>
          <i class="el-icon-s-custom" :class="classBgColor[1]" title="联系人" @click="showLinkmenList"></i>
        </div>
        <div class="nav-info">
          <Search></Search>
        </div>
      </div>
      <div class="container">
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import userInfor from '../components/UserInfor'
import defaultIcon from '../assets/default_icon.jpg'

import Search from '../components/Search';

export default {
  name: 'Home',
  components: {
    Search
    // userInfor
  },
  
  data() {
    return {
      userIcon: defaultIcon,
      userInfo: localStorage.getItem('userInfo'),

      classBgColor: ['', '']
    }
  },

  methods: {
    showMyInfo() {

    },

    showChatMessageList() {
      this.classBgColor.splice(0, 1, 'selected')
      this.classBgColor.splice(1, 1, '')
    },

    showLinkmenList() {
      this.classBgColor.splice(0, 1, '')
      this.classBgColor.splice(1, 1, 'selected')
    }
  }
}
</script>

<style scoped src="../assets/home.css"/>
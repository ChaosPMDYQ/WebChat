<template>
    <div class="login">
        <div class="main">
            <div class="form-content">
                <img class="icon" src="../assets/default_icon.jpg" alt="">
                <router-link class="to-register" to="/register">注册</router-link> 

                <form action="">
                    <el-input v-model="userName" placeholder="手机号或邮箱"></el-input>
                    <el-input v-model="userPwd" placeholder="密码" show-password></el-input>
                    <p class="loginInfo">{{loginInfo}}</p>
                    <el-button type="primary" :loading="logining" @click="loginAccount">登录</el-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            account: {
                phone: '',
                email:'',
                password: ''
            },
            userName: '',
            userPwd: '',
            loginInfo: '',
            logining: false
        }
    },
    methods: {
        loginAccount() {
            this.loginInfo = ''

            if(this.recognizeName() && this.enCode()) {
                this.logining = true
            }
            
            console.log(this.account)
            // this.$router.push({name: 'Home'})
        },

        //判断手机号或邮箱
        recognizeName() {
            if(this.userName.match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/))
                this.account.phone = this.userName
            else if(this.userName.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/))
                this.account.email = this.userName
            else {
                this.loginInfo = '请输入正确的手机号或邮箱'
                return false
            }
            
            return true
        },

        //MD5加密
        enCode() {
            if(this.userPwd.length < 6 || this.userPwd.length > 20) {
                this.loginInfo = '密码格式错误'
                return false
            }
                

            this.account.password = this.userPwd

            return true
        }
    }
}
</script>

<style scoped>
    .login {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .main {
        padding-bottom: 5rem;
        margin: auto;
    }

    .form-content {
        position: relative;
        width: 20rem;
        padding: 1.5rem;
        border-radius: 1.5rem;
        background-color: white;
        box-shadow: 0 2px 12px 6px rgba(0, 0, 0, 0.1)
    }

    .icon {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }

    .to-register {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
    }

    .el-input {
        height: 2.5rem;
        margin: .6rem auto;
    }

    form>.el-button {
        width: 100%;
        height: 2.5rem;
        margin: 10px auto;
    }

    .loginInfo {
        width:100%;
        height: .8rem;
        margin: 0;
        padding: 0 .6rem;
        text-align: left;
        font-size: .8rem;
        color: #F56C6C;
    }
</style>
<template>
    <div class="register">
        <div class="main">
            <div class="form-content">
                <img class="icon" src="../assets/default_icon.jpg" alt="">
                <router-link class="link to-login" to="/login">登录</router-link> 

                <form action="">
                    <div class="input">
                        <label for="input-name">昵称<span>*</span>：</label>
                        <p class="error-info">{{errorInfo[0]}}</p>
                        <el-input id="input-name" placeholder="2-12位中文、字母、数字及下划线" v-model="nickName" @blur="checkName">
                            <i slot="suffix" class="el-input__icon" :class="inputSuffixIcon[0]"></i>
                        </el-input>
                    </div>
                    <div class="input">
                        <label for="input-phone">手机号<span>*</span>：</label>
                        <p class="error-info">{{errorInfo[1]}}</p>
                        <el-input id="input-phone" placeholder="11位中国大陆手机号" v-model="phone" @blur="checkPhone">
                            <i slot="suffix" class="el-input__icon" :class="inputSuffixIcon[1]"></i>
                        </el-input>
                    </div>
                    <div class="input">
                        <label for="input-email">邮箱<span>*</span>：</label>   
                        <p class="error-info">{{errorInfo[2]}}</p>
                        <el-input id="input-email" placeholder="XXXXXXXX@XX.com" v-model="email" @blur="checkEmail">
                            <i slot="suffix" class="el-input__icon" :class="inputSuffixIcon[2]"></i>
                        </el-input>
                    </div>
                    <div class="input">
                        <label for="input-password">密码<span>*</span>：</label>   
                        <p class="error-info">{{errorInfo[3]}}</p>
                        <el-input id="input-password" placeholder="6-20位字母数字及符号" type="password" v-model="password" show-password @blur="checkPassword">
                            <i slot="suffix" class="el-input__icon" :class="inputSuffixIcon[3]"></i>
                        </el-input>
                    </div>
                    <div class="input">
                        <label for="input-pwdagain">确认密码<span>*</span>：</label>   
                        <p class="error-info">{{errorInfo[4]}}</p>
                        <el-input id="input-pwdagain" placeholder="与上述密码保持一致" type="password" v-model="pwdAgain" show-password @blur="checkPwdAgain">
                            <i slot="suffix" class="el-input__icon" :class="inputSuffixIcon[4]"></i>
                        </el-input>
                    </div>

                    <el-button type="primary" :loading="registering" @click="registerAccount">注册</el-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            //提交的账号信息
            account: {},

            //用户输入的账号信息
            nickName: '',
            phone: '',
            email: '',
            password: '',
            pwdAgain: '',

            //错误信息
            errorInfo: ['', '', '', '', ''],
            //通过class绑定input的图标
            inputSuffixIcon: ['', '', '', '', ''],

            iconLoading: 'el-icon-loading',
            iconCheck: 'el-icon-check',
            iconError: 'el-icon-close',
            
            registering: false
        }
    },
    methods: {
        registerAccount() {
            this.account = {
                nickName: this.nickName,
                phone: this.phone,
                email: this.email,
                password: this.enCode(this.password)
            }

            console.log(this.account)
        },

        //MD5加密
        enCode(password) {
            //Code
            return password
        },

        //检查昵称
        checkName() {
            if(this.nickName.match(/^[\u4E00-\u9FA5A-Za-z0-9_]{2,12}$/)) {
                this.errorInfo.splice(0, 1, '')
                this.inputSuffixIcon.splice(0, 1, this.iconCheck)
                return true
            }

            this.errorInfo.splice(0, 1, '请输入正确的昵称') 
            this.inputSuffixIcon.splice(0, 1, this.iconError)

            return false
        },

        //检查手机号并询问服务器该手机号有没有被注册
        checkPhone() {
            if(this.phone.match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)) {
                //访问服务器
                //Code

                this.errorInfo.splice(1, 1, '')
                this.inputSuffixIcon.splice(1, 1, this.iconCheck)
                
                return true
            }
            
            this.errorInfo.splice(1, 1, '请输入正确的手机号')
            this.inputSuffixIcon.splice(1, 1, this.iconError)

            return false
        },

        //检查邮箱并询问服务器该邮箱有没有被注册
        checkEmail() {
            if(this.email.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
                //访问服务器
                //Code

                this.errorInfo.splice(2, 1, '')
                this.inputSuffixIcon.splice(2, 1, this.iconCheck)

                return true
            }

            this.errorInfo.splice(2, 1, '请输入正确的邮箱')
            this.inputSuffixIcon.splice(2, 1, this.iconError)

            return false
        },

        //检查密码是否合法
        checkPassword() {
            if(this.password.match(/^([a-zA-Z0-9~!@#$%^&*()-_=+{}'"\\|,<.>/?]){6,20}$/)) {
                this.errorInfo.splice(3, 1, '')
                this.inputSuffixIcon.splice(3, 1, this.iconCheck)

                return true
            }

            this.errorInfo.splice(3, 1, '请输入符合规范的密码')
            this.inputSuffixIcon.splice(3, 1, this.iconError)

            return false
        },

        //检查两次密码输入是否一致
        checkPwdAgain() {
            if(this.password == this.pwdAgain) {
                this.errorInfo.splice(4, 1, '')
                this.inputSuffixIcon.splice(4, 1, this.iconCheck)

                return true
            }
            
            this.errorInfo.splice(4, 1, '两次密码不一致')
            this.inputSuffixIcon.splice(4, 1, this.iconError)

            return false
        }
    }
}
</script>

<style scoped>
    .register {
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
        /* width: 20rem; */
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

    .link {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
    }

    .input {
        position: relative;
        margin: .8rem 0;
        text-align: left;
    }

    .input label {
        display: block;
        width: 7.5rem;
        font-size: .85rem;
    }

    .input label span{
        color: red;
    }

    .input .error-info {
        position: absolute;
        top: 0;
        left: 6rem;
        margin: 0;
        font-size: .8rem;
        color: #F56C6C;
    }

    .input .el-input {
        display: inline-block;
        width: 20rem;
    }

    form>.el-button {
        width: 100%;
        height: 2.5rem;
        margin: 10px auto;
        background-color: #409EFF;
        border-color: white;
    }

    i.el-input__icon {
        font-size: 1.5rem;
    }

    i.el-icon-loading{
        color: #303133;
    }

    i.el-icon-check{
        color: #67C23A;
    }
    
    i.el-icon-close{
        color: #F56C6C;
    }
</style>
<template>
    <div class="login-wrap">
      <div class="ms-title">后台管理系统</div>
      <div class="ms-login">
        <el-form>
          <el-form-item >
            <el-input v-model="ruleForm.username" placeholder="username"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input type="password" placeholder="password" v-model="ruleForm.password" v-on:keyup.enter.native="onEnter"></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" v-on:click="submitTo">登录</el-button>
          </div>
          <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
//      rules: {
//        username: [
//          { required: true, message: '请输入用户名', trigger: 'blur' }
//        ],
//          password: [
//          { required: true, message: '请输入密码', trigger: 'blur' }
//        ]
//    }
    }
  },
  methods: {
    onEnter: function () {
      console.log('aa');
      this.$router.push('/home')
    },
    submitTo: function () {
      if (this.ruleForm.username && this.ruleForm.password)
      {
        console.log('aaaa')
        this.$router.push('/home')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-wrap{
    position: relative;
    width:100%;
    height:100%;
  }
  .ms-title{
    position: absolute;
    top:50%;
    width:100%;
    margin-top: -230px;
    text-align: center;
    font-size:30px;
    color: #fff;

  }
  .ms-login{
    position: absolute;
    left:50%;
    top:50%;
    width:300px;
    height:160px;
    margin:-150px 0 0 -190px;
    padding:40px;
    border-radius: 5px;
    background: #fff;
  }
  .login-btn{
    text-align: center;
  }
  .login-btn button{
    width:100%;
    height:36px;
  }
</style>

<template>
  <div class="login">
    <!-- logo区 start -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
      <p>TODO区块链管理平台</p>
    </div>
    <!-- logo区 end -->
    <!-- 表单 start -->
    <div class="form">
      <div class="title">
        <h4
          :class="{ active: activeForm === 'login' }"
          @click="activeForm = 'login'"
        >
          登录
        </h4>
        <span>.</span>
        <h4
          :class="{ active: activeForm === 'register' }"
          @click="activeForm = 'register'"
        >
          注册
        </h4>
      </div>
      <!-- 登录表单 start -->
      <div v-if="activeForm === 'login'">
        <el-form
          class="login-form"
          :model="loginForm"
          :rules="loginRules"
          :validate-on-rule-change="false"
          ref="loginForm"
          key="login-form"
        >
          <el-form-item prop="account">
            <el-input
              v-model="loginForm.account"
              maxlength="20"
              type="text"
              placeholder="请输入登录邮箱/手机号"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              maxlength="20"
              type="password"
              placeholder="请输入登录密码"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :disabled="loginBtnDisabled"
              type="primary"
              class="login-btn"
              @click="login"
            >
              立即登录
            </el-button>
          </el-form-item>
        </el-form>
        <div class="extra-option">
          <el-checkbox v-model="remember">记住我</el-checkbox>
          <span>忘记密码?</span>
        </div>
      </div>
      <!-- 登录表单 end -->
      <!-- 注册表单 start -->
      <div v-else>
        <el-form
          class="register-form"
          :model="registerForm"
          :rules="registerRules"
          :validate-on-rule-change="false"
          ref="registerForm"
          key="register-form"
        >
          <el-form-item prop="account">
            <el-input
              v-model="registerForm.account"
              maxlength="20"
              type="text"
              placeholder="请输入注册邮箱/手机号"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="registerForm.password"
              maxlength="20"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <el-input
              v-model="registerForm.confirmPassword"
              maxlength="20"
              type="password"
              placeholder="请再次确认密码"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :disabled="registerBtnDisabled"
              type="primary"
              class="register-btn"
              @click="register"
            >
              立即注册
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 注册表单 end -->
    </div>
    <!-- 表单 end -->
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    var validateAccount = (rule, value, callback) => {
      if (!this.$Valid.validAccount(value)) {
        return callback(new Error('请输入正确的登录邮箱/手机号'));
      }
      return callback();
    };
    var validateConfirmPassword = (rule, value, callback) => {
      if (this.registerForm.password !== value) {
        return callback(new Error('两次密码输入不一致'));
      }
      return callback();
    };
    return {
      loginForm: {
        account: '',
        password: '',
      },
      registerForm: {
        account: '',
        password: '',
        confirmPassword: '',
      },
      loginRules: {
        account: [
          {
            required: true,
            message: '请输入登录邮箱/手机号',
            trigger: 'blur',
          },
          { validator: validateAccount, trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 8, message: '长度至少为8位', trigger: 'blur' },
        ],
      },
      registerRules: {
        account: [
          { required: true, message: '请输入注册邮箱/手机号', trigger: 'blur' },
          { validator: validateAccount, trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入注册密码', trigger: 'blur' },
          { min: 8, message: '长度至少为8位', trigger: 'blur' },
        ],
        confirmPassword: [
          { required: true, message: '请输入确认注册密码', trigger: 'blur' },
          { min: 8, message: '长度至少为8位', trigger: 'blur' },
          { validator: validateConfirmPassword, trigger: 'blur' },
        ],
      },
      remember: false,
      activeForm: 'login',
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    register() {
      this.$refs.register.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  watch: {
    activeForm(val) {
      if (val === 'login') {
        this.$refs.registerForm.resetFields();
      } else {
        this.$refs.loginForm.resetFields();
      }
    },
  },
  computed: {
    loginBtnDisabled() {
      const { account, password } = this.loginForm;
      if (account && password) {
        return false;
      } else {
        return true;
      }
    },
    registerBtnDisabled() {
      const { account, password, confirmPassword } = this.registerForm;
      if (account && password && confirmPassword) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('./../../assets/bg.png') no-repeat center;
  .logo {
    position: absolute;
    top: 30px;
    left: 50px;
    display: flex;
    p {
      margin-top: 10px;
      margin-left: 20px;
      font-size: 18px;
      color: #fff;
    }
  }
  .form {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    width: 350px;
    padding: 45px 35px;
    background: #fff;
    border-radius: 4px;
    .title {
      display: flex;
      justify-content: center;
      h4 {
        padding: 10px;
        font-weight: 400;
        color: #969696;
        font-size: 24px;
        cursor: pointer;
        &.active {
          color: #4981f2;
          border-bottom: 2px solid #4981f2;
        }
      }
      span {
        position: relative;
        margin: 0 20px;
        font-size: 24px;
        color: #969696;
      }
    }
    .login-form,
    .register-form {
      margin-top: 20px;
      input {
        width: 100%;
        height: 100%;
        font-size: 15px;
        // color: #2c2e33;
        padding-bottom: 10px;
        border: none;
        border-bottom: 1px solid #e7e7e7;
        outline: none;
        &:focus {
          border-bottom: 1px solid #0f52e0;
        }
        &::-webkit-input-placeholder {
          color: #e7e7e7;
        }
      }
      .login-btn,
      .register-btn {
        // margin-top: 20px;
        width: 100%;
        font-size: 15px;
      }
    }
  }
  .extra-option {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 14px;
      color: #4981f2;
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" class="avatar" alt="" />
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        class="demo-ruleForm"
      >
        <!-- 账号输入框 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入11位手机号"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入3-16位密码"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-button class="login-btn" type="primary" @click="logins"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { userLogin } from "../api/user";

export default {
  data() {
    return {
      // 表单数据对象
      loginForm: {
        username: "19123456789",
        password: "zxcvbnm",
      },
      // 加规则
      rules: {
        // 账号验证规则
        username: [
          { required: true, message: "请输入11位数字", trigger: "blur" },
        ],
        // 密码规则
        password: [
          { required: true, message: "请输入3-16位密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 点击登录
    async logins() {
      let res = await userLogin(this.loginForm);
      // console.log(res);
      if (res.data.message == "登录成功") {
        // 提示
        this.$message.success(res.data.message);
        // 跳转 -- 路由跳转
        this.$router.push({ path: "/index" });
      } else {
        this.$message({
          message: res.data.message,
          type: "warning",
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 30px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
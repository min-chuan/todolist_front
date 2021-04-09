<template>
  <div class="update-pwd-dialog">
    <el-dialog
      title="修改密码"
      visible
      @close="$emit('close', false)"
      width="400px"
      :close-on-click-modal="false"
    >
      <el-form
        size="small"
        :model="updateForm"
        :rules="rules"
        ref="updateForm"
        inline
        label-width="100px"
        hide-required-asterisk
      >
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input
            placeholder="请输入旧密码"
            v-model="updateForm.oldPassword"
            type="password"
            style="width: 230px"
          />
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input
            placeholder="请输入新密码"
            v-model="updateForm.newPassword"
            type="password"
            style="width: 230px"
          />
        </el-form-item>
        <el-form-item label="确认新密码" prop="confirmPassword">
          <el-input
            placeholder="请再次确认新密码"
            v-model="updateForm.confirmPassword"
            type="password"
            style="width: 230px"
          />
        </el-form-item>
      </el-form>
      <template slot="footer">
        <div class="footer">
          <el-button size="small" @click="$emit('close')">取消</el-button>
          <el-button size="small" type="primary">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'UpdatePwdDialog',
  data() {
    var validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.updateForm.newPassword) {
        return callback(new Error('两次密码输入不一致'));
      }
      return callback();
    };
    return {
      updateForm: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
      rules: {
        oldPassword: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          { min: 8, message: '至少8位', trigger: 'blur' },
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 8, message: '至少8位', trigger: 'blur' },
        ],
        confirmPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 8, message: '至少8位', trigger: 'blur' },
          { validator: validateConfirmPassword, trigger: 'blur' },
        ],
      },
    };
  },
};
</script>
<style scoped lang="scss">
.update-pwd-dialog {
  &::v-deep .el-dialog__body {
    padding-bottom: 0;
  }
}
</style>

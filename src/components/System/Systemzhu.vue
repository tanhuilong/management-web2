<template>
  <div class="systemzhu">
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item
        prop="email"
        label="角色类型:"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'用户姓名:' + index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: '域名不能为空',
          trigger: 'blur'
        }"
      >
        <el-input v-model="domain.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" size="mini" @click="open1">
          查询
        </el-button>
        <el-button plain size="mini" @click="open2">
          导出
        </el-button>
        <el-button type="danger" size="mini" @click="open3">
          新增角色
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ],
        email: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    },
    open1() {
      this.$notify({
        title: "查询结果",
        message: "无结果"
      });
    },
    open2() {
      this.$notify({
        title: "导出",
        message: "文件"
      });
    },
    open3() {
      this.$notify({
        title: "新增",
        message: "欢迎，添加"
      });
    }
  }
};
</script>
<style lang="less">
.systemzhu {
  height: 200px;
  width: 500px;
  padding: 100px 200px;
}
</style>

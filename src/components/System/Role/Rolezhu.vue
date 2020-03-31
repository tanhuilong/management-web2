<template>
  <div class="zhu">
    <div class="mid">
      <el-form :inline="true">
        <el-form-item label=" 角色类型:">
          <el-input
            size="mini"
            clearable
            placeholder="请选择"
            suffix-icon="el-icon-d-caret"
            v-model="input1"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="用户姓名:">
          <el-input
            size="mini"
            clearable
            placeholder="请输入"
            suffix-icon="el-icon-d-caret"
            v-model="input2"
          >
          </el-input
        ></el-form-item>
        <el-form-item>
          <el-button type="danger" size="mini" @click="open1">
            查询
          </el-button></el-form-item
        >
        <el-form-item>
          <el-button plain size="mini" @click="open2">
            导出
          </el-button></el-form-item
        >
        <el-form-item>
          <el-button type="danger" size="mini">
            新增角色
          </el-button></el-form-item
        >
      </el-form>
    </div>
    <div class="z-main"><lie></lie></div>
  </div>
</template>
<script>
import lie from "./Rolelie.vue";
export default {
  components: {
    lie
  },
  data() {
    return {
      input1: "",
      input2: ""
    };
  },
  methods: {
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
    }
  }
};
</script>
<style lang="less">
.zhu {
  .mid {
    padding-top: 20px;
    padding-left: 5px;
    background: #f5efef;
  }
}
</style>

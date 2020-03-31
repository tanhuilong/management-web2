<template>
  <div class="hello">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>业绩管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="onclick">{{
                message
              }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-orange"></i>
            <span slot="title">运营管理</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">用户管理</el-menu-item>
              <el-menu-item index="3-2">角色权限管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "业绩报表"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onclick() {
      this.$router.push("/zhu");
      this.$emit("message");
    }
  }
};
</script>

<style lang="less">
.home {
  .el-col div {
    font-size: 14px !important;
  }
}
</style>

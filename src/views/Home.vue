<template>
  <div class="app">
    <el-container>
      <el-header>
        <div class="top-l clearfloat">
          <img src="../../public/img/menu_top_logo.png" />
          <span>中央会员管理系统</span>
        </div>
        <div class="top-r right clearfloat">
          <ul>
            <li><el-avatar icon="el-icon-user-solid"></el-avatar></li>
            <li><a href="#">你好！ xxx</a></li>
            <li>|</li>

            <li><a href="#">退出登录</a></li>
          </ul>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                router
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
              >
                <el-submenu index="/management">
                  <template slot="title">
                    <i class="el-icon-s-data"></i>
                    <span>业绩管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/zhu">运营管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/operation">
                  <i class="el-icon-orange"></i>
                  <span slot="title">系统管理</span>
                </el-menu-item>
                <el-submenu index="/system">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>业绩报销</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/userzhu">用户管理</el-menu-item>
                    <el-menu-item index="/role">角色权限管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:breadcrumb.path }">{{ breadcrumb.title }}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState([
    // 映射 this.count 为 store.state.count
    "breadcrumb"
  ]),
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less">
.app {
  .el-header {
    width: 100%;
    height: 50px;
    background: gray;
  }
  .content {
    display: flex;
  }
  .el-aside {
    width: 170px;
    background: #545c64;
    position: relative;
  }
  .el-main {
    flex: 1;
    height: 500px;
  }
  .top-l img {
    margin: 10px;
  }
  .top-l {
    display: flex;
  }
  .top-l span {
    color: white;
    height: 50px;
    line-height: 50px;
  }
  .top-r {
    margin-top: -45px;
  }
  .top-r ul {
    list-style: none;
  }
  .top-r li {
    float: left;
    padding-right: 5px;
    line-height: 40px;
    color: #fff;
  }
  .top-r li a {
    color: #fff;
  }
  .z-top {
    height: 30px;
    background: white;
    color: gray;
  }
}
</style>

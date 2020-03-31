<template>
  <div class="zhu">
    <div class="mid">
      <el-row :gutter="10">
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <span class="span1">地区公司</span>
            <el-input
              size="mini"
              clearable
              placeholder="全部"
              style="width:60% !important"
              suffix-icon="el-icon-d-caret"
              v-model="input1"
            >
            </el-input></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <span class="span1">小组</span
            ><el-input
              size="mini"
              clearable
              placeholder="不选择"
              style="width:70% !important"
              suffix-icon="el-icon-d-caret"
              v-model="input2"
            >
            </el-input></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <span class="span1">部门</span
            ><el-input
              placeholder="不选择"
              size="mini"
              clearable
              style="width:70% !important"
              suffix-icon="el-icon-d-caret"
              v-model="input3"
            >
            </el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <span class="span1">会员经理</span>
            <el-input
              placeholder="不选择"
              size="mini"
              clearable
              style="width:60% !important"
              suffix-icon="el-icon-d-caret"
              v-model="input4"
            >
            </el-input></div
        ></el-col>
        <el-col :span="2"
          ><div class="grid-content bg-purple">
            <el-button type="danger" size="mini" @click="open1">查询</el-button>
          </div></el-col
        >
        <el-col :span="2"
          ><div class="grid-content bg-purple">
            <el-button size="mini" @click="open1">导出</el-button>
          </div></el-col
        >
      </el-row>
      <el-row :gutter="10">
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <span class="span1">统计日期</span>
            <el-input
              placeholder="每日统计"
              size="mini"
              clearable
              style="width:60% !important"
              suffix-icon="el-icon-d-caret"
              v-model="input5"
            >
            </el-input></div
        ></el-col>
        <el-col :span="5"
          ><div class="grid-content bg-purple">
            <el-input
              placeholder="请选择日期"
              size="mini"
              style="width:70% !important"
              clearable
              prefix-icon="el-icon-date"
              suffix-icon="el-icon-d-caret"
              v-model="input6"
            >
            </el-input></div
        ></el-col>
      </el-row>
    </div>
    <div class="z-main"><lie></lie></div>
  </div>
</template>
<script>
import lie from "./Liebiao.vue";
export default {
  components: {
    lie
  },
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: ""
    };
  },
  methods: {
    open1() {
      this.$alert("标题名称", "请搜索标题", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    open2() {
      this.$alert("此文件", "确认导出", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  }
};
</script>
<style lang="less">
.zhu {
  .mid {
    background: #f5efef;
  }
  .el-col div {
    color: gray;
  }
  .span1 {
    font-size: 12px;
  }
  .grid-contnet {
    display: flex !important;
    overflow: hidden;
  }
}
</style>

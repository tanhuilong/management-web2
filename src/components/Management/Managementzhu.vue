<template>
  <div class="management">
    <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
      <el-form-item label="地区公司：">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="小组：">
        <el-input v-model="sizeForm.name"></el-input> </el-form-item
      ><el-form-item label="部门：">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="会员经理：">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="统计日期：">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="sizeForm.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="sizeForm.date2"
            style="width: 100%;"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <div class="bottom">
        <el-button type="danger" @click="open1">查询</el-button>
        <el-button @click="open2">导出</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
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
.management {
  padding: 50px;
  .bottom {
    padding-left: 200px;
  }
}
</style>

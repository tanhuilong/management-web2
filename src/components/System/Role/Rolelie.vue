<template>
  <div class="lie">
    <template>
      <el-table :data="tableData" height="350" style="width: 100%">
        <el-table-column prop="num" label="序号" width="70%"> </el-table-column>
        <el-table-column prop="roleclass" label="角色类型" width="80%">
        </el-table-column>
        <el-table-column prop="rolename" label="角色名称" width="250">
        </el-table-column>
        <el-table-column prop="roledescribe" label="角色描述" width="250px">
        </el-table-column>
        <el-table-column prop="op" width="100px" label="操作">
        </el-table-column>
        <el-table-column prop="edit" label="" width="50%"> </el-table-column>
        <el-table-column prop="delete" label="" width="50%"> </el-table-column>
      </el-table>
      <div class="l-footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    var _this = this;
    var url = "json/lei1.json";
    this.$http.get(url).then(res => {
      _this.tableData = res.data;
    });
    return {
      tableData: [],
      currentPage4: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less">
.lie {
  .l-top {
    height: 40px;
    color: #fff;
    margin: 10px 0 0 10px;
  }
  .l-mid {
    margin-left: 10px;
  }
  .el-col div {
    font-size: 14px;
  }
  li {
    list-style: none;
    height: 30px;
  }
  .l-footer {
    text-align: center;
  }
}
</style>

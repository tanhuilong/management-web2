<template>
  <div class="lie">
    <template>
      <el-table :data="tableData" height="350" style="width: 100%">
        <el-table-column prop="num" label="序号" width="60%"> </el-table-column>
        <el-table-column prop="place" label="地区公司" width="80%">
        </el-table-column>
        <el-table-column prop="share" label="邀请注册" width="80%">
        </el-table-column>
        <el-table-column prop="sharesea" label="分享海报" width="80%">
        </el-table-column>
        <el-table-column prop="scan" label="客户浏览" width="80%">
        </el-table-column>
        <el-table-column prop="tui" label="已推荐" width="70%">
        </el-table-column>
        <el-table-column prop="fang" label="已到访" width="70%">
        </el-table-column>
        <el-table-column prop="gou" label="已认购" width="70%">
        </el-table-column>
        <el-table-column prop="qian" label="已签约" width="70%">
        </el-table-column>
        <el-table-column prop="op" label="操作"> </el-table-column>
      </el-table>
    </template>

    <div class="l-footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var _this = this;
    var url = "json/lie.json";
    this.$http.get(url).then(res => {
      _this.tableData = res.data;
    });
    return {
      tableData: []
    };
  },
  methods: {}
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

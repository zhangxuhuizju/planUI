<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="grid-content bg-purple inputCombineDiv">
            <span class="inputTag">客户名称：</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>

        <el-col :span="4">
          <div class="grid-content bg-purple inputCombineDiv">
            <span class="inputTag">品牌：</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>

        <el-col :span="4">
          <div class="grid-content bg-purple inputCombineDiv">
            <span class="inputTag">系列名称</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>

        <el-col :span="9">
          <div class="grid-content bg-purple inputCombineDiv">
            <span class="inputTag">新建时间：</span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            <span class="inputTag1">至</span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-col>

        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-button type="primary">搜索</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="cardBelow">
      <div>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="序号"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="异常编号"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="计划编号"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="客户"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="品牌"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="计划名称"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="系列名称"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="计划对象"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="计划对象"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="异常内容"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="创建人"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                label="删除时间"
                show-overflow-tooltip>
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
          </div>
    </el-card>
  </div>
</template>


<style lang="less" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      border-radius: 4px;
      .inputCombineDiv{
        display: flex;
        flex-direction: row;
        .inputTag{
          min-width: 90px;
          font-size: 18px;
          line-height: 40px;
          text-align:center;
        }
        .inputTag1{
          margin-left: 10px;
          margin-right: 10px;
          width: 18px;
          font-size: 18px;
        }
      }
    }
  }
  
  .cardBelow{
    margin-top: 10px;
  }
  
  .bg-purple {
    // background: #d3dce6;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
 
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
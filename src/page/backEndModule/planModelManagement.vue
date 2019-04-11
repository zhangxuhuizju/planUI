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

        <el-col :span="5">
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

        <el-col :span="5">
          <div class="grid-content bg-purple inputCombineDiv">
            <span class="inputTag">服装类型：</span>
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
            <span class="inputTag">添加时间：</span>
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="5">
          <div class="grid-content bg-purple inputCombineDiv">
            <span class="inputTag">模板名称：</span>
            <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </el-col>

        <el-col :span="5">
          <div class="grid-content bg-purple inputCombineDiv">
            <span class="inputTag">模板类型：</span>
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

        <el-col :span="10">
          <div class="grid-content bg-purple">
            
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
      <el-container>
        <el-header>
          <el-row gutter="40">
            <el-col :span="2">
              <div class="grid-content bg-purple">
                <el-button type="primary">设为通用</el-button>
              </div>
            </el-col>

            <el-col :span="2">
              <div class="grid-content bg-purple">
                <el-button type="primary">设为私有</el-button>
              </div>
            </el-col>

            <el-col :span="16">
              <div class="grid-content bg-purple">
                
              </div>
            </el-col>

            <el-col :span="2">
              <div class="grid-content bg-purple">
                <el-button type="primary">新建模板</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main>
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
                label="模板编号"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="模板名称"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="客户名称"
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
                label="添加人"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="是否通用"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="添加时间"
                width="120"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                label="操作"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <el-button type="text" size="small">查看</el-button>
                  <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
          </div>
        </el-main>
      </el-container>
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
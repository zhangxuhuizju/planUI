<template>
  <div class="body">
    <el-card class="box-card">
      <el-row :gutter="20">
        <span class="Mtitle">计划制定</span>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">计划编号</div>
            <el-input v-model="planID" clearable :rows="1" placeholder="planID" :disabled="true"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="15">
          <div class="bar">
            <div class="title">计划名称</div>
            <el-input v-model="planName" clearable :rows="1" placeholder="做有效性验证(同系列同类型不得重复)"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">计划开始</div>
            <el-date-picker
              v-model="PlanStartTime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期"
              clearable
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">计划结束</div>
            <el-date-picker
              v-model="PlanEndTime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期"
              clearable
            ></el-date-picker>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">客户</div>
            <el-select v-if='showit' v-model="form.client" clearable placeholder="请选择">
              <el-option
                v-for="item in client"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
             <el-input  v-else v-model="form.client" clearable :rows="1" placeholder="请选择" :disabled="true"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">品牌</div>
            <el-select v-if='showit' v-model="form.brand" clearable placeholder="请选择">
              <el-option
                v-for="item in brand"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input  v-else v-model="form.brand" clearable :rows="1" placeholder="请选择" :disabled="true"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">系列</div>
            <el-select v-if="showit" v-model="form.series" clearable placeholder="请选择">
              <el-option
                v-for="item in series"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input  v-else v-model="form.series"  :rows="1" placeholder="请选择" :disabled="true"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">计划类型</div>
            <el-select v-model="form.Plantype" clearable placeholder="请选择">
              <el-option
                v-for="item in Plantype"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">计划对象</div>
            <el-select v-model="form.obj" clearable placeholder="请选择">
              <el-option
                v-for="item in obj"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bar" style="margin-left: 4px">
            <div class="title">上级计划</div>
            <el-input v-model="TopPlan" clearable :rows="1" placeholder="请输入"></el-input>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="bar">
            <el-button type="primary" @click="TestConfiemClick()" style="margin-left: 20px">选择</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">项目类型</div>
            <el-select v-model="form.ProjectType" clearable placeholder="请选择">
              <el-option
                v-for="item in ProjectType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">计划款项</div>
            <el-input v-model="PlanPrice" clearable :rows="1" placeholder="请输入"></el-input>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="bar" style="margin-left: 15px">
            <div class="title">产品日期</div>
            <el-select v-model="form.datemodel" clearable placeholder="请选择" >
              <el-option 
                v-for="item in datemodel"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="3">
          <el-date-picker
            v-model="form.date1"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            placeholder="选择日期"
            clearable
          ></el-date-picker>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="bar">
            <div class="title">计划部门</div>
            <el-input v-model="PlanDepartment" clearable :rows="1" placeholder="请输入"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">计划人员</div>
            <el-input v-model="PlanPerson" clearable :rows="1" placeholder="请输入"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bar">
            <div class="title">计划产品</div>
            <el-select v-model="form.PlanProduct" clearable placeholder="请选择">
              <el-option
                v-for="item in PlanProduct"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div class="title">计划建议</div>

            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="PlanPropose" style="margin-left: 26px" ></el-input>
          </div>
        </el-col>
      </el-row>
       <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div class="title">计划描述</div>

            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="PlanDiscribe" style="margin-left: 26px" ></el-input>
          </div>
        </el-col>
      </el-row>
       <el-row :gutter="20">
        <el-col :span="20">
          <div class="bar">
            <div class="title">计划备注</div>

            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="PlanRemark" style="margin-left: 26px" ></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="Mbutton" >
          <el-col :span="8">
            <el-button type="primary" @click="TestConfiemClick()">保存</el-button>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" @click="handleClick()">取消</el-button>
          </el-col>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showit:false,
      PlanRemark:"",
      PlanDiscribe:"",
      PlanPropose: "",
      ProjectType: "",
      PlanProduct: "",
      PlanPerson: "",
      PlanDepartment: "",
      Plandate: "",
      datemodel: "",
      PlanPrice: "",
      TopPlan: "",
      PlanStartTime: "",
      PlanEndTime: "",
      planName: "",
      planID: "JH000001",
      form: {
        client: "",
        brand: "",
        type: "",
        date1: "",
        date2: "",
        series: "",
        planname: "",
        Plantype: "",
        obj: ""
      },
      ProjectType: [
        {
          label: "头样",
          value: 0
        },
        {
          label: "销货",
          value: 1
        },
        {
          label: "大货",
          value: 2
        }
      ],
      PlanProduct: [
        {
          label: "产品A",
          value: 0
        },
        {
          label: "产品B",
          value: 1
        },
        {
          label: "产品C",
          value: 2
        }
      ],
      datemodel: [
        {
          label: "出运日期",
          value: 0
        },
        {
          label: "上柜日期",
          value: 1
        },
        {
          label: "交货日期",
          value: 2
        }
      ],
      obj: [
        {
          label: "对象A",
          value: 0
        },
        {
          label: "对象B",
          value: 1
        },
        {
          label: "对象C",
          value: 2
        }
      ],
      Plantype: [
        {
          label: "系列计划",
          value: 0
        },
        {
          label: "款式计划",
          value: 1
        },
        {
          label: "款式组计划",
          value: 2
        }
      ],

      client: [
        {
          label: "客户A",
          value: 0
        },
        {
          label: "客户B",
          value: 1
        },
        {
          label: "客户C",
          value: 2
        },
        {
          label: "客户D",
          value: 3
        }
      ],

      brand: [
        {
          label: "X品牌",
          value: 0
        },
        {
          label: "Y品牌",
          value: 1
        },
        {
          label: "M品牌",
          value: 2
        },
        {
          label: "N品牌",
          value: 3
        }
      ],
      type: [
        {
          label: "时装",
          value: 0
        },
        {
          label: "精品",
          value: 1
        },
        {
          label: "品牌",
          value: 2
        }
      ],

      series: [
        {
          label: "系列A",
          value: 0
        },
        {
          label: "系列B",
          value: 1
        },
        {
          label: "系列C",
          value: 2
        }
      ],
    }

  },
  mounted() {
    this.init();
  },

  methods:{
    init(){
      this.id = this.$route.params.id;
      this.editable = this.$route.params.edit;
      if (this.id !== undefined) {
        let allParam = this.$route.params;
        this.form.brand = allParam.form.brand;
        this.form.client = allParam.form.client;
        this.form.series = allParam.form.series;
      };
    }
  }
};
</script>

<style lang="less" scoped>
.Mbutton{
    margin-left: 45%;
}
.Mtitle {
  align-content: center;
  margin-left: 45%;
  font-size: 2ch;
}
.box-card {
  margin: 20px 50px;
  padding: 0 20px;
  .el-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    .bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      .title {
        font-size: 18px;
        width: 90px;
        min-width: 50px;
        text-align: center;
      }
      .el-input {
        width: 70%;
        min-width: 80px;
        margin-left: 20px;
      }
      .el-select {
        width: 70%;
        min-width: 80px;
        margin-left: 20px;
      }
    }
  }
}
</style>
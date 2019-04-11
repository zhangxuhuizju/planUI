<template>
  <el-card>
		<el-tabs v-model="viewname" @tab-click="handleViewChange">
      <el-tab-pane label="部门信息管理" name="first" >
				<el-card>
					<el-row :gutter="20">
						<el-col :span="2">
							<div class="grid-content bg-purple">
								<el-button type="primary" @click="handleAddGroupClick()">新增部门</el-button>
							</div>
						</el-col>

						<el-col :span="2">
							<div class="grid-content bg-purple">
								<el-button type="success" @click="handleEditGroupClick()">编辑部门</el-button>
							</div>
						</el-col>

						<el-col :span="2">
							<div class="grid-content bg-purple">
								<el-button type="danger">删除部门</el-button>
							</div>
						</el-col>
					</el-row>
				</el-card>

				<el-card class="cardBelow">
					<el-container>
						<el-header>
							<el-row :gutter="40">
								<el-col :span="2">
									<div class="grid-content bg-purple inputCombineDiv">
									</div>
								</el-col>

								<el-col :span="5">
									<div class="grid-content bg-purple inputCombineDiv">
											<span class="inputTag">部门名称：</span>
											<el-select v-model="searchDepartInput" placeholder="请输入">
											<el-option
												v-for="item in departOptions"
												:key="item.value"
												:label="item.label"
												:value="item.value">
											</el-option>
											</el-select>
									</div>
								</el-col>

								<el-col :span="2">
								<div class="grid-content bg-purple">
									<el-button type="primary">搜索</el-button>
								</div>
								</el-col>
							</el-row>

							<hr />
						</el-header>

						<el-main>
							<div>
								<el-table
									ref="multipleTable"
									:data="groupSearchResultDataList"
									tooltip-effect="dark"
									style="width: 100%"
									@selection-change="handleSelectionChange">
									<el-table-column
										type="selection"
										width="55">
									</el-table-column>
									<el-table-column
										label="部门名称"
										width="120"
										prop="groupName">
									</el-table-column>
									<el-table-column
										prop="groupDescription"
										label="部门描述"
										width="120">
									</el-table-column>
									<el-table-column
										prop="groupParentGroup"
										label="上级部门"
										width="120"
										show-overflow-tooltip>
									</el-table-column>
									<el-table-column
										prop="groupPrincipal"
										label="部门负责人"
										show-overflow-tooltip>
									</el-table-column>
								</el-table>
								<div style="margin-top: 20px">
								<el-button @click="toggleSelection()" type="info">取消选择</el-button>
								</div>
							</div>
						</el-main>
					</el-container>
				</el-card>
        
      </el-tab-pane>

			<el-tab-pane label="新增部门信息" name="second" v-if="addGroupShowFlag">
				<el-card>
					<el-row :gutter="20">
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">部门名称:</span>
								<el-input v-model="addGroupName" class="input" placeholder="请输入品牌名称"></el-input>
							</div>
						</el-col>
          </el-row>

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">上级部门:</span>
								<el-select v-model="addGroupParentGroup" placeholder="请选择">
									<el-option
										v-for="item in departOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>	

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag6">部门负责人:</span>
								<el-select v-model="addGroupPrincipal" placeholder="请选择">
									<el-option
										v-for="item in userOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>	

          <el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">部门描述：</span>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="addGroupDescription">
                </el-input>
							</div>
						</el-col>
          </el-row>	

					<el-row :gutter="20">
						<el-col :span="2" class="bg-purple " >
							<div class="grid-content bg-purple inputCombineDiv">
								<!-- <el-button type="success" class="save" @click="handleAddCateSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleAddCateCancelClick()">取消</el-button> -->
							</div>
						</el-col>

						<el-col :span="5" class="bg-purple " >
							<div class="grid-content bg-purple inputCombineDiv">
								<el-button type="success" class="save" @click="handleAddGroupSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleAddGroupCancelClick()">取消</el-button>
							</div>
						</el-col>
					</el-row>
				</el-card>
			</el-tab-pane>

			<el-tab-pane label="编辑部门信息" name="third" v-if="editGroupShowFlag">
				<el-card>
					<el-row :gutter="20">
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">部门名称:</span>
								<el-input v-model="editGroupName" class="input" placeholder="请输入"></el-input>
							</div>
						</el-col>
          </el-row>

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">上级部门:</span>
								<el-select v-model="editGroupParentGroup" placeholder="请选择">
									<el-option
										v-for="item in departOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>	

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag6">部门负责人:</span>
								<el-select v-model="editGroupPrincipal" placeholder="请选择">
									<el-option
										v-for="item in userOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>	

          <el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">部门描述：</span>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="editGroupDescription">
                </el-input>
							</div>
						</el-col>
          </el-row>	

					<el-row :gutter="20">
						<el-col :span="2" class="bg-purple" >
							<div class="grid-content bg-purple inputCombineDiv">
								<!-- <el-button type="success" class="save" @click="handleAddCateSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleAddCateCancelClick()">取消</el-button> -->
							</div>
						</el-col>

						<el-col :span="5" class="bg-purple " >
							<div class="grid-content bg-purple inputCombineDiv">
								<el-button type="success" class="save" @click="handleEditGroupSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleEditGroupCancelClick()">取消</el-button>
							</div>
						</el-col>
					</el-row>
				</el-card>
			</el-tab-pane>
    </el-tabs>
  </el-card>
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
				.inputTag2{
					min-width: 140px;
					font-size: 18px;
					line-height: 40px;
        }
        .inputTag6{
          min-width: 120px;
					font-size: 18px;
					line-height: 40px;
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
				viewname: 'first',
				groupSearchResultDataList: [{
						groupName: '办公室',
            groupDescription:'办公',
            groupParentGroup:'总经理室',
            groupPrincipal:'王小虎',
					}, {
						groupName: '工厂1',
            groupDescription:'第一个工厂',
            groupParentGroup:'生产部',
            groupPrincipal:'秋香',
				}],
				addGroupShowFlag:false,
				editGroupShowFlag:false,
				multipleGroupSelection: [],
				
				searchDepartInput:'',

        addGroupName:'',
        addGroupParentGroup:'',
        addGroupPrincipal:'',
        addGroupDescription:'',

        editGroupName:'',
        editGroupParentGroup:'',
        editGroupPrincipal:'',
        editGroupDescription:'',

				departOptions:[
					{
						value:'depart1',
						label:'depart1',
					},
					{
						value:'depart2',
						label:'depart2',
					},
					{
						value:'depart3',
						label:'depart3',
					},
					{
						value:'depart4',
						label:'depart4',
					},
				],

				userOptions:[
					{
						value:'user1',
						label:'user1',
					},
					{
						value:'user2',
						label:'user2',
					},
					{
						value:'user3',
						label:'user3',
					},
					{
						value:'user4',
						label:'user4',
					},
				],
			}
    },

    methods: {
			handleViewChange(tab, event) {
      	console.log(tab, event);
    	},
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
				this.multipleGroupSelection = val;
			},

			handleAddGroupClick(){
				this.addGroupShowFlag = true;
				this.viewname = 'second';
			},
			handleEditGroupClick(){
				if(this.multipleGroupSelection.length === 0){
					alert("请选择一个部门!");
					return;
				}
				if(this.multipleGroupSelection.length > 1){
					alert("只能选择一个部门!");
					return;
				}

				this.editGroupName = this.multipleGroupSelection[0].groupName;
				this.editGroupDescription = this.multipleGroupSelection[0].groupDescription;
				this.editGroupParentGroup = this.multipleGroupSelection[0].groupParentGroup;
				this.editGroupPrincipal = this.multipleGroupSelection[0].groupPrincipal;

				this.editGroupShowFlag = true;
				this.viewname = 'third';
			},
			handleAddGroupSaveClick(){
				this.viewname = 'first';
				this.addGroupShowFlag = false;
			},
			handleAddGroupCancelClick(){
				this.viewname = 'first';
				this.addGroupShowFlag = false;
			},
			handleEditGroupSaveClick(){
				this.viewname = 'first';
				this.editGroupShowFlag = false;
			},
			handleEditGroupCancelClick(){
				this.viewname = 'first';
				this.editGroupShowFlag = false;
			},
		}
  }
</script>
<template>
  <el-card>
		<el-tabs v-model="viewname" @tab-click="handleViewChange">
      <el-tab-pane label="用户信息管理" name="first" >
				<el-card>
					<el-row :gutter="20">
						<el-col :span="2">
							<div class="grid-content bg-purple">
								<el-button type="primary" @click="handleAddUserClick()">新增用户</el-button>
							</div>
						</el-col>

						<el-col :span="2">
							<div class="grid-content bg-purple">
								<el-button type="success" @click="handleEditUserClick()">编辑用户</el-button>
							</div>
						</el-col>

						<el-col :span="2">
							<div class="grid-content bg-purple">
								<el-button type="danger">删除用户</el-button>
							</div>
						</el-col>
					</el-row>
				</el-card>

				<el-card class="cardBelow">
					<el-container>
						<el-header>
							<el-row :gutter="40">
								<el-col :span="6">
									<div class="grid-content bg-purple inputCombineDiv">
									</div>
								</el-col>

								<el-col :span="5">
									<div class="grid-content bg-purple inputCombineDiv">
											<span class="inputTag">部门：</span>
											<el-select v-model="searchDepartSelection" placeholder="请输入">
											<el-option
												v-for="item in departOptions"
												:key="item.value"
												:label="item.label"
												:value="item.value">
											</el-option>
											</el-select>
									</div>
								</el-col>

								<el-col :span="5">
								<div class="grid-content bg-purple inputCombineDiv">
									<span class="inputTag">班组：</span>
									<el-select v-model="searchGroupSelection" placeholder="请选择">
									<el-option
											v-for="item in groupOptions"
											:key="item.value"
											:label="item.label"
											:value="item.value">
									</el-option>
									</el-select>
								</div>
								</el-col>

								<el-col :span="5">
								<div class="grid-content bg-purple inputCombineDiv">
									<span class="inputTag">姓名：</span>
									<el-input class="input" v-model="searchNameInput" placeholder="请输入内容"></el-input>
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
									:data="userSearchResultDataList"
									tooltip-effect="dark"
									style="width: 100%"
									@selection-change="handleSelectionChange">
									<el-table-column
										type="selection"
										width="55">
									</el-table-column>
									<el-table-column
										label="用户编号"
										width="120"
										prop="userCode">
									</el-table-column>
									<el-table-column
										prop="userName"
										label="姓名"
										width="120">
									</el-table-column>
									<el-table-column
										prop="userGender"
										label="性别"
										width="120"
										show-overflow-tooltip>
									</el-table-column>
									<el-table-column
										prop="userAge"
										label="年龄"
										width="120"
										show-overflow-tooltip>
									</el-table-column>
									<el-table-column
										prop="userEducation"
										label="学历"
										width="120"
										show-overflow-tooltip>
									</el-table-column>
									<el-table-column
										prop="userDepart"
										label="部门"
										width="120"
										show-overflow-tooltip>
									</el-table-column>
									<el-table-column
										prop="userJob"
										label="岗位"
										width="120"
										show-overflow-tooltip>
									</el-table-column>
									<el-table-column
										prop="userRole"
										label="角色"
										width="120"
										show-overflow-tooltip>
									</el-table-column>
									<el-table-column
										label="其他"
										show-overflow-tooltip>
										<!-- <template slot-scope="scope">
											<el-button type="text" size="small">查看</el-button>
											<el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
											<el-button type="text" size="small">删除</el-button>
										</template> -->
										...
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

			<el-tab-pane label="新增用户信息" name="second" v-if="addUserShowFlag">
				<el-card>
					<el-row :gutter="20">
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">用户姓名:</span>
								<el-input v-model="addUserName" class="input" placeholder="请输入品牌名称"></el-input>
							</div>
						</el-col>

						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">用户编号:</span>
								<el-input v-model="addUserCode" class="input" placeholder="请输入品牌简称"></el-input>
							</div>
						</el-col>
					</el-row>	

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">用户性别:</span>
								<el-select v-model="addUserGender" placeholder="请选择">
									<el-option
										v-for="item in genderOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>

						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">所属角色:</span>
								<el-select v-model="addUserRole" placeholder="请选择">
									<el-option
										v-for="item in roleOptions"
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
								<span class="inputTag">所属部门:</span>
								<el-select v-model="addUserGroup" placeholder="请选择">
									<el-option
										v-for="item in departOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>

						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">联络方式:</span>
								<el-input v-model="addUserContact" class="input" placeholder="请输入品牌简称"></el-input>
							</div>
						</el-col>
					</el-row>	

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">出生日期:</span>
								<el-date-picker
									v-model="addUserBirth"
									type="date"
									placeholder="选择日期">
								</el-date-picker>
							</div>
						</el-col>

						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">用户学历:</span>
								<el-select v-model="addUserEducation" placeholder="请选择">
									<el-option
										v-for="item in educationOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>	

					<el-row :gutter="20">
						<el-col :span="5" class="bg-purple " >
							<div class="grid-content bg-purple inputCombineDiv">
								<!-- <el-button type="success" class="save" @click="handleAddCateSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleAddCateCancelClick()">取消</el-button> -->
							</div>
						</el-col>

						<el-col :span="5" class="bg-purple " >
							<div class="grid-content bg-purple inputCombineDiv">
								<el-button type="success" class="save" @click="handleAddUserSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleAddUserCancelClick()">取消</el-button>
							</div>
						</el-col>
					</el-row>
				</el-card>
			</el-tab-pane>

			<el-tab-pane label="编辑用户信息" name="third" v-if="editUserShowFlag">
				<el-card>
					<el-row :gutter="20">
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">用户姓名:</span>
								<el-input v-model="editUserName" class="input" placeholder="请输入品牌名称"></el-input>
							</div>
						</el-col>

						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">用户编号:</span>
								<el-input v-model="editUserCode" class="input" placeholder="请输入品牌简称"></el-input>
							</div>
						</el-col>
					</el-row>	

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">用户性别:</span>
								<el-select v-model="editUserGender" placeholder="请选择">
									<el-option
										v-for="item in genderOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>

						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">所属角色:</span>
								<el-select v-model="editUserRole" placeholder="请选择">
									<el-option
										v-for="item in roleOptions"
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
								<span class="inputTag">所属部门:</span>
								<el-select v-model="editUserGroup" placeholder="请选择">
									<el-option
										v-for="item in departOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>

						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">联络方式:</span>
								<el-input v-model="editUserContact" class="input" placeholder="请输入品牌简称"></el-input>
							</div>
						</el-col>
					</el-row>	

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">出生日期:</span>
								<el-date-picker
									v-model="editUserBirth"
									type="date"
									placeholder="选择日期">
								</el-date-picker>
							</div>
						</el-col>

						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">用户学历:</span>
								<el-select v-model="editUserEducation" placeholder="请选择">
									<el-option
										v-for="item in educationOptions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-col>
					</el-row>	

					<el-row :gutter="20">
						<el-col :span="5" class="bg-purple " >
							<div class="grid-content bg-purple inputCombineDiv">
								<!-- <el-button type="success" class="save" @click="handleAddCateSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleAddCateCancelClick()">取消</el-button> -->
							</div>
						</el-col>

						<el-col :span="5" class="bg-purple " >
							<div class="grid-content bg-purple inputCombineDiv">
								<el-button type="success" class="save" @click="handleEditUserSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleEditUserCancelClick()">取消</el-button>
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
				userSearchResultDataList: [{
						userCode: '123456',
						userName: '王小虎',
						userGender: '男',
						userAge:'25',
						userEducation:'学士',
						userDepart:'办公室',
						userJob:'经理',
						userRole:'经理',
					}, {
						userCode: '123457',
						userName: '王明',
						userGender: '女',
						userAge:'25',
						userEducation:'硕士',
						userDepart:'采购部',
						userJob:'工人',
						userRole:'工人',
				}],
				addUserShowFlag:false,
				editUserShowFlag:false,
				multipleUserSelection: [],
				
				searchDepartSelection:'',
				searchGroupSelection:'',
				searchNameInput:'',
				

				addUserName:'',
				addUserCode:'',
				addUserGender:'',
				addUserRole:'',
				addUserGroup:'',
				addUserContact:'',
				addUserBirth:'',
				addUserEducation:'',
				editUserName:'',
				editUserCode:'',
				editUserGender:'',
				editUserRole:'',
				editUserGroup:'',
				editUserContact:'',
				editUserBirth:'',
				editUserEducation:'',

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

				groupOptions:[
					{
						value:'group1',
						label:'group1',
					},
					{
						value:'group2',
						label:'group2',
					},
					{
						value:'group3',
						label:'group3',
					},
					{
						value:'group4',
						label:'group4',
					},
				],
				educationOptions:[
					{
						value:'高中',
						label:'高中',
					},
					{
						value:'学士',
						label:'学士',
					},
					{
						value:'硕士',
						label:'硕士',
					},
					{
						value:'博士',
						label:'博士',
					},
				],
				roleOptions:[
					{
						value:'工人',
						label:'工人',
					},
					{
						value:'会计',
						label:'会计',
					},
					{
						value:'经理',
						label:'经理',
					},
				],
				genderOptions:[
					{
						value:'男',
						label:'男',
					},
					{
						value:'女',
						label:'女',
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
				this.multipleUserSelection = val;
			},

			handleAddUserClick(){
				this.addUserShowFlag = true;
				this.viewname = 'second';
			},
			handleEditUserClick(){
				if(this.multipleUserSelection.length === 0){
					alert("请选择一个用户!");
					return;
				}
				if(this.multipleUserSelection.length > 1){
					alert("只能选择一个用户!");
					return;
				}

				this.editUserName = this.multipleUserSelection[0].userName;
				this.editUserCode = this.multipleUserSelection[0].userCode;
				this.editUserGender = this.multipleUserSelection[0].userGender;
				this.editUserRole = this.multipleUserSelection[0].userRole;
				this.editUserGroup = this.multipleUserSelection[0].userDepart;
				this.editUserEducation = this.multipleUserSelection[0].userEducation;

				this.editUserShowFlag = true;
				this.viewname = 'third';
			},
			handleAddUserSaveClick(){
				this.viewname = 'first';
				this.addUserShowFlag = false;
			},
			handleAddUserCancelClick(){
				this.viewname = 'first';
				this.addUserShowFlag = false;
			},
			handleEditUserSaveClick(){
				this.viewname = 'first';
				this.editUserShowFlag = false;
			},
			handleEditUserCancelClick(){
				this.viewname = 'first';
				this.editUserShowFlag = false;
			},
		}
  }
</script>
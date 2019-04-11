<template>
  <el-card>
		<el-tabs v-model="viewname" @tab-click="handleViewChange">
      <el-tab-pane label="角色信息管理" name="first" >
				<el-card>
					<el-row :gutter="20">
						<el-col :span="2">
							<div class="grid-content bg-purple">
								<el-button type="primary" @click="handleAddRoleClick()">新增角色</el-button>
							</div>
						</el-col>

						<el-col :span="2">
							<div class="grid-content bg-purple">
								<el-button type="success" @click="handleEditRoleClick()">编辑角色</el-button>
							</div>
						</el-col>

						<el-col :span="2">
							<div class="grid-content bg-purple">
								<el-button type="danger">删除角色</el-button>
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
											<span class="inputTag">角色名称：</span>
											<el-select v-model="searchRoleInput" placeholder="请输入">
											<el-option
												v-for="item in roleOptions"
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
									:data="roleSearchResultDataList"
									tooltip-effect="dark"
									style="width: 100%"
									@selection-change="handleSelectionChange">
									<el-table-column
										type="selection"
										width="55">
									</el-table-column>
									<el-table-column
										label="角色名称"
										width="120"
										prop="roleName">
									</el-table-column>
									<el-table-column
										prop="roleDescription"
										label="角色描述"
										width="120">
									</el-table-column>
									<el-table-column
										prop="roleOwnedGroup"
										label="所属部门"
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

			<el-tab-pane label="新增角色信息" name="second" v-if="addRoleShowFlag">
				<el-card>
					<el-row :gutter="20">
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">角色名称:</span>
								<el-input v-model="addRoleName" class="input" placeholder="请输入品牌名称"></el-input>
							</div>
						</el-col>
          </el-row>

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">所属部门:</span>
								<el-select v-model="addRoleOwnedGroup" placeholder="请选择">
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
								<span class="inputTag">角色描述：</span>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="addRoleDescription">
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
								<el-button type="success" class="save" @click="handleAddRoleSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleAddRoleCancelClick()">取消</el-button>
							</div>
						</el-col>
					</el-row>
				</el-card>
			</el-tab-pane>

			<el-tab-pane label="编辑角色信息" name="third" v-if="editRoleShowFlag">
				<el-card>
					<el-row :gutter="20">
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">角色名称:</span>
								<el-input v-model="editRoleName" class="input" placeholder="请输入品牌名称"></el-input>
							</div>
						</el-col>
          </el-row>

					<el-row>
						<el-col :span="5">
							<div class="inputCombineDiv">
								<span class="inputTag">所属部门:</span>
								<el-select v-model="editRoleOwnedGroup" placeholder="请选择">
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
								<span class="inputTag">角色描述：</span>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="editRoleDescription">
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
								<el-button type="success" class="save" @click="handleEditRoleSaveClick()">保存</el-button>
								<el-button type="danger" class="cancel" @click="handleEditRoleCancelClick()">取消</el-button>
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
				roleSearchResultDataList: [{
						roleName: '工人',
            roleDescription:'生产者',
            roleOwnedGroup:'总经理室',
					}, {
						roleName: '会计',
            roleDescription:'经济计算',
            roleOwnedGroup:'生产部',
				}],
				addRoleShowFlag:false,
				editRoleShowFlag:false,
				multipleRoleSelection: [],
				
				searchRoleInput:'',

        addRoleName:'',
        addRoleOwnedGroup:'',
        addRoleDescription:'',

        editRoleName:'',
        editRoleOwnedGroup:'',
        editRoleDescription:'',

				roleOptions:[
					{
						value:'role1',
						label:'role1',
					},
					{
						value:'role2',
						label:'role2',
					},
					{
						value:'role3',
						label:'role3',
					},
					{
						value:'role4',
						label:'role4',
					},
				],

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
				this.multipleRoleSelection = val;
			},

			handleAddRoleClick(){
				this.addRoleShowFlag = true;
				this.viewname = 'second';
			},
			handleEditRoleClick(){
				if(this.multipleRoleSelection.length === 0){
					alert("请选择一个角色!");
					return;
				}
				if(this.multipleRoleSelection.length > 1){
					alert("只能选择一个角色!");
					return;
				}

				this.editRoleName = this.multipleRoleSelection[0].roleName;
				this.editRoleDescription = this.multipleRoleSelection[0].roleDescription;
				this.editRoleOwnedGroup = this.multipleRoleSelection[0].roleOwnedGroup;

				this.editRoleShowFlag = true;
				this.viewname = 'third';
			},
			handleAddRoleSaveClick(){
				this.viewname = 'first';
				this.addRoleShowFlag = false;
			},
			handleAddRoleCancelClick(){
				this.viewname = 'first';
				this.addRoleShowFlag = false;
			},
			handleEditRoleSaveClick(){
				this.viewname = 'first';
				this.editRoleShowFlag = false;
			},
			handleEditRoleCancelClick(){
				this.viewname = 'first';
				this.editRoleShowFlag = false;
			},
		}
  }
</script>
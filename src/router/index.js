import Config from '../config/index';

// -------------------------------------------- 为模版原版代码 --------------------------------------------
const Login = r => require.ensure([], () => r(require('../page/user/login')), 'login');
const Layout = r => require.ensure([], () => r(require('../page/layout')), 'layout');

// 快速入门
const Quick = r => require.ensure([], () => r(require('../page/quick/quick')), 'quick');

// -------------------------------------------- 为用户新增代码 --------------------------------------------
const seriesIndex = r => require.ensure([], () => r(require('../page/series/index.vue')), 'seriesIndex');
const addSeries = r => require.ensure([], () => r(require('../page/series/addSeries.vue')), 'addSeries');
const importSeries = r => require.ensure([], () => r(require('../page/series/importSeries.vue')), 'importSeries');
const styleGroupIndex = r => require.ensure([], () => r(require('../page/styleGroup/index.vue')), 'styleGroupIndex');
const addStyleGroup = r => require.ensure([], () => r(require('../page/styleGroup/addStyleGroup.vue')), 'addStyleGroup');
const styleIndex = r => require.ensure([], () => r(require('../page/style/index.vue')), 'styleIndex');
const addStyle = r => require.ensure([], () => r(require('../page/style/addStyle.vue')), 'addStyle');
const bindStyleGroup = r => require.ensure([], () => r(require('../page/style/bindStyleGroup.vue')), 'bindStyleGroup');
const importStyle = r => require.ensure([], () => r(require('../page/style/importStyle.vue')), 'importStyle');
const customerPredictPlan = r => require.ensure([], () => r(require('../page/customerPredictPlan.vue')), 'customerPredictPlan');
const planManagement = r => require.ensure([], () => r(require('../page/planManagement.vue')), 'planManagement');
const planCompletionManage = r => require.ensure([], () => r(require('../page/planCompletionManage.vue')), 'planCompletionManage');
const planMakeIndex = r => require.ensure([], () => r(require('../page/planMake/index.vue')), 'planMakeIndex');
const seriesPlanMake = r => require.ensure([], () => r(require('../page/planMake/seriesPlanMake.vue')), 'seriesPlanMake');
const styleGroupPlanMake  = r => require.ensure([], () => r(require('../page/planMake/styleGroupPlanMake .vue')), 'styleGroupPlanMake ');
const stylePlanMake = r => require.ensure([], () => r(require('../page/planMake/stylePlanMake.vue')), 'stylePlanMake');
const planVerify = r => require.ensure([], () => r(require('../page/planVerify.vue')), 'planVerify');
const planDistribute = r => require.ensure([], () => r(require('../page/planDistribute.vue')), 'planDistribute');
const planRecover = r => require.ensure([], () => r(require('../page/planRecover.vue')), 'planRecover');
const messageManagement = r => require.ensure([], () => r(require('../page/messageManagement.vue')), 'messageManagement');
const exceptionManagement = r => require.ensure([], () => r(require('../page/exceptionManagement.vue')), 'exceptionManagement');
const queryStatistic = r => require.ensure([], () => r(require('../page/queryStatistic.vue')), 'queryStatistic');
const formManagement = r => require.ensure([], () => r(require('../page/formManagement.vue')), 'formManagement');
const bePlanModelEdit = r => require.ensure([], () => r(require('../page/backEndModule/planModelEdit.vue')), 'bePlanModelEdit');
const bePlanModelManagement = r => require.ensure([], () => r(require('../page/backEndModule/planModelManagement.vue')), 'bePlanModelManagement');
const bePrivilegeManagement = r => require.ensure([], () => r(require('../page/backEndModule/privilegeManagement.vue')), 'privilegeManagement');
const beUserManagement = r => require.ensure([], () => r(require('../page/backEndModule/userData/userManagement.vue')), 'beUserManagement');
const beGroupManagement = r => require.ensure([], () => r(require('../page/backEndModule/userData/groupManagement.vue')), 'beGroupManagement');
const beRoleManagement = r => require.ensure([], () => r(require('../page/backEndModule/userData/roleManagement.vue')), 'beRoleManagement');
const brandMana = r => require.ensure([], () => r(require('../page/backEndModule/dictionary/brandMana.vue')), 'brandMana');
const customerMana = r => require.ensure([], () => r(require('../page/backEndModule/dictionary/customerMana.vue')), 'customerMana');
const productMana = r => require.ensure([], () => r(require('../page/backEndModule/dictionary/productMana.vue')), 'productMana');
const dictionaryCateMana = r => require.ensure([], () => r(require('../page/backEndModule/dictionary/dictionaryCateMana.vue')), 'dictionaryCateMana');

// -------------------------------------------- 路由配置部分 --------------------------------------------
export default [{
    path: Config.route.login,
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      { // 快速入门
        path: '/quick',
        name: 'Quick',
        component: Quick,
        meta: {
          bcrumd: ['快速入门']
        }
      },
      { 
        path: '/backEndModule/dictionary/brandMana',
        name: 'brandMana',
        component: brandMana,
        meta: {
          bcrumd: ['后台管理模块', '数据字典', '品牌信息管理'],
        }
      },
      { 
        path: '/backEndModule/dictionary/customerMana',
        name: 'customerMana',
        component: customerMana,
        meta: {
          bcrumd: ['后台管理模块', '数据字典', '客户信息管理'],
        }
      },
      {
        path: '/backEndModule/dictionary/productMana',
        name: 'productMana',
        component: productMana,
        meta: {
          bcrumd: ['后台管理模块', '数据字典', '产品信息管理'],
        }
      },
      { 
        path: '/backEndModule/dictionary/dictionaryCateMana',
        name: 'dictionaryCateMana',
        component: dictionaryCateMana,
        meta: {
          bcrumd: ['后台管理模块', '数据字典', '数据字典管理'],
        }
      },
      { 
        path: '/series/index',
        name: 'seriesIndex',
        component: seriesIndex,
        meta: {
          bcrumd: ['系列管理'],
        }
      },
      { 
        path: '/series/addSeries',
        name: 'addSeries',
        component: addSeries,
        meta: {
          bcrumd: ['系列管理', '添加系列'],
        }
      },
      { 
        path: '/series/importSeries',
        name: 'importSeries',
        component: importSeries,
        meta: {
          bcrumd: ['系列管理', '导入系列'],
        }
      },
      { 
        path: '/styleGroup/index',
        name: 'styleGroupIndex',
        component: styleGroupIndex,
        meta: {
          bcrumd: ['款式组管理'],
        }
      },
      { 
        path: '/styleGroup/addStyleGroup',
        name: 'addStyleGroup',
        component: addStyleGroup,
        meta: {
          bcrumd: ['款式组管理', '添加款式组'],
        }
      },
      { 
        path: '/style/index',
        name: 'styleIndex',
        component: styleIndex,
        meta: {
          bcrumd: ['款式管理'],
        }
      },
      { 
        path: '/style/addStyle',
        name: 'addStyle',
        component: addStyle,
        meta: {
          bcrumd: ['款式管理', '添加款式信息'],
        }
      },
      { 
        path: '/style/bindStyleGroup',
        name: 'bindStyleGroup',
        component: bindStyleGroup,
        meta: {
          bcrumd: ['款式管理', '导入款式'],
        }
      },
      { 
        path: '/style/importStyle',
        name: 'importStyle',
        component: importStyle,
        meta: {
          bcrumd: ['款式管理', '绑定款式'],
        }
      },
      { 
        path: '/customerPredictPlan',
        name: 'customerPredictPlan',
        component: customerPredictPlan,
        meta: {
          bcrumd: ['客户预测计划'],
        }
      },
      { 
        path: '/planManagement',
        name: 'planManagement',
        component: planManagement,
        meta: {
          bcrumd: ['计划管理'],
        }
      },
      { 
        path: '/planCompletionManage',
        name: 'planCompletionManage',
        component: planCompletionManage,
        meta: {
          bcrumd: ['计划完成管理'],
        }
      },
      { 
        path: '/planMake/planMakeIndex',
        name: 'planMakeIndex',
        component: planMakeIndex,
        meta: {
          bcrumd: ['计划制定'],
        }
      },
      { 
        path: '/planMake/seriesPlanMake',
        name: 'seriesPlanMake',
        component: seriesPlanMake,
        meta: {
          bcrumd: ['计划制定', '系列计划制定'],
        }
      },
      { 
        path: '/planMake/styleGroupPlanMake',
        name: 'styleGroupPlanMake',
        component: styleGroupPlanMake,
        meta: {
          bcrumd: ['计划制定', '款式组计划制定'],
        }
      },
      { 
        path: '/planMake/stylePlanMake',
        name: 'stylePlanMake',
        component: stylePlanMake,
        meta: {
          bcrumd: ['计划制定', '款式计划制定'],
        }
      },
      { 
        path: '/planVerify',
        name: 'planVerify',
        component: planVerify,
        meta: {
          bcrumd: ['款式计划审核'],
        }
      },
      { 
        path: '/planDistribute',
        name: 'planDistribute',
        component: planDistribute,
        meta: {
          bcrumd: ['计划下发管理'],
        }
      },
      { 
        path: '/planRecover',
        name: 'planRecover',
        component: planRecover,
        meta: {
          bcrumd: ['计划回收站'],
        }
      },
      { 
        path: '/messageManagement',
        name: 'messageManagement',
        component: messageManagement,
        meta: {
          bcrumd: ['消息管理'],
        }
      },
      { 
        path: '/exceptionManagement',
        name: 'exceptionManagement',
        component: exceptionManagement,
        meta: {
          bcrumd: ['异常管理'],
        }
      },
      { 
        path: '/queryStatistic',
        name: 'queryStatistic',
        component: queryStatistic,
        meta: {
          bcrumd: ['查询统计'],
        }
      },
      { 
        path: '/formManagement',
        name: 'formManagement',
        component: formManagement,
        meta: {
          bcrumd: ['报表管理'],
        }
      },
      { 
        path: '/backEndModule/planModelEdit',
        name: 'bePlanModelEdit',
        component: bePlanModelEdit,
        meta: {
          bcrumd: ['计划模板编辑'],
        }
      },
      { 
        path: '/backEndModule/planModelManagement',
        name: 'bePlanModelManagement',
        component: bePlanModelManagement,
        meta: {
          bcrumd: ['计划模板管理'],
        }
      },
      { 
        path: '/backEndModule/privilegeManagement',
        name: 'bePrivilegeManagement',
        component: bePrivilegeManagement,
        meta: {
          bcrumd: ['后台管理模块','用户数据管理', '权限管理'],
        }
      },
      { 
        path: '/backEndModule/userManagement',
        name: 'beUserManagement',
        component: beUserManagement,
        meta: {
          bcrumd: ['后台管理模块','用户数据管理', '用户管理'],
        }
      },
      { 
        path: '/backEndModule/groupManagement',
        name: 'beGroupManagement',
        component: beGroupManagement,
        meta: {
          bcrumd: ['后台管理模块','用户数据管理', '部门管理'],
        }
      },
      { 
        path: '/backEndModule/roleManagement',
        name: 'beRoleManagement',
        component: beRoleManagement,
        meta: {
          bcrumd: ['后台管理模块','权限管理'],
        }
      },
      { // 默认路由
        path: '*',
        redirect: '/quick',
        name: 'Quick',
        component: Quick,
        meta: {
          bcrumd: ['快速入门']
        }
      },

      
    ]
  },
  {
    path: '*',
    redirect: Config.route.login,
    name: 'Login',
    component: Login
  }
]

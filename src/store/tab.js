export default {
  state: {
    isCollapse: false, //控制菜单展开收起
  },
  mutations: {
    //修改菜单展开方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
};

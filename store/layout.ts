import { VuexModule, Module, Mutation } from "vuex-module-decorators";

// export const state = () => ({
//   drawer: true,
//   drawerMini: true,
//   collapseBar: false,
//   appBarTitle: '< Dev - Pill2s />'
// })

@Module({ namespaced: true, name: "layout" })
export default class LayoutStoreModule extends VuexModule {
  drawer = true;
  drawerMini = true;
  collapseBar = false;
  appBarTitle = '< Dev - Pi1lls />'

  @Mutation
  toggleDrawer() {
    this.drawer = !this.drawer;
  }
  @Mutation
  toggleDrawerMini() {
    this.drawerMini = !this.drawerMini;
  }

  @Mutation
  setDrawer(val: boolean) {
    this.drawer = val;
  }
  @Mutation
  setCollapseBar(val: boolean) {
    this.collapseBar = val;
  }
}

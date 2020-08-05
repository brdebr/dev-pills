import { VuexModule, Module, Mutation } from "vuex-module-decorators";

@Module({ namespaced: true, name: "layout", stateFactory: true })
export default class LayoutStoreModule extends VuexModule {
  drawer = true;
  drawerMini = true;
  collapseBar = false;
  appBarTitle = '< Dev - Pills />'

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

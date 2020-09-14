import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

export interface DrawerItemI {
  title: {
    en: string
    es: string
  }
  to: string
  icon: string
}

@Module({ namespaced: true, name: 'layout', stateFactory: true })
export default class LayoutStoreModule extends VuexModule {
  drawer = false
  drawerMini = true
  footer = false
  collapseBar = false
  loading = false
  appBarTitle = '< Dev - Pills />'

  isMobile = true

  items: Array<DrawerItemI> = []

  @Mutation
  toggleDrawer() {
    this.drawer = !this.drawer
  }

  @Mutation
  toggleDrawerMini() {
    this.drawerMini = !this.drawerMini
  }

  @Mutation
  toggleFooter() {
    this.footer = !this.footer
  }

  @Mutation
  setItems(val: Array<DrawerItemI>) {
    this.items = [...val]
  }

  @Mutation
  setIsMobile(val: boolean) {
    this.isMobile = val
  }

  @Mutation
  setFooter(val: boolean) {
    this.footer = val
  }

  @Mutation
  setLoading(val: boolean) {
    this.loading = val
  }

  @Mutation
  setDrawer(val: boolean) {
    this.drawer = val
  }

  @Mutation
  setCollapseBar(val: boolean) {
    this.collapseBar = val
  }
}

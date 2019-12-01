import LoginPage from './pages/login.vue';
import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';
import PanelLeftPage from './pages/panel-left.vue';
import TrangThemCay from './pages/add-tree.vue';
import TrangSuaCay from './pages/update-cx.vue';
import PageImage from './pages/page-image.vue'
import LichThiCong from './pages/lich-thi-cong.vue';
import DSLichThiCong from './pages/ds-lich-thi-cong.vue';
export default [
  {
    path: '/',
    redirect: '/homepage/'
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/homepage/',
    component: HomePage,
  },
  {
    path: '/lich-thi-cong/',
    component: DSLichThiCong
  },
  {
    path: '/lich-thi-cong/:id/',
    component: LichThiCong
  },
  {
    path: '/images/:objectid/',
    component: PageImage
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/them-cay-xanh/',
    component: TrangThemCay,
  },
  {
    path: '/sua-cay-xanh/:objectid/',
    component: TrangSuaCay,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

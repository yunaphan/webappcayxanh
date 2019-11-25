import LoginPage from './pages/login.vue';
import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';
import PanelLeftPage from './pages/panel-left.vue';
import TrangThemCay from './pages/add-tree.vue';
import PageImage from './pages/page-image.vue'
export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/images/',
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

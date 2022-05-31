import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  // proxy: {
  //   'localhost:8000': {
  //     target: 'https://api.bspapp.com',//添加需要跨域的地址
  //     // pathRewrite: { '^/localhost:8000': '' },  //会删除掉api1
  //     changeOrigin: true
  //   }
  // }
});

import { FC } from 'react';
import ProLayout from '@ant-design/pro-layout';
import { Link } from 'umi';
// 侧边栏的默认关闭需要设置 breakpoint={false} ，如果只设置 defaultCollapsed 会无效
const BasicLayout: FC = ({ children }) => {
  const menu = [
    {
      path: '/detail',
      name: '管理页',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          key: '1',
          path: '/detail/productDetail',
          name: '商品管理',
        },
        {
          key: '2',
          path: '/detail/productDetail',
          name: '案例管理',
        },
      ],
    },
  ];

  return (
    <ProLayout
      logo={false}
      title="后台管理系统"
      layout="mix"
      fixSiderbar
      breakpoint={false}
      menuItemRender={(item) => {
        return <Link to={item.path ?? '/'}>{item?.name}</Link>;
      }}
      postMenuData={() => menu}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;

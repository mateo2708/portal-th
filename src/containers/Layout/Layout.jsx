// Dependencies
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//Components
import AppRoutes from '@components/AppRoutes';
import { Layout, Menu } from 'antd';

// Styles
import classes from './style.module.scss';
import logoImage from '@assets/logoTH.png';

import { useRouter } from '@hooks/useRouter';
import { fromAPI } from '@adapters/firebase';
const { getUser } = fromAPI();

const { Content, Footer, Sider } = Layout;

/**
 * @author MateoTG.
 * @component Layout.
 * @description Layout del dashboard.
 */
function MainLayout(props, { className }) {
  const [collapsed, setCollapsed] = useState();
  const { push } = useRouter();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleMenu = (e) => {
    push(e.key);
  };
  const fetchData = useCallback(() => {
    getUser('IjARf53qYlb7nM14zPRqs6iSorH3').then((res) => {
      console.log(res);
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Layout className={classNames(classes.root, className)} style={{ minHeight: '100vh' }}>
      <Sider collapsible={false} collapsed={collapsed} onCollapse={onCollapse}>
        <div className={classes.logo}>
          <img src={logoImage} alt="Logo TH Abogados" />
        </div>
        <Menu defaultSelectedKeys={['procesos']} mode="inline" onSelect={handleMenu}>
          <Menu.Item key="procesos">Procesos</Menu.Item>
          <Menu.Item key="consultas">Consultas</Menu.Item>
          <Menu.Item key="mi-empresa">Mi Empresa</Menu.Item>
          <Menu.Item key="mi-perfil">Mi perfil</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className={classes.content}>
          <AppRoutes routes={props.routes} />
        </Content>
        <Footer>TH Abogados © Portal Clientes TH-Abogados</Footer>
      </Layout>
    </Layout>
  );
}

Layout.defaultProps = {
  className: '',
};

Layout.propTypes = {
  className: PropTypes.string,
};

export default MainLayout;

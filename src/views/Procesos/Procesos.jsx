// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Routes
//import AppRoutes from '@components/AppRoutes';

// Styles
import classes from './style.module.scss';

//Components
import { Layout, Card, Table, Row, Col } from 'antd';
const { Content } = Layout;

const dataSource = [
  {
    key: '1',
    radicado: 'TH5555',
    usuario: 'Mateo T',
    tipo: 'Reclamación',
    fecha: '27/08/2020',
    estado: 'activo',
    actualizacion: '27/08/2020',
  },
  {
    key: '2',
    radicado: 'TH4444',
    usuario: 'Mateo TG',
    tipo: 'Reclamación 2',
    fecha: '27/08/2020',
    estado: 'inactivo',
    actualizacion: '27/08/2020',
  },
];

/**
 * @author MateoTG
 * @component Procesos
 * @description View for displaying Procesos
 */
function Procesos({ className }) {
  return (
    <Layout className={classNames(classes.root, className)}>
      <Content className={classes.content}>
        <h1 className={classes.header}>Procesos TH</h1>
        <Row className={classes.insights} gutter={16} justify="flex-start">
          <Col xs={22} sm={18} md={8} lg={8} xl={4}>
            <Card className={classNames(classes.card, classes.activos)}>
              <div className={classes.cardBody}>20</div>
              <div className={classes.cardTitle}>
                <span className={classes.subtitle}>Procesos</span>
                <span className={classes.title}>Activos</span>
              </div>
            </Card>
          </Col>
          <Col xs={22} sm={18} md={8} lg={8} xl={4}>
            <Card className={classNames(classes.card, classes.suspendidos)}>
              <div className={classes.cardBody}>20</div>
              <div className={classes.cardTitle}>
                <span className={classes.subtitle}>Procesos</span>
                <span className={classes.title}>Suspendidos</span>
              </div>
            </Card>
          </Col>
          <Col xs={22} sm={18} md={8} lg={8} xl={4}>
            <Card className={classNames(classes.card, classes.inactivos)}>
              <div className={classes.cardBody}>20</div>
              <div className={classes.cardTitle}>
                <span className={classes.subtitle}>Procesos</span>
                <span className={classes.title}>Inactivos</span>
              </div>
            </Card>
          </Col>
        </Row>
        <Table className={classes.table} dataSource={dataSource}>
          <Table.Column title="Radicado" dataIndex="radicado" key="id" />
          <Table.Column title="Estado" dataIndex="estado" key="estado" />
          <Table.Column title="Creado por" dataIndex="usuario" key="usuario" />
          <Table.Column title="Tipo de proceso" dataIndex="tipo" key="tipo" />
          <Table.Column title="Fecha de creación" dataIndex="fecha" key="fecha" />
          <Table.Column
            title="Última actualización"
            dataIndex="actualizacion"
            key="actualizacion"
          />
        </Table>
      </Content>
    </Layout>
  );
}

Procesos.defaultProps = {
  className: '',
};

Procesos.propTypes = {
  className: PropTypes.string,
};

export default Procesos;

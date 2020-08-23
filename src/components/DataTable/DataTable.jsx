// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import classes from './style.module.css';

//Components
import { Layout, Card, Table, Row, Col } from 'antd';


/**
 * @author MateoTG
 * @component DataTable
 * @description Component to display ordered data into a table.
 */
function DataTable({ className }) {
  return (
    <div className={classNames(classes.root, className)}>
      <Table className={classes.table} dataSource={dataSource}>
        <Table.Column title="Radicado" dataIndex="radicado" key="id" />
        <Table.Column title="Estado" dataIndex="estado" key="estado" />
        <Table.Column title="Creado por" dataIndex="usuario" key="usuario" />
        <Table.Column title="Tipo de proceso" dataIndex="tipo" key="tipo" />
        <Table.Column title="Fecha de creación" dataIndex="fecha" key="fecha" />
        <Table.Column title="Última actualización" dataIndex="actualizacion" key="actualizacion" />
      </Table>
    </div>
  );
}

DataTable.defaultProps = {
  className: '',
};

DataTable.propTypes = {
  className: PropTypes.string,
};

export default DataTable;

// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import classes from './style.module.scss';

//AntD Componentes
import { Row, Col } from 'antd'; //Layout imports
import { Form, Input, Checkbox, Button, Card } from 'antd'; // Components imports
import { UserOutlined, LockOutlined } from '@ant-design/icons';

/**
 * @author MateoTG
 * @component Login
 * @description Login view component for portal-th
 */
function Login({ className }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <div className={classNames(classes.root, className)}>
      <Row className={classes.row} justify="center">
        <Col xs={22} sm={18} md={14} lg={10} xl={8}>
          <Card className={classes.formBox}>
            <div clasName={classes.logo}>
              <img srs="@assets/logoTH.png" alt="TH Logo" />
            </div>
            <Form
              name="normal_login"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Debes escribir tu e-mail!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} type="email" placeholder="E-mail" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Debes escribir tu contraseña!',
                  },
                ]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="Contraseña" />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Recordarme</Checkbox>
                </Form.Item>

                <a className={classes.forgotLink} href="https://www.thabogados.co">
                  Olvide mi contraseña
                </a>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className={classes.submitButton}>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

Login.defaultProps = {
  className: '',
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;

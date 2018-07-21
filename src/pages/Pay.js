import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Switch, Icon, Button } from 'antd'
import * as moment from 'moment'
import styled from 'styled-components'
import { StoreConsumer } from '../components/Store'
import { Link } from 'react-static'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const Component = ({ form }) => (
  <StoreConsumer>
    {({ authUser }) => {
      const shouldSetCustomerName =
        authUser.displayName && form.getFieldsValue(['customer']).customer !== authUser.displayName

      if (shouldSetCustomerName) {
        setTimeout(() =>
          form.setFieldsValue({
            customer: authUser.displayName,
            uid: authUser.uid
          })
        )
      }

      return (
        <Container>
          <h1 className="mb3">Pay</h1>
          <Form
            onSubmit={e => {
              e.preventDefault()
              form.validateFields((err, values) => {
                if (!err) {
                  console.log('Received values of form: ', values)
                }
              })
            }}
          >
            <Form.Item label="Item" {...formItemLayout}>
              {form.getFieldDecorator('item', {
                rules: [{ required: true, message: 'Please input your item!' }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Customer Name" {...formItemLayout}>
              {form.getFieldDecorator('customer', {
                initialValue: authUser.displayName,
                rules: [{ required: true, message: 'Please input your name!' }]
              })(<Input disabled={!!authUser.displayName} />)}
            </Form.Item>
            <Form.Item label="Amount" {...formItemLayout}>
              {form.getFieldDecorator('amount', {
                rules: [{ required: true, message: 'Please input your amount!' }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Subscribe" {...formItemLayout}>
              {form.getFieldDecorator('subscribe', {
                initialValue: false
              })(
                <Switch
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="cross" />}
                />
              )}
              {form.getFieldsValue(['subscribe']).subscribe && (
                <span className="pl2">
                  bill on the {moment.default().format('Do')} of each month
                </span>
              )}
            </Form.Item>
            {form.getFieldDecorator('uid', { initialValue: '' })(<input type="hidden" />)}
            <Form.Item className="tc">
              <Button type="primary" htmlType="submit" size="large">
                Submit
              </Button>
              <Link to="/">
                <Button size="large" className="ml3">
                  Cancel
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Container>
      )
    }}
  </StoreConsumer>
)

Component.propTypes = {
  form: PropTypes.object
}

const Pay = Form.create()(Component)

export default Pay

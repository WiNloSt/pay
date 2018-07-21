import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Switch, Icon } from 'antd'
import * as moment from 'moment'
import styled from 'styled-components'
import { StoreConsumer } from '../components/Store'

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
            customer: authUser.displayName
          })
        )
      }

      return (
        <Container>
          <h1 className="mb3">Pay</h1>
          <Form>
            <Form.Item label="Item" {...formItemLayout}>
              <Input />
            </Form.Item>
            <Form.Item label="Customer Name" {...formItemLayout}>
              {form.getFieldDecorator('customer', { initialValue: authUser.displayName })(
                <Input disabled={!!authUser.displayName} />
              )}
            </Form.Item>
            <Form.Item label="Amount" {...formItemLayout}>
              <Input />
            </Form.Item>
            <Form.Item label="Subscribe" {...formItemLayout}>
              {form.getFieldDecorator('subscribe', { initialValue: false })(
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

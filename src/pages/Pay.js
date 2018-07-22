import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Switch, Icon, Button, InputNumber, Row, Col } from 'antd'
import * as moment from 'moment'
import { Link } from 'react-static'
import * as R from 'ramda'
import { adopt } from 'react-adopt'

import { StoreConsumer } from '../components/Store'
import { Card } from '../components/Card'
import { State } from 'react-powerplug'
import { PageSelector } from '../components/PageSelector'

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

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

const Composed = adopt({
  context: <StoreConsumer />,
  state: <State initial={{ page: 0 }} />
})

const Component = ({ form }) => (
  <Composed>
    {({ context, state }) => {
      return (
        <div>
          <Card>
            <PageSelector page={state.state.page}>
              <Page1 context={context} form={form} state={state} />
              <Page2 state={state} form={form} />
            </PageSelector>
          </Card>
        </div>
      )
    }}
  </Composed>
)

Component.propTypes = {
  form: PropTypes.object
}

const Pay = Form.create()(Component)

export default Pay

const Page1 = ({ context, form, state, className }) => {
  const { authUser } = context
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

  const hasValue = value => !R.isNil(value) && !R.isEmpty(value)
  const allFormFieldsFilled =
    R.compose(
      R.all(hasValue),
      values => Object.keys(values).map(key => values[key]),
      R.drop(['uid'])
    )(form.getFieldsValue()) && R.complement(R.isEmpty)(form.getFieldsValue())

  const formHasAnyError = R.compose(
    R.any(hasValue),
    values => Object.keys(values).map(key => values[key])
  )(form.getFieldsError())

  return (
    <div className={className + ' mb3'}>
      <h1>Pay</h1>
      <Form
        onSubmit={e => {
          e.preventDefault()
          form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values)
              state.setState({
                page: 1
              })
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
            rules: [
              { type: 'number', message: 'Please input only numbers!' },
              { required: true, message: 'Please input your amount!' }
            ]
          })(
            <InputNumber
              formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
          )}
          <span className="ml2">฿</span>
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
              bill on the <strong>{moment.default().format('Do')}</strong> of each month
            </span>
          )}
        </Form.Item>
        {form.getFieldDecorator('uid', { initialValue: '' })(<input type="hidden" />)}
        <Form.Item className="mb0" {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            disabled={!allFormFieldsFilled || formHasAnyError}
          >
            Continue
          </Button>
          <Link to="/">
            <Button size="large" className="ml3">
              Cancel
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
}

Page1.propTypes = {
  context: PropTypes.object,
  form: PropTypes.object,
  state: PropTypes.object,
  className: PropTypes.string
}

const fields = [
  { label: 'Item', key: 'item' },
  { label: 'Customer Name', key: 'customer' },
  { label: 'Amount', key: 'amount', formatter: value => `${value} ฿` }
]

const Page2 = ({ state, form, className, showing }) => {
  const formValues = form.getFieldsValue()
  return (
    showing && (
      <div className={className + ' mb3'}>
        <h1>Checkout</h1>
        {fields.map(field => {
          const formatter = field.formatter || (value => value)
          return (
            <Row gutter={16} className="mb3" key={field.key}>
              <Col span={8} className="tr b">
                {field.label}:
              </Col>
              <Col span={16}>{formatter(formValues[field.key])}</Col>
            </Row>
          )
        })}
        {formValues.subscribe && (
          <Row gutter={16} className="mb3">
            <Col span={8} className="tr b">
              Subcribe:
            </Col>
            <Col span={16}>
              bill on the <strong>{moment.default().format('Do')}</strong> of each month
            </Col>
          </Row>
        )}
        <Row className="mt4">
          <Col offset={8} span={16}>
            <Button size="large" type="primary">
              Pay
            </Button>
            <Button size="large" onClick={() => state.setState({ page: 0 })} className="ml3">
              Go back
            </Button>
          </Col>
        </Row>
      </div>
    )
  )
}

Page2.propTypes = {
  state: PropTypes.object,
  form: PropTypes.object,
  className: PropTypes.string,
  showing: PropTypes.bool
}

import { Button, Form, Input, Select, Col, Row } from 'antd';

const { Option } = Select;

function Field() {

  return (
    <Row gutter={[8, 0]}>
      <Col flex="1">
        <Form.Item name="fieldName" rules={[{ required: true }]}>
          <Input placeholder='Field name' />
        </Form.Item>
      </Col>
      <Col flex="1">
        <Form.Item name="fieldType" rules={[{ required: true }]}>
          <Select
            placeholder="Field Type"
            // onChange={}
            allowClear
          >
            <Option value="nested">nested</Option>
            <Option value="string">string</Option>
            <Option value="number">number</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col>
        <Form.Item>
          <Button type="dashed">remove</Button>
        </Form.Item>
      </Col>
    </Row>
  )
}

export default Field
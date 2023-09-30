import React from 'react';
import { Button, Form, Input, Select, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// import { FieldData } from '../types';

const { Option } = Select;

const RecursiveComponent: React.FC = () => {
  let [count, setCount] = React.useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div style={{ width: 500, borderLeft: "5px solid gray", paddingLeft: "0.5rem", marginBottom: "1rem" }}>
      {Array.from({ length: count }, (_, idx) => <Field key={idx} remove={() => { }} />)}
      <Button type="primary" htmlType="submit" icon={<PlusOutlined />}
        onClick={handleClick} block>
        Add Item
      </Button>
    </div>
  )
}

const Field: React.FC<{ remove: () => void }> = ({ remove }) => {

  let [name, setName] = React.useState<string>("");
  let [type, setType] = React.useState<string>();
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleChange = (value: string) => {
    setVisible(value === 'nested');
    setType(value);
  }

  return (
    <>
    <Row gutter={[8, 0]}>
      <Col flex="1">
        <Form.Item>
          <Input placeholder="Field name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
      </Col>
      <Col flex="1">
        <Form.Item>
          <Select placeholder="Field Type" value={type} onChange={handleChange} allowClear>
            <Option value="nested">nested</Option>
            <Option value="string">string</Option>
            <Option value="number">number</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col>
        <Form.Item>
          <Button type="dashed" onClick={() => remove()}>remove</Button>
        </Form.Item>
      </Col>
    </Row>
    <div style={{ paddingLeft: '2rem' }}>
      {visible && <RecursiveComponent />}
    </div>
    </>
  )
}

export default RecursiveComponent;
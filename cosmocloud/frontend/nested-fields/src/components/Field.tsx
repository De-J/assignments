import { Button, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons'

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="fieldName" rules={[{ required: true }]}>
        <Input placeholder='Field name'/>
      </Form.Item>
      <Form.Item name="fieldType" rules={[{ required: true }]}>
        <Select
          placeholder="Field Type"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="nested">nested</Option>
          <Option value="string">string</Option>
          <Option value="number">number</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<PlusOutlined/>}>
          Add Item
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
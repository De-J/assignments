import { Button, Form, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons'

const SchemaBuilder: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 500 }}
    >
      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<PlusOutlined />} block>
          Add Item
        </Button>
      </Form.Item>

      {/* JSON Schema */}
      <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};

export default SchemaBuilder;
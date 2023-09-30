import React from 'react';
import { Form, Typography } from 'antd';

import RecursiveComponent from './Field';
import { FieldData } from '../types';

const SchemaBuilder: React.FC = () => {
  const [fields, setFields] = React.useState<FieldData[]>([]);

  return (
    <>
      <RecursiveComponent />

      {/* JSON Schema */}
      <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre style={{ width: 500 }}>{JSON.stringify(JSON.stringify(fields), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </>
  );
};

export default SchemaBuilder;
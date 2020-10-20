import React, {useState, useEffect} from 'react';

import { Layout, Typography, Input, Divider, Form, Button} from 'antd'

import './App.css'

function App() {
  const {Header, Content, Footer} = Layout
  const {Title, Text} = Typography
  const {TextArea} = Input
  const [result, setResult] = useState("")
  const [form] = Form.useForm();

  useEffect(() => {
    fetch('/api/alternative')
    .then(response => response.json())
    .then(json => setResult(json.test))
  },[])

  const onFinish = (input: object) => {
    // TODO: Send request to backend here 
    console.log(input)
  }
  return (
    <Layout>
      <Header className="site-layout-sub-header-background" 
              style={{ 
                padding: 0,
                textAlign: 'center' 
              }}
      >
        <Title  level={3}
        >
          GenderGapp - Get Alternatives for gendered nouns!
        </Title>
      </Header>
      <Content  style={{margin: '24px 16px 0'}}>
        <div  className="site-layout-background"
              style={{
                padding: 24, 
                textAlign: 'center',
                minHeight: 'calc(100vh - 134px - 24px)'
              }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item label="Ausgangstext" name="text">
              <TextArea rows={6} autoSize={false}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Absenden</Button>
            </Form.Item>
          </Form>
          <Divider orientation="left">
            Recommendation
          </Divider>
          <Text copyable>
            {result}
          </Text>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>GenderGapp ©2020 Created by Simon Krause</Footer>
    </Layout>
  );
}

export default App;

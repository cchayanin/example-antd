import React from "react";
import "./App.css";
import { Row, Col, Form, Input, Button } from "antd";

function App() {
  const layout = {
    labelCol: {
      xs: 2,
      sm: 4,
      md: 6,
    },
    wrapperCol: {
      xs: 24,
      sm: 20,
      md: 16,
    },
  };

  let onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="App">
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={18} xl={16} xxl={14}>
          <Form onFinish={onFinish} {...layout}>
            <Form.Item
              label="ชื่อ"
              name="name"
              rules={[
                {
                  required: true,
                  message: "คุณต้องกรอกช่องนี้",
                },
                {
                  max: 6,
                  min: 3,
                  message: "ชื่อต้องอยู่ระหว่าง 3 ถึง 6 ตัวอักษร",
                },
              ]}
            >
              <Input placeholder="ชื่อ" />
            </Form.Item>
            <Form.Item
              label="เบอร์โทรศัพท์"
              name="phoneNumber"
              rules={[{ len: 10, message: "เบอร์โทรศัพท์ของคุณไม่ถูกต้อง" }]}
            >
              <Input placeholder="เบอร์โทรศัพท์" />
            </Form.Item>
            <Form.Item
              label="อีเมล์"
              name="email"
              rules={[
                {
                  required: true,
                  message: "คุณต้องกรอกช่องนี้",
                },
                {
                  type: "email",
                  message: "รูปแบบอีเมล์ของคุณไม่ถูกต้อง",
                },
              ]}
            >
              <Input placeholder="อีเมล์" />
            </Form.Item>
            <Form.Item
              label="รหัสผ่าน"
              name="password"
              rules={[
                {
                  required: true,
                  message: "คุณต้องใส่รหัสผ่าน",
                },
                {
                  min: 12,
                  max: 24,
                  message: "รหัสผ่านของคุณต้องอยู่ระหว่าง 12 ถึง 24 ตัวอักษร",
                },
              ]}
            >
              <Input type="password" placeholder="รหัสผ่าน" />
            </Form.Item>
            <Button htmlType="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;

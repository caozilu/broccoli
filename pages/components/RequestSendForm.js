import React, { useState } from "react";
import { Modal, Form, Input } from "antd";

export default function RequestSendForm({ visible, onSend, onCancel }) {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  return (
    <Modal
      visible={visible}
      title="Request an invite"
      centered
      okText="Send"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSend(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="Full name"
          rules={[
            {
              required: true,
            },
            {
              type: "string",
              min: 3,
            },
          ]}
        >
          <Input placeholder="Full name" />
        </Form.Item>
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
            },
            {
              type: "email",
            },
          ]}
        >
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="Confirm email"
          rules={[
            {
              required: true,
            },
            {
              type: "email",
            },
          ]}
        >
          <Input
            placeholder="Confirm email"
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </Form.Item>
        {email && confirmEmail && email !== confirmEmail ? (
          <div style={{ color: "#ff4d4f" }}>
            'Confirm Email' needs to match 'Email'
          </div>
        ) : null}
      </Form>
    </Modal>
  );
}

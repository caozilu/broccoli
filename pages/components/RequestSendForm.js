import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import axios from "axios";

export default function RequestSendForm({ visible, onSend, onCancel }) {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState(null);

  const sendRequest = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Received values of form: ", values);
        axios
          .post("api/send-request", {
            name: name,
            email: email,
          })
          .then((response) => {
            console.log(response);
            Modal.success({
              title: "All done!",
              content:
                "You will be one of the first to experience Broccoli & Co. when we launch.",
            });
          })
          .then(() => {
            setError(null);
            form.resetFields();
            onSend();
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      visible={visible}
      title="Request an invite"
      centered
      okText="Send"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => sendRequest()}
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
          <Input
            placeholder="Full name"
            onChange={(e) => setName(e.target.value)}
          />
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
      {error ? (
        <div style={{ color: "#ff4d4f" }}>
          {`Error ${error.response.status} - ${error.response.data.errorMessage}`}
        </div>
      ) : null}
    </Modal>
  );
}

import React, { useState } from "react";
import { Button } from "antd";
import RequestSendForm from "./RequestSendForm";

export default function Main() {
  const [visible, setVisible] = useState(false);

  const onSend = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full ml-auto mr-auto mt-0 sm:mt-20 mb-14 sm:mb-20 flex-1 px-20 text-center overflow-auto">
      <h1 className="text-5xl font-semibold">
        A better way <br />
        to enjoy every day.
      </h1>

      <p className="mt-3 text-xl leading-normal sm:leading-extra-loose">
        Be the first to know when we launch.
      </p>

      <Button
        className="mt-14 sm:mt-0"
        type="primary"
        size="large"
        onClick={() => {
          setVisible(true);
        }}
      >
        Request an invite
      </Button>
      <RequestSendForm
        visible={visible}
        onSend={onSend}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </main>
  );
}

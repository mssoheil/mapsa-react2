import React from "react";
// UI frameworks
import { Button, Space } from "antd";

export const Spaces = () => {
  return (
    <div style={{ height: 200 }}>
      {/* <Space size={200}>
        <span>button</span>
        <span>button</span>
      </Space> */}

      {/* <Space direction="vertical" size={20}>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
      </Space> */}

      {/* <Space size={20} align="start" style={{ height: 200 }}>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
      </Space> */}
      {/* <Space.Compact size={20}>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
      </Space.Compact> */}
      {/* <Space.Compact block direction="vertical">
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
      </Space.Compact> */}
      <Space size={[12, 200]} wrap split=":????:">
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
        <Button type="primary">button</Button>
      </Space>
    </div>
  );
};

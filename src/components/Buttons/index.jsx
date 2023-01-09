// UI frameworks
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export const Buttons = () => {
  return (
    <div className="bg-light">
      {/* Types */}
      <Button type="default">default button</Button>
      <Button type="dashed">dashed</Button>
      <Button type="primary">primary</Button>
      <Button type="link">link</Button>
      <Button type="text">text</Button>
      <Button ghost type="default">
        ghost
      </Button>
      <br />
      {/* Shapes */}
      <Button shape="round">round</Button>
      <Button shape="circle">c</Button>
      {/* States */}
      <Button type="primary" loading>
        loading
      </Button>
      <Button type="primary" disabled>
        disabled
      </Button>
      {/* Sizes */}
      <Button size="small">size</Button>
      <Button size="large">size</Button>
      <Button size="middle">size</Button>
      <Button type="primary" block>
        Block
      </Button>
      <Button type="primary" icon={<CheckOutlined />}>
        icon
      </Button>
      <Button type="primary" danger>
        danger
      </Button>
      <Button type="link" danger>
        danger
      </Button>
    </div>
  );
};

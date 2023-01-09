import React from "react";
import { Typography } from "antd";
import { FormOutlined, EditOutlined } from "@ant-design/icons";
const { Title } = Typography;

export const Texts = () => {
  return (
    <div>
      <Typography.Title level={1} type="danger">
        Title
      </Typography.Title>
      <Typography.Title level={2} type="success">
        Title2
      </Typography.Title>
      <Typography.Title level={3} type="secondary">
        Title3
      </Typography.Title>
      <Typography.Title level={4} type="warning">
        Title4
      </Typography.Title>
      <Typography.Title level={5} disabled>
        Title5
      </Typography.Title>
      <Title mark>mark</Title>
      <Title underline>underlined</Title>
      <Title delete>deleted</Title>
      <Title italic>italic</Title>
      <Typography.Text strong>strong</Typography.Text>
      <br />
      <Typography.Link>link</Typography.Link>
      <Typography.Paragraph
        copyable={{
          icon: [<FormOutlined />, <EditOutlined />],
          tooltips: "copy the text",
          onCopy: () => {
            console.log("copied");
          },
          text: "my name",
        }}
      >
        copyable
      </Typography.Paragraph>
      <Title
        editable={{
          icon: [<EditOutlined />],
          triggerType: ["icon", "text"],
          enterIcon: <FormOutlined />,
          editing: true,

          autoSize: { maxRows: 4, minRows: 2 },
        }}
      >
        This is an editable text
      </Title>
      <Typography.Paragraph
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: "expand",
          tooltip: "expand text",
        }}
      >
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Typography.Paragraph>
    </div>
  );
};

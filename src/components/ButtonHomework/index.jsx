import { Button, Typography } from "antd";
import React from "react";

const buttonTypesList = [
  {
    type: "primary",
    shape: "circle",
    size: "large",
    danger: true,
  },
  {
    type: "dashed",
    shape: "default",
    size: "small",
    danger: false,
  },
  {
    type: "primary",
    shape: "round",
    size: "middle",
    danger: true,
  },
  {
    type: "link",
    shape: "circle",
    size: "small",
    danger: false,
  },
  {
    type: "primary",
    shape: "circle",
    size: "large",
    danger: false,
  },
];

export const ButtonHomework = () => {
  const [index, setIndex] = React.useState(0);

  function handleChangeStyle() {
    if (index < 4) {
      setIndex((index) => index + 1);
    } else {
      setIndex(0);
    }
    const randomIndex = Math.floor(Math.random() * 5);
    // setIndex(randomIndex);
  }

  return (
    <React.Fragment>
      <Typography.Title>
        {buttonTypesList[index].type} {buttonTypesList[index].shape}{" "}
        {buttonTypesList[index].size}{" "}
        {buttonTypesList[index].danger ? "danger" : ""} button
      </Typography.Title>
      <Button onClick={handleChangeStyle} {...buttonTypesList[index]}>
        Click
      </Button>
    </React.Fragment>
  );
};

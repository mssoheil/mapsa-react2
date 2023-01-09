import React from "react";
// Common components
import { Buttons } from "./components/Buttons";
import { GridHomework } from "./components/GridHomework";
import { Texts } from "./components/Texts";
import { ButtonHomework } from "./components/ButtonHomework";

export function App() {
  return (
    <div className="container p-5">
      {/* <Buttons /> */}
      {/* <GridHomework /> */}
      {/* <Texts /> */}
      <ButtonHomework />
    </div>
  );
}

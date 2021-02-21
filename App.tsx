import React from "react";
import { Navigator } from "./src/navigator";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <Navigator />
  </ApplicationProvider>
);

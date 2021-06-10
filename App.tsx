import React from "react";
import { Navigator } from "./src/navigator";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Provider } from "react-redux";
import store from "./src/features/store";

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </ApplicationProvider>
  </>
);

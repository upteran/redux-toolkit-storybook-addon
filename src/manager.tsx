import React from "react";
import { addons, types } from "storybook/internal/manager-api";

import { Panel } from "./components/Panel";
// import { Tab } from "./components/Tab";
// import { Tool } from "./components/Tool";
import { ADDON_ID, PANEL_ID, TAB_ID, TOOL_ID } from "./constants";
import { AddonPanel } from "@storybook/components";

/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */

const StorePanel = (props) => (
  <AddonPanel {...props}>
    <Panel />
  </AddonPanel>
);

// Register the addon
addons.register(ADDON_ID, (api) => {
  // Register a tool
  // addons.add(TOOL_ID, {
  //   type: types.TOOL,
  //   title: "My addon",
  //   match: ({ viewMode, tabId }) =>
  //     !!((viewMode && viewMode.match(/^(story)$/)) || tabId === TAB_ID),
  //   render: () => <Tool api={api} />,
  // });

  // Register a panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Redux Toolkit Panel",
    match: ({ viewMode }) => viewMode === "story",
    render: StorePanel,
  });

  // Register a tab
  // addons.add(TAB_ID, {
  //   type: types.TAB,
  //   title: "My addon",
  //   render: ({ active }) => <Tab active={active} />,
  // });
});

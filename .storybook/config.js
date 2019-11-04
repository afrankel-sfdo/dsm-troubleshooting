import { configure, addDecorator, addParameters } from "@storybook/react";

/* Broken */
import { initDsm } from "@invisionapp/dsm-storybook";
initDsm({
  addDecorator,
  addParameters,
  callback: () =>
    configure(require.context("../src/", true, /\.stories\.js$/), module)
});

/* Works */
// configure(require.context("../src/", true, /\.stories\.js$/), module);

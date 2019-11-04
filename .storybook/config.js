import { configure, addDecorator, addParameters } from "@storybook/react";
import { initDsm } from "@invisionapp/dsm-storybook";

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () =>
    configure(require.context("../src/", true, /\.stories\.js$/), module)
});

// automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);

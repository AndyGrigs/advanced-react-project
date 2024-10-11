import type { Preview } from "@storybook/react";
import { StyleDecorator} from './decorators/styleDecorator'; // Adjust the path as necessary

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  decorators: [StyleDecorator],
};

export default preview;

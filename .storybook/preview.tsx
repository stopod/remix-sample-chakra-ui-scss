import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../app/tailwind.css";

const theme = extendTheme({
  // ここにカスタムテーマの設定を追加
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  // 他の設定（フォント、スタイルなど）も追加できます
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decoratorsの追加←ChakraUIでstorybookを使えるようにするため
  // BrowserRouterでラップすることで、Hooksを使ったコンポーネントがエラーを吐かないようにする
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Story />
        </ChakraProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;

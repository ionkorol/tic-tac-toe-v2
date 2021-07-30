import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#E1940E",
    },
    secondary: {
      500: "#192C36",
    },
  },
  fonts: {
    heading: "Teko_500Medium",
    body: "Teko_500Medium",
    mono: "Teko_500Medium",
  },
  components: {
    Text: {
      baseStyle: {
        color: "white",
      },
    },
    Heading: {
      baseStyle: {
        color: "white",
      },
    },
  },
});

export default theme;

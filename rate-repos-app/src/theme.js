import { Platform } from "react-native";

const theme = {
    roundness: 5,
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      error: "#d73a4a"
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        android: "Roboto",
        ios: "Arial",
        default: 'System'
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    backgrounds:{
      dark:"#24292e",
      mainBackground: "#e1e4e8"
    }
  };
  
  export default theme;
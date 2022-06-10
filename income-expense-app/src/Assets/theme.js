import { createTheme, ThemeProvider } from "@mui/material/styles";
import colors from "./colors";

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
};

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ff9066", // #000034, //"#E33E7F",
    },
    primary: {
      main: "#017eff", //"#cc7416",
    },
    background: {
      main: colors.primaryBackground,
      dark: "#333333",
      sidebar: colors.sidebar,
    },
    // typography: {
    //   fontWeight: 500,
    // },

    colors: {
      blueColor: colors.blueColor,
    },

    text: {
      primaryText: colors.textPrimary,
      aggregatedText: colors.textAggregated,
      activeText: colors.textActive,
      recoveredText: colors.textRecovered,
      deathsText: colors.textDeaths,
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),

    h6: {
      fontSize: 18,
      fontWeight: fontWeight.bold,
      //color: colors.textPrimary,
    },
    h5: {
      fontSize: 20,
      fontWeight: fontWeight.bold,
    },
    h4: {
      fontSize: 32,
      fontWeight: fontWeight.bold,
      //color: colors.textPrimary,
    },
  },
  overrides: {
    MuiInputLabel: {
      formControl: {
        fontSize: 14,
        color: colors.textDeaths,
      },
      shrink: {
        fontSize: 16,
        color: colors.textAggregated,
      },
    },
    MuiInput: {
      input: {
        fontSize: 16,
      },
      root: {
        "&$disabled": {
          color: colors.textAggregated,
          cursor: "not-allowed",
          "& svg": {
            display: "none",
          },
        },
      },
    },

    // MuiTable: {
    //   root: {
    //     background: colors.blueColor,
    //      borderSpacing: "0 8px",
    //      borderCollapse: "separate",
    //      padding: '0 1em'
    //   },
    // },
    MuiTableCell: {
      root: {
        //borderBottom: "none",
        //padding: "4px 12px",
      },
      head: {
        fontSize: 16,
        //color: colors.blueColor,
        fontWeight: 400,
      },
      body: {
        fontSize: 14,
        //color: colors.textPrimary,
        //backgroundColor: colors.white,
        fontWeight: 600,
        // "&:first-child": {
        //   borderTopLeftRadius: 5,
        //   borderBottomLeftRadius: 5,
        // },
        // "&:last-child": {
        //   borderTopRightRadius: 5,
        //   borderBottomRightRadius: 5,
        // },
      },
    },
    // MuiTableRow: {
    //   root: {
    //     height: 60,
    //   },
    // },
    // MuiTablePagination: {
    //   spacer: "1em",
    //   caption: {
    //     textTransform: "none",
    //     color: colors.grayOne,
    //   },
    //   select: {
    //     paddingLeft: 0,
    //   },
    //   actions: {
    //     button: {
    //       backgroundColor: colors.backgroundHighlight,
    //       borderRadius: "30%",
    //     },
    //   },
    // },
  },
});

export default theme;

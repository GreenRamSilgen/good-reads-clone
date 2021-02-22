export const darkTheme = {
  font: {
    // ITC Franklin Gothic Standard, local import
    font1: {
      book: "'FranklinGothicStdBook', sans-serif",
      med: "'FranklinGothicStdMed', sans-serif",
      demi: "'FranklinGothicStdDemi', sans-serif",
      hvy: "'FranklinGothicStdHvy', sans-serif",
    },
    // URW Franklin Gothic, local import
    font2: {
      book: "'FranklinGothicURWBook', sans-serif",
      med: "'FranklinGothicURWMed', sans-serif",
    },
    // Google font, CDN
    font3: {
      normal: "'Lato', sans-serif",
    },
  },
  colors: {
    primary: {
      main: "#000000",
      light: "#303030", // THIS COLOUR IS USED TEMPORARILY. NEED UI TEAM TO GIVE A PROPER LIGHT VERSION
    },
    secondary: {
      main: "#EE982F",
      light: "#F6C282",
    },
    danger: {
      main: "#ff3f3f",
      light: "#f38282",
    },
    textPrimary: {
      main: "#fff",
      light: "rgba(255, 255, 255, 0.5)",
      dark: "#302F2F",
    },
    textSecondary: {
      main: "#E29D4A",
    },
    disabled: {
      background: "#6b6b6b",
      color: "#939292",
      border: "#939292",
    },
    textAccent: "#E29D4A",
    black: "rgba(0, 0, 0, 0.9)", // Default black
    white: "#fff", // Default white
    backgrounds: {
      gray: "rgba(255,255,255, 0.1)",
      home: "#191919",
      input: "#272626",
      projects: "#302F2F",
      project: "#3F3F3F",
    },
    separators: {
      // Page separators
      home: "#313131",
      projects: "#7C7C7C",
      searchInput: "#6b6b6b",
      card: "#d8d8d8",
    },
    modal: {
      overlay: "rgba(30, 30, 30, .9)",
      border: "#EE982F",
    },
  },
  animations: {
    short: "130ms",
  },
  breakpoints: {
    xs: "600px",
    s: "768px",
    m: "992px",
    l: "1200px",
    xl: "1480px",
  },
};

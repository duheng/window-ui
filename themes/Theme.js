import ThemeDefault from "./ThemeDefault";
import ThemeBlack from "./ThemeBlack";
import ThemeViolet from "./ThemeViolet";

const Theme = {
  set: function(theme) {
    Object.assign(this, theme);
  },
  themes: {
    default: ThemeDefault,
    black: ThemeBlack,
    violet: ThemeViolet
  }
};

Theme.set(ThemeDefault);

export default Theme;

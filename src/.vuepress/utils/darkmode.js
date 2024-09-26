const KEY = "darkMode";
const CLASS_NAME = "is-dark";

const DarkMode = {
  init() {
    if (this.isDarkMode()) {
      document.documentElement.classList.add(CLASS_NAME);
    }
  },

  toggle() {
    document.documentElement.classList.toggle(CLASS_NAME);
    localStorage.setItem(
      KEY,
      document.documentElement.classList.contains(CLASS_NAME)
    );
  },

  isDarkMode() {
    return localStorage.getItem(KEY) === "true";
  },
};

export default DarkMode;

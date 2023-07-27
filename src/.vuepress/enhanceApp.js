import VIcon from "vue-icon";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.use(VIcon, "v-icon");
  router.addRoutes([
    { path: "/win7simu/", redirect: "/win7simu/about/" },
    { path: "/brick1100/", redirect: "/brick1100/about/" },
    { path: "/contact/", redirect: "/about/" },
  ]);
};

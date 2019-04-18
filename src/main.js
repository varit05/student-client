import Vue from "vue";
import App from "./App.vue";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";

import { createProvider } from "./vue-apollo";
import router from "./router";

Vue.config.productionTip = false;

// Date Filter
Vue.filter("formatDate", function(value) {
  if (value) {
    console.log(typeof value);
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");

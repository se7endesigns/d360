import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'
import Add from './Add.vue'
import axios from 'axios'
import VueRouter from 'vue-router'

const routes = [
  { path: '/',
    component: List,
    name: 'home'
  },
  { path: '/add',
    component: Add,
    name: 'add'
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});


new Vue({
  el: '#app',
  router,
  data: {
    records: []
  },
  render: h => h(App),
  // created() {
  //   axios.get(airtable_read_endpoint,config)
  //        .then(response => {
  //          this.records = response.data.records
  //          console.log(records);
  //        })
  //        .catch(error => console.log(error))

  // }
}).$mount('#app')




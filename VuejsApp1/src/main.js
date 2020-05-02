import Vue from 'vue';
import App from './App.vue';
///
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import store from './components/ducks/store';
import { Provider } from 'react-redux';
///
Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');

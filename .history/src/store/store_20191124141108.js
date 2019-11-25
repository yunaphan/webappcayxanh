import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import BaseMap from "./modules/BaseMap/index"


Vue.use(Vuex)

//getters call
const state = {
    // tuyenduong: null,
    // danhmuctencayxanh: null,
    // danhmuctinhtrangcayxanh: null,
    // currentDay: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
    // danhsachnguoidung: [],
    // loading: false,
    url_service: "https://tilis.vbgis.vn/arcgis/rest/services/DoThi/CayXanh/FeatureServer/0",
    token: '277aed44132a8c83ac0a0a5dbe9c0474ba73fc7c',
    url_web: 'http://113.161.225.252:8000/'
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        BaseMap,
    }
});
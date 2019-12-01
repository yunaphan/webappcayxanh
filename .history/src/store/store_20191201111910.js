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
    token: '6e53a1474b28d72e4a6837e493dc124fbde4a703',
    url_web: 'https://tms-backend.vbgis.vn/',
    user: {},
    action_rule: {
        xem: '1.0',
        them: '1.0',
        sua: '1.0',
        xoa: '1.0',
        xuat: '1.0'
    }
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
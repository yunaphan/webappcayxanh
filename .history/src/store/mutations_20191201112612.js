//actions call
const mutations = {
    // getApiTuyenDuong: (state, payload) => {
    //      state.tuyenduong = payload
    // },
    // getApiDanhSachTenCX: (state, payload) => {
    //     state.danhmuctencayxanh = payload
    // },
    // getApiDanhSachTinhTrangCX: (state, payload) => {
    //     state.danhmuctinhtrangcayxanh = payload
    // },
    // getApiDanhSachNguoiDung: (state, payload) => {
    //     state.danhsachnguoidung = payload
    // }
    mutationUrlService: (state, payload) => {
        state.url_service = payload
    },
    updateUser:(state,payload) => {
         state.user = payload
    },
    update_action_rule: (state,payload) => {
        state.action_rule = payload
    }
}

export default mutations;
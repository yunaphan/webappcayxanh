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
    }
}

export default mutations;
//methods call
const actions = {
    // commitApiTuyenDuong: ({commit}, payload) => {
    //     commit('getApiTuyenDuong', payload)
    // },
    // commitApiDanhSachTenCX: ({commit}, payload) => {
    //     commit('getApiDanhSachTenCX', payload)
    // },
    // commitApiDanhMucTinhTrangCX: ({commit}, payload) => {
    //     commit('getApiDanhSachTinhTrangCX', payload)
    // },
    // commitApiDanhSachNguoiDung: ({commit}, payload) => {
    //     commit('getApiDanhSachNguoiDung', payload)
    // }
    commitUrlService: ({commit}, payload) => {
        commit('mutationUrlService', payload)
    }
}

export default actions;
//computed call
const getters = {
    getUser: state => {
        return state.user
    },
    getTuyenDuong: state => {
        return state.tuyenduong
    },
    getDanhSachTenCX: state => {
        return state.danhmuctencayxanh
    },
    getDanhMucTinhTrangCX: state => {
        return state.danhmuctinhtrangcayxanh
    },
    getDanhSachNguoiDung: state => {
        return state.danhsachnguoidung
    },
    getUrlService: state => {
        return state.url_service
    },
    getaction_rule: state => {
        return state.action_rule
    }
}

export default getters;
<template>
    <f7-page>
        <f7-navbar title="Thông tin cây xanh" back-link="Back"></f7-navbar>
        <!--<f7-block-title>Mẫu thêm cây xanh</f7-block-title>-->
        <f7-list form style="margin: auto 0; ">
            <f7-list-item title="Số Hiệu">
                <f7-input type="text" @input="getSelectedFeature.attributes.SoHieu = $event.target.value"
                    :value="getSelectedFeature.attributes.SoHieu"
                ></f7-input>
            </f7-list-item>
            <f7-list-item v-model="getSelectedFeature.attributes.MaTenCX" title="Tên cây xanh" smart-select :smart-select-params="{openIn: 'sheet'}">
                
                <select v-model="getSelectedFeature.attributes.MaTenCX">
                    <option v-for="(tencx, index) in danhsachtencx" 
                    :key="index" :value="tencx.matencx"
                    >{{tencx.tencx}}</option>
                </select>
            </f7-list-item>
            <f7-list-item title="Kinh độ">
                <f7-input disabled type="text" :value="this.getTrack.view.center.x"></f7-input>
            </f7-list-item>
            <f7-list-item title="Vĩ độ">
                <f7-input disabled type="text" :value="this.getTrack.view.center.y"></f7-input>
            </f7-list-item>
            <f7-list-item title="Chiều cao">
                <f7-input type="text" :value="getSelectedFeature.attributes.ChieuCao" 
                @input="getSelectedFeature.attributes.ChieuCao = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Đường kính">
                <f7-input type="text" :value="getSelectedFeature.attributes.DuongKinh"
                @input="getSelectedFeature.attributes.DuongKinh = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Độ rộng tán">
                <f7-input type="text" :value="getSelectedFeature.attributes.DoRongTan"
                @input="getSelectedFeature.attributes.DoRongTan = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Tình trạng cây xanh" v-model="getSelectedFeature.attributes.MaTinhTrang" smart-select :smart-select-params="{openIn: 'sheet'}">
                <!-- {{getSelectedFeature.attributes.MaTinhTrang}} -->
                <select v-model="getSelectedFeature.attributes.MaTinhTrang">
                    <option v-for="(tinhtrang, index) in danhsachtinhtrangcx" 
                    :key="index" :value="tinhtrang.matinhtrang"
                    >{{tinhtrang.tinhtrang}}</option>
                </select>
            </f7-list-item>
            <f7-list-item title="Tuyến đường" v--model="getSelectedFeature.attributes.TuyenDuong" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select v-model="getSelectedFeature.attributes.TuyenDuong" @input="getSelectedFeature.attributes.TuyenDuong" >
                    <option v-for="(duong, index) in danhmuctuyenduong"
                     :key="index" :value="duong.maduong"
                    >{{duong.tenduong}}</option>
                </select>
            </f7-list-item>
            <f7-list-item title="Ngày trồng">
                <f7-input type="date" :value="getSelectedFeature.attributes.NgayTrong"
                @input="getSelectedFeature.attributes.NgayTrong = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Ngày cập nhật">
                <f7-input type="date" :value="getSelectedFeature.attributes.NgayCapNhat"
                 @input="getSelectedFeature.attributes.NgayCapNhat = $event.target.value"
                 ></f7-input>
            </f7-list-item>
            <f7-list-item title="Thuộc tính">
                <f7-input type="text"  :value="getSelectedFeature.attributes.ThuocTinh"
                 @input="getSelectedFeature.attributes.ThuocTinh = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Ghi chú">
                <f7-input type="text" :value="getSelectedFeature.attributes.GhiChu"
                @input="getSelectedFeature.attributes.GhiChu = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Người cập nhật">
                <f7-input type="text" :value="getSelectedFeature.attributes.NguoiCapNhat"
                @input="getSelectedFeature.attributes.NguoiCapNhat = $event.target.value"></f7-input>
            </f7-list-item>
        </f7-list>
        <f7-button class="col" fill @click="UpdateFeature()">Cập nhật</f7-button>
    </f7-page>
</template>
<script>
import axios from 'axios'
import { loadModules } from 'esri-loader'
import { mapGetters, mapActions} from 'vuex'
import { updateFeatures } from '@esri/arcgis-rest-feature-layer';
export default {
    data(){
        return{
            danhsachtencx: [],
            danhsachtinhtrangcx: [],
            danhmuctuyenduong: [],
        }
    },
    computed: {
        ...mapGetters([
            'getTrack',
            'getView',
            'getFeature',
            'getFeatureLayer',
            'getSelectedFeature',
        ])
    },
    methods: {
        ...mapActions(['commitfeatureUpdate']),
        getApiTencx(){
            axios.get(this.$store.state.url_web+"ten-cay-xanh/", {
                headers: {
                    Authorization: "Token "+ this.$store.state.token
                }
            })
            .then((response) => {
                this.danhsachtencx = response.data
            })
        },
        getApiTinhTrangCayXanh(){
            axios.get(this.$store.state.url_web+"trang-thai-cay-xanh/", {
                headers: {
                    Authorization: "Token "+ this.$store.state.token
                }
            })
            .then((response) => {
                this.danhsachtinhtrangcx = response.data
            })
        },
        apiTuyenDuong(){
            axios.get(this.$store.state.url_web+"danh-muc-tuyen-duong/", {
                headers: {
                    Authorization: "Token "+ this.$store.state.token
                }
            })
            .then((response) => {
                this.danhmuctuyenduong = response.data
            })
        },
        UpdateFeature(){
            // this.getSelectedFeature.geometry  = this.getView.center
            this.commitfeatureUpdate(this.getSelectedFeature)
        },
    },
    created(){
        this.getApiTencx()
        this.getApiTinhTrangCayXanh()
        this.apiTuyenDuong()
    },
}
</script>

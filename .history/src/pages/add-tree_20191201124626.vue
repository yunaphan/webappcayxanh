<template>
    <f7-page>
          <f7-navbar title="Danh sách lịch thi công" back-link="Back"></f7-navbar>
        <f7-block-title>Mẫu thêm cây xanh</f7-block-title>
        <f7-list form style="margin: auto 0; ">
            <f7-list-item title="Số Hiệu">
                <f7-input type="text" @input="getFeature.attributes.SoHieu = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Tên cây xanh" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select v-model="getFeature.attributes.MaTenCX">
                    <option v-for="(tencx, index) in danhsachtencx" 
                    :key="index" :value="tencx.matencx"
                    >{{tencx.tencx}}</option>
                </select>
            </f7-list-item>
            <f7-list-item title="Kinh độ">
                <f7-input type="text" :value="this.getTrack.view.center.x"
                disabled></f7-input>
            </f7-list-item>
            <f7-list-item title="Vĩ độ">
                <f7-input type="text" :value="this.getTrack.view.center.y"
              disabled></f7-input>
            </f7-list-item>
            <f7-list-item title="Chiều cao">
                <f7-input type="text" @input="getFeature.attributes.ChieuCao = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Đường kính">
                <f7-input type="text" @input="getFeature.attributes.DuongKinh = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Độ rộng tán">
                <f7-input type="text" @input="getFeature.attributes.DoRongTan = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Tình trạng cây xanh" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select v-model="getFeature.attributes.MaTinhTrang">
                    <option v-for="(tinhtrang, index) in danhsachtinhtrangcx" 
                    :key="index" :value="tinhtrang.matinhtrang"
                    >{{tinhtrang.tinhtrang}}</option>
                </select>
            </f7-list-item>
            <f7-list-item title="Tuyến đường" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select v-model="getFeature.attributes.TuyenDuong">
                    <option v-for="(duong, index) in danhmuctuyenduong"
                     :key="index" :value="duong.maduong"
                    >{{duong.tenduong}}</option>
                </select>
            </f7-list-item>
            
            <f7-list-item title="Ngày trồng">
                {{getFeature.attributes.NgayTrong}}
                <f7-input type="date" :value="getFeature.attributes.NgayTrong"
                @input="getFeature.attributes.NgayTrong = $event.target.value"></f7-input>
            </f7-list-item>
           
            <f7-list-item title="Thuộc tính">
                <f7-input type="text" @input="getFeature.attributes.ThuocTinh = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Ghi chú">
                <f7-input type="text" @input="getFeature.attributes.GhiChu = $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item title="Người cập nhật">
                <f7-input type="text" :value="fullName" @input="getFeature.attributes.NguoiCapNhat = $event.target.value"></f7-input>
            </f7-list-item>
        </f7-list>
        
        <f7-button class="col" fill @click="addFeature">Thêm cây</f7-button>
    </f7-page>
</template>
<script>
import axios from 'axios'
import { loadModules } from 'esri-loader'
import { mapGetters, mapActions} from 'vuex'
import { addFeatures } from '@esri/arcgis-rest-feature-layer';
export default {
    data(){
        return{
            danhsachtencx: [],
            danhsachtinhtrangcx: [],
            danhmuctuyenduong: [],
            user: {},
            // SoHieu: '',
            // MaTenCX: '',
            // DuongKinh: '',
            // ChieuCao: '',
            // DoRongTan: '',
            // MaTinhTrang: '',
            // TuyenDuong: '',
            // NgayTrong: '',
            // NgayCapNhat: '',
            // ThuocTinh: '',
            // GhiChu: '',
            // NguoiCapNhat: ''
        }
    },
    computed: {
        ...mapGetters([
            'getTrack',
            'getView',
            'getFeature',
            'getFeatureLayer',
            "getaction_rule"
        ]),
        fullName(){
            return this.user.lastname +' '+ this.user.middlename +' '+ this.user.firstname
        }
    },
    watch: {
        getaction_rule(newVal)
        {
            console.log(newVal)
        }
    },
    methods: {
        api_user()
        {
            axios.post(this.$store.state.url_web+ 'infomations-by-token/',{
                key: this.$cookies.get('key')
            },
            {
                headers: {
                    Authorization: "Token "+ this.$cookies.get('key')
                }
            }).then((response) => {
                // console.log(response.data)
                this.user = response.data
                console.log(response.data.qu)
            })
        },
        getApiTencx(){
            axios.get(this.$store.state.url_web+"ten-cay-xanh/", {
                headers: {
                    Authorization: "Token "+ this.$store.state.token
                }
            })
            .then((response) => {
                this.danhsachtencx = response.data
                // console.log(response.data)
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
        setPoint(){
            loadModules([
                "esri/Graphic",
            ],{
                url: "https://js.arcgis.com/4.11/",
            })
            .then(([
                Graphic,
            ]) => {
                this.getView.graphics.removeAll()
                var point = {
                    type: point,
                    longitude: this.getTrack.view.center.x,
                    latitude: this.getTrack.view.center.y
                }
                this.$store.state.BaseMap.feature.geometry.x = this.getTrack.view.center.x
                this.$store.state.BaseMap.feature.geometry.y = this.getTrack.view.center.y
                console.log('abc',this.$store.state.BaseMap.feature)
                var simpleMarkerSymbol = {
                    type: "simple-marker",
                    color: [226, 119, 40],  // orange
                    outline: {
                        color: [255, 255, 255], // white
                        width: 1
                    }
                };

                var pointGraphic = new Graphic({
                    geometry: point,
                    symbol: simpleMarkerSymbol
                })
                this.getView.graphics.add(pointGraphic)
            })
        },
        addFeature(){
            this.getFeature.geometry  = this.getView.center
            // console.log(this.getFeature ,this.getView)
           if(this.getaction_rule.them == '1.2')
           {
                addFeatures({
                    url: this.$store.state.url_service,
                    features: [this.getFeature],
                })
                .then((response) => {
                    console.log(response)
                    // this.getView.graphics.removeAll()
                    this.getFeatureLayer.refresh()
                    this.$f7router.back();
                })
           }
           else
           {
               alert('Bạn không có quyền thực hiện chức năng này!')
           }
        },
        
    },
    created(){
        this.getApiTencx()
        this.getApiTinhTrangCayXanh()
        this.apiTuyenDuong()
        this.api_user()
    },
}
</script>

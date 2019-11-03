<template>
    <f7-page>
        <f7-navbar title="Mẫu thêm cây xanh" back-link="Back"></f7-navbar>
        <!--<f7-block-title>Mẫu thêm cây xanh</f7-block-title>-->
        <f7-list form style="margin: auto 0; ">
            <f7-list-item title="Số Hiệu">
                <f7-input type="text"></f7-input>
            </f7-list-item>
            <f7-list-item title="Tên cây xanh" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select>
                    <option v-for="(tencx, index) in danhsachtencx" :key="index" :value="tencx.matencx">{{tencx.tencx}}</option>
                </select>
            </f7-list-item>
            <f7-list-item title="Kinh độ">
                <f7-input type="text"></f7-input>
            </f7-list-item>
            <f7-list-item title="Vĩ độ">
                <f7-input type="text"></f7-input>
            </f7-list-item>
            <f7-list-item title="Chiều cao">
                <f7-input type="text"></f7-input>
            </f7-list-item>
            <f7-list-item title="Đường kính">
                <f7-input type="text"></f7-input>
            </f7-list-item>
            <f7-list-item title="Độ rộng tán">
                <f7-input type="text"></f7-input>
            </f7-list-item>
            <f7-list-item title="Tình trạng cây xanh" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select>
                    <option v-for="(tinhtrang, index) in danhsachtinhtrangcx" :key="index" :value="tinhtrang.matinhtrang">{{tinhtrang.tinhtrang}}</option>
                </select>
            </f7-list-item>
            <f7-list-item title="Tuyến đường" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select>
                    <option v-for="(duong, index) in danhmuctuyenduong" :key="index" :value="duong.maduong">{{duong.tenduong}}</option>
                </select>
            </f7-list-item>
            <f7-list-item title="Ngày trồng">
                <f7-input type="date" value="2014-04-30" disabled></f7-input>
            </f7-list-item>
            <f7-list-item title="Ngày cập nhật">
                <f7-input type="date" value="2015-04-30" disabled></f7-input>
            </f7-list-item>
            <f7-list-item title="Thuộc tính">
                <f7-input type="text"></f7-input>
            </f7-list-item>
            <f7-list-item title="Ghi chú">
                <f7-input type="text"></f7-input>
            </f7-list-item>
            <f7-list-item title="Người cập nhật">
                <f7-input type="text"></f7-input>
            </f7-list-item>
        </f7-list>
        <f7-button class="col" fill>Thêm cây</f7-button>
    </f7-page>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            danhsachtencx: [],
            danhsachtinhtrangcx: [],
            danhmuctuyenduong: []
        }
    },
    methods: {
        getApiTencx(){
            axios.get("http://113.161.225.252:8000/ten-cay-xanh/", {
                headers: {
                    Authorization: "Token 638635059406d15db24dfecb856f414042a465ce"
                }
            })
            .then((response) => {
                this.danhsachtencx = response.data
                // console.log(response.data)
            })
        },
        getApiTinhTrangCayXanh(){
            axios.get("http://113.161.225.252:8000/trang-thai-cay-xanh/", {
                headers: {
                    Authorization: "Token 638635059406d15db24dfecb856f414042a465ce"
                }
            })
            .then((response) => {
                this.danhsachtinhtrangcx = response.data
            })
        },
        apiTuyenDuong(){
            axios.get('http://113.161.225.252:8000/danh-muc-tuyen-duong/', {
                headers: {
                    Authorization: "Token 638635059406d15db24dfecb856f414042a465ce"
                }
            })
            .then((response) => {
            this.danhmuctuyenduong = response.data
            })
        },
    },
    created(){
        this.getApiTencx()
        this.getApiTinhTrangCayXanh()
        this.apiTuyenDuong()
    },
}
</script>

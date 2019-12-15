<template>
<f7-page>
    <f7-navbar title="Danh sách lịch thi công" back-link="Back"></f7-navbar>
    <f7-block>
         <div class="card" v-for="(lich_thi_cong,index) in ds_lich_thi_cong" :key="index">
            <f7-list form style="margin: auto 0; ">
            <f7-list-item :link="'/lich-thi-cong/'+lich_thi_cong.macttc+'/'" title="Tên lịch thi công">
                {{lich_thi_cong.lichthicong}}
            </f7-list-item>
            
            <f7-list-item title="Tuyến đường" disabled smart-select :smart-select-params="{openIn: 'sheet'}">
                <select v-model="lich_thi_cong.tuyenduong">
                    <option v-for="(duong, index) in danhmuctuyenduong"
                     :key="index" :value="duong.maduong"
                    >{{duong.tenduong}}</option>
                </select>
            </f7-list-item>
           
            <f7-list-item title="Thời gian thi công">
                <span>{{lich_thi_cong.NgayBD}} - {{lich_thi_cong.NgayHoanThanh}}</span>
            </f7-list-item>
            
        </f7-list>
         </div>
    </f7-block>
</f7-page>
</template>


<script>
import  axios from 'axios'
export default {
    data()
    {
        return {
            trang_thai_thi_cong: [],
            danhmuctuyenduong: [],
            hinh_thuc_thi_cong: [],
            ds_lich_thi_cong: []
        }
    },
    methods: {
        api_trang_thai_thi_cong(){
            axios.get(this.$store.state.url_web + 'danh-muc-trang-thai-thi-cong/',{
                headers: {
                    Authorization: "Token "+ this.$store.state.token
                }
            }).then((response) => {
                this.trang_thai_thi_cong = response.data
            })
        },
        api_tuyenduong(){
            axios.get(this.$store.state.url_web+"danh-muc-tuyen-duong/", {
                headers: {
                    Authorization: "Token "+ this.$store.state.token
                }
            })
            .then((response) => {
                this.danhmuctuyenduong = response.data
            })
        },
        api_hinh_thuc_thi_cong()
        {
            axios.get(this.$store.state.url_web + 'hinh-thuc-thi-cong/',{
                headers: {
                    Authorization: "Token "+ this.$store.state.token
                }
            }).then((response) => {
                this.hinh_thuc_thi_cong = response.data
            })
        },
        api_lich_thi_cong()
        {
            axios.post(this.$store.state.url_web+ 'infomations-by-token/',{
                key: this.$cookies.get('key')
            },
            {
                headers: {
                    Authorization: "Token "+ this.$cookies.get('key')
                }
            }).then((response) => {
                axios.get(this.$store.state.url_web + 'chi-tiet-lich-thi-cong/?nhomthiconglich='+response.data.nhomthicong,{
                    headers: {
                        Authorization: "Token "+ this.$store.state.token
                    }
                }).then((response) => {
                    this.ds_lich_thi_cong = response.data
                })
            })
        }
    },
    mounted() {
        this.api_hinh_thuc_thi_cong()
        this.api_tuyenduong()
        this.api_trang_thai_thi_cong()
        this.api_lich_thi_cong()
    },   
}
</script>
<template>
<f7-page>
    <f7-navbar title="Thông tin cây xanh" back-link="Back"></f7-navbar>
    <f7-block>
         <f7-list form style="margin: auto 0; ">
            <f7-list-item title="Tên lịch thi công">
                <f7-input type="text" disabled
                    :value="lich_thi_cong.lichthicong"
                ></f7-input>
            </f7-list-item>
             <f7-list-item title="Mô tả">
                <f7-input disabled type="text" :value="lich_thi_cong.mota"></f7-input>
            </f7-list-item>
            <f7-list-item title="Tuyến đường" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select v-model="lich_thi_cong.tuyenduong">
                    <option v-for="(duong, index) in danhmuctuyenduong"
                     :key="index" :value="duong.maduong"
                    >{{duong.tenduong}}</option>
                </select>
            </f7-list-item>
            <f7-list-item disabled title="Hình thức thi công" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select v-model="lich_thi_cong.hinhthucthicong">
                    <option v-for="(httc, index) in hinh_thuc_thi_cong"
                     :key="index" :value="httc.maloai"
                    >{{httc.tenloai}}</option>
                </select>
            </f7-list-item>
            <f7-list-item title="Ngày bắt đầu">
                <f7-input disabled type="date" :value="lich_thi_cong.NgayBD"></f7-input>
            </f7-list-item>
             <f7-list-item title="Ngày hoàn thành">
                <f7-input disabled type="date" :value="lich_thi_cong.NgayHoanThanh"></f7-input>
            </f7-list-item>
          
              <f7-list-item  title="Trạng thái thi công" smart-select :smart-select-params="{openIn: 'sheet'}">
                <select  v-model="lich_thi_cong.trangthaitc">
                    <option v-for="(tttc, index) in trang_thai_thi_cong"
                     :key="index" :value="tttc.matrangthaitc"  
                    >{{tttc.trangthaitc}}</option>
                </select>
            </f7-list-item>

            <f7-button class="col" fill @click="api_cap_nhat_lich_thi_cong()">Cập nhật</f7-button>
        </f7-list>
    </f7-block>
</f7-page>
</template>


<script>
import  axios from 'axios'
import {mapGetters} from 'vuex'
export default {
    data()
    {
        return {
            trang_thai_thi_cong: [],
            danhmuctuyenduong: [],
            hinh_thuc_thi_cong: [],
            lich_thi_cong: {},
            user: {}
        }
    },
    computed: {
        ...mapGetters(["getUser"])
    },
    watch: {
        getUser(newVal)
        {
            console.log(newVal)
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
       api_lich_thi_cong()
       {
           axios.get(this.$store.state.url_web + 'chi-tiet-lich-thi-cong/'+this.$f7route.params.id+'/',{
               headers: {
                    Authorization: "Token "+ this.$cookies.get('key')
                }
           }).then((response) => {
               this.lich_thi_cong = response.data
           })
       },
       api_cap_nhat_lich_thi_cong()
       {
           if(this.user.quyen == 2)
           {
               axios.put(this.$store.state.url_web + 'chi-tiet-lich-thi-cong/'+this.lich_thi_cong.macttc+'/',this.lich_thi_cong,{
                    headers: {
                            Authorization: "Token "+ this.$cookies.get('key')
                        }
                }).then((response) => {
                    alert('Cập nhật thành công!')
                })
           }
           else
           {
               alert('Bạn không phải là nhóm trưởng')
           }
       }
    },
    mounted() {
        this.api_lich_thi_cong()
        this.api_hinh_thuc_thi_cong()
        this.api_tuyenduong()
        this.api_trang_thai_thi_cong()
        this.api_user()
    },   
}
</script>
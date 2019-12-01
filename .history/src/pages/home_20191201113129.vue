<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Hỗ trợ quản lí cây xanh</f7-nav-title>
    </f7-navbar>
    <span class="esri-icon-locate locate1"></span>
    
    <f7-link id="id-addtree" style="margin-bottom: 10px;">  <f7-button class="esri-icon-plus" @click="$f7router.navigate('/them-cay-xanh/')"></f7-button> </f7-link>
    <f7-block id="app">
      <div id="viewDiv"></div>
    </f7-block>
  </f7-page>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
import axios from 'axios'
export default {
  data(){
    return{
      ClassActive: false,
    }
  },
  computed:{
    ...mapGetters(["getView", "getFeatureLayer"])
  },
  watch:
  {
    $f7route(newVal)
    {
      console.log(newVal)
    },
    getView(newVal)
    {

      const app = this;
      newVal.when(async () => {
        newVal.popup.on("trigger-action", async (event) => {
            // console.log(event)
            if(event.action.id == "viewImage")
            {
              app.$f7router.navigate('/images/'+event.target.selectedFeature.attributes.OBJECTID+'/')
            }
            if(event.action.id == "updateInfor")
            {
              app.$store.state.BaseMap.dialog_update = await true
              app.$store.state.BaseMap.selectedFeature = await event.target.selectedFeature
              console.log(app.$store.state.BaseMap.selectedFeature)
              app.$f7router.navigate("/sua-cay-xanh/"+event.target.selectedFeature.attributes.OBJECTID+"/")
            }
        })
    });
      // this.loadbasemap()
    },
    getFeatureLayer(newVal)
    {
      console.log(newVal)
    }
    
  },
  methods: {
    ...mapActions([
      "loadbasemap",
      "commitUser",
      "commit_action_rule"
    ]),
    api_info_user()
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
            this.commitUser(response.data)
        })
    },
    api_rule()
    {
          axios.post(this.$store.state.url_web+ 'infomations-by-token/',{
              key: this.$cookies.get('key')
          },
          {
              headers: {
                  Authorization: "Token " +this.$cookies.get('key')
              }
          }).then((response) => {
          axios.get(this.$store.state.url_web + 'quyen-nguoi-dung/?maquyen='+response.data.quyen,
          {
              headers: {
                  Authorization: "Token "+this.$cookies.get('key')
              }
          }).then((response) => {
          // console.log('rule',response.data[0].quyen_nguoi_dung)
              response.data[0].quyen_nguoi_dung.forEach((object) => {
                  // const id_cn = object.xem.slice(0,1);
                  // console.log(object)
                  if(object.machucnang == 1)
                  {
                      this.commit_action_rule({
                          xem: object.xem,
                          them: object.them,
                          sua: object.sua,
                          xoa: object.xoa,
                          xuat: object.xuat,
                      })
                  }
                  
              })
              
          })
      
      })
    }
  },
  mounted() {
    
    console.log(this.$cookies.get('key'))
    if(!this.$cookies.isKey('key'))
    {
      this.$f7router.navigate('/login/')
    }
    else
    {
      this.api_rule()
      if(this.getFeatureLayer != null)
      {
        this.getFeatureLayer.refresh()
        console.log('refresh')
      }
       this.api_info_user()
    }
    
    
   
    console.log('load mounted',this.getFeatureLayer)
  },
  beforeRouteEnter (to, from, next) {
    console.log('before router')
  },
  updated() {
    console.log('updated')
  },
  beforeCreate()
  {
    console.log('before')
  },
  created() {
    
    this.loadbasemap()
    
  },
}
</script>
<style>
    html, body, #content, #viewDiv, #app{
      width: 100%;
      height: 100%;
      padding: 0;
      margin:0;
      overflow-y: hidden !important;
    }

    #sidebar{
      border-radius: 0;
    }

    .locate1{
      position: absolute;
      top: calc(50% + 22px);
      left:50%;
      z-index: 99999;
      font-weight: 700;
      color: red;
      transform: translate(-50%, -50%);
      font-size: 20px;

    }

    #id-addtree{
      position: absolute;
      right: 15px;
      bottom: 10%;
      z-index: 99999;
      border: solid 1px #ccc;
      border-radius: 0;
      background-color: #fff;
      color: #000000;
      width: 32px;
      height: 32px;
    }

</style>

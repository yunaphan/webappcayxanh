<template>
<f7-page>
    <f7-navbar title="Hình ảnh cây xanh " back-link="Back"></f7-navbar>
    <f7-block>
        <f7-row>
            <f7-photo-browser
                :photos="photos"
                theme="dark"
                type="popup"
                ref="popupDark"
          ></f7-photo-browser>
            <f7-col width="33" id="camera" class="item-camera" >
                <f7-icon class="icon-camera" ios="f7:camera" aurora="f7:camera" md="material:camera"></f7-icon>
                <input ref="camera" class="file input-camera" type="file" multiple accept="image/*" @change="uploadFile()">

            </f7-col>
        </f7-row>
        <f7-button @click="$refs.popupDark.open()" >
            Xem hình ảnh ({{photos.length}})
        </f7-button>
    </f7-block>

</f7-page>
</template>

<script>
import * as firebase from 'firebase'
import axios from 'axios'
export default {
    data()
    {
        return {
            objectid: 0,
            photos: []
        }
    },
    methods:
    {
        api_image()
        {
            axios.get(this.$store.state.url_web+"hinh-anh-cay/?objectid="+this.$f7route.params.objectid,
            {
                headers: {
                    Authorization: "Token "+ this.$store.state.token
                }
            }).then((response) => {
                // console.log(response.data)
                response.data.forEach((object) => {
                    this.photos.push({
                        url: object.duongdanhinhanh
                    })
                })
            })
        },
        uploadFile()
        {
            var storageRef = firebase.storage().ref('');
            // Create a reference to 'mountains.jpg'
            const self = this;
            const files = this.$refs.camera.files
            for (let index = 0; index < files.length; index++) {
               storageRef.child(files[index].name).put(files[index]).then(function(snapshot) {
                  var storage = firebase.storage().ref('');
                  storage.child(files[index].name).getDownloadURL().then((url) => {
                      console.log(url)
                      self.photos.push({
                          url: url
                      })
                      const data = new FormData()
                      data.append("UUID_BAR_KARAOKE", self.$f7route.params.UUID)
                      data.append("URL_IMAGE",url)
                      axios.post(self.$store.state.url_web + 'hinh-anh-cay/',{
                          objectid: self.$f7route.params.objectid,
                          duongdanhinhanh: url,
                          mota: 'Hình ảnh từ firebase'
                      },{
                        headers: {
                            Authorization: "Token "+ self.$store.state.token
                        }
                      }).then((response) => {
                          console.log(response.data)
                      })
                      
                    
                  });
                });
                
            }
          
        },
    },
    created()
    {
        this.api_image()
        console.log(this.$f7route.params.objectid)
        
    }
}
</script>

<style scoped>
.item-camera {height: 120px;border: 1px solid #e2e2e2;}
#camera {position: relative;}
.input-camera, .icon-camera {position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;}
.input-camera {z-index: 999;opacity: 0;width: 100%;height: 100%;;}
</style>
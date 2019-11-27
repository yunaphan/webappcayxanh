<template>
<f7-page>
    <f7-navbar title="Mẫu thêm cây xanh" back-link="Back"></f7-navbar>
    <f7-block>
        <img src="" alt="">
        <f7-row>
            <f7-col width="33.33" id="camera" class="item-camera">
                <f7-icon class="icon-camera" ios="f7:camera" aurora="f7:camera" md="material:camera"></f7-icon>
                <input class="input-camera" ref="camera" type="file">
            </f7-col>
        </f7-row>
        <f7-button>
            Thêm hình ảnh cây xan mới
            <input type="file" accept="/ima">
        </f7-button>
    </f7-block>

</f7-page>
</template>

<script>
export default {
    data()
    {
        return {
            objectid: 0
        }
    },
    created()
    {
        console.log(this.$f7route.params.objectid)
        
    }
}
</script>

<style scoped>
.item-camera {height: 180px;border: 1px solid #ee22ee}
#camera {position: relative;}
.input-camera, .icon-cameara {position: absolute;z-index: 999;}
</style>
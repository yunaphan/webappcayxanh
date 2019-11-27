<template>
<f7-page>
    <f7-navbar title="Mẫu thêm cây xanh" back-link="Back"></f7-navbar>
    <f7-block>
        <img src="" alt="">
        <f7-row>
            <f7-col width="33.33" id="camera" class="item-camera" >
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
.item-camera {height: 120px;border: 1px solid #e2e2e2;}
#camera {position: relative;}
.input-camera, .icon-cameara {position: absolute;transform: translate(-50%,-50%);top: 50%;left: 50%;width: 100%;height: 100%;}
.input-camera {z-index: 999;opacity: 0;;}
</style>
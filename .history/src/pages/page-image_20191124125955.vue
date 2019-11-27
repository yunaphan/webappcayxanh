<template>
<f7-page>
    <f7-navbar title="Mẫu thêm cây xanh" back-link="Back"></f7-navbar>
    <f7-block>
        
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
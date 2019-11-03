<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Hỗ trợ quản lí cây xanh</f7-nav-title>
    </f7-navbar>
    <f7-block id="app">
      <div id="viewDiv"></div>
    </f7-block>
  </f7-page>
</template>
<script>
import { mapActions} from 'vuex'
export default {
  data(){
    return{
      ClassActive: false,
    }
  },
  methods: {
    ...mapActions([
      "loadbasemap", 
    ]),
    showSidebar(value){
      this.ClassActive = !value
    },
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

</style>

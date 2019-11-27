<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Hỗ trợ quản lí cây xanh</f7-nav-title>
    </f7-navbar>
    <span class="esri-icon-locate locate1"></span>
    <f7-button id="id-addtree" class="esri-icon-plus" @click="$f7router.navigate('/them-cay-xanh/')"></f7-button>
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
  },
  created() {
    this.loadbasemap()
    state.view.when(async () => {
        state.view.popup.on("trigger-action", async (event) => {
            console.log(event)
            if(event.action.id == "viewImage")
            {
                state.viewImage = true
            }
        })
    });
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

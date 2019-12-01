<template>
  <f7-page>
    <f7-navbar >
    </f7-navbar>
    <f7-list>
      <f7-list-item link="/login/" title="Đăng nhập" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/lich-thi-cong/" title="Lịch thi công" view="#main-view" panel-close></f7-list-item>
       <f7-list-item  title="Đăng xuất" view="#main-view" panel-close @click="logout()"> </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  methods: {
    logout()
    {
      this.$cookies.remove('key')
      this.$f7router.navigate('/login/')
    }
  }

}
</script>

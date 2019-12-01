<template>
  <f7-page>
    <f7-navbar >
      {{fullName}}
    </f7-navbar>
    <f7-list>
      <!-- <f7-list-item link="/login/" title="Đăng nhập" view="#main-view" panel-close></f7-list-item> -->
      <f7-list-item link="/lich-thi-cong/" title="Lịch thi công" view="#main-view" panel-close></f7-list-item>
     
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  data()
  {
    return {
      user: {}
    }
  },
  computed:
  {
     fullName(){
            return this.user.lastname +' '+ this.user.middlename +' '+ this.user.firstname
        }
  },
  methods: {
    logout()
    {
      this.$cookies.remove('key')
      this.$f7router.navigate('/login/')
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
  },
  mounted()
  {
    if(this.$cookies.isKey('key'))
    {
      this.api_user()
    }
    else
    {
      this.$f7router.navigate('/login/')
    }
  }

}
</script>

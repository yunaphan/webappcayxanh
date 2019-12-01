<template>
    <div>
        <f7-page login-screen>
        <f7-login-screen-title>Đăng nhập</f7-login-screen-title>
        <f7-list form>
          <f7-list-input
            label="Username"
            type="text"
            placeholder="Your username"
            :value="username"
            @input="username = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            label="Password"
            type="password"
            placeholder="Your password"
            :value="password"
            @input="password = $event.target.value"
          ></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-button @click="login">Đăng nhập</f7-list-button>
          <f7-block-footer>Phần mềm hỗ trợ quản lí thông tin cây xanh.<br>Phan Thị Thủy Tiên</f7-block-footer>
        </f7-list>
      </f7-page>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods: {
    login(){
      const self = this;
      const app = self.$f7;
      const router = self.$f7router;
      axios.post(this.$store.state.url_web +"login/",{
        "username": this.username,
        "password": this.password
      }).
      then((response)=>{
        // self.$session.start()
        // self.$session.set('key',response.data.key)
        self.$cookies.set("key",response.data.key,60 * 60 * 24 * 30); // 1 month after, expire

        // console.log(this.$router.back())
        // this.$router.push('/homepage')
        router.navigate('/homepage/')
        // console.log(App.$f7.router.push('/homepage'))
      })
      .catch(()=>{
         app.dialog.alert('Đăng nhập thất bại! Tài khoản hoặc mật khẩu đã sai', () => {
            
          });
      })
    }
  },
  mounted() {
    if(this.$cookies.isKey('key'))
    {
      this.$f7router.navigate('/homepage/')
    }
    console.log('login')
  },
  created() {
  // if(this.$session.has('key'))
  //   {
  //     this.$f7router.navigate('/homepage')
  //   }
  },
}
</script>
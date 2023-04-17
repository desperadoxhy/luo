<template>
  <div class="one">
    <div
        style="
        height: 300px;
        width: 350px;
        background-color: #fff;
        margin: 180px auto;
        padding: 5px;
        border-radius: 20px;
      "
    >
      <div style="display: inline-block; margin: 20px 40%"><h1>登录</h1></div>
      <el-input
          v-model="username"
          placeholder="账号"
          clearable
          style="width: 80%; margin-left: 9%; margin-bottom: 4%; display: flex"
      />
      <el-input
          v-model="password"
          type="password"
          placeholder="密码"
          show-password
          style="
          width: 80%;
          margin-left: 9%;
          margin-bottom: 4%;
          display: flex;
          margin-bottom: 10%;
        "
      />
      <div style="margin-left: 39%">
        <el-button type="primary" round @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',


  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      this.$axios
          .post("/token/", {
            username: this.username,
            password: this.password,
          })
          .catch(err => {
            this.$alert('您输入的账号密码错误或账号未激活，请联系管理员', '失败', {
              confirmButtonText: '确定',
              callback: action => {
                console.log(action)
              }
            });
          })
          .then((res) => {
            const storage = sessionStorage;
            console.log(res)
            const expireTime = Date.parse(res.headers.date) + 600000;
            storage.setItem("access.admin", res.data.access);
            storage.setItem("refresh.admin", res.data.refresh);
            storage.setItem("expiredTime.admin", expireTime);
            storage.setItem("username.admin", this.username);

            this.$axios
                .get("/userinfo/" + this.username + "/")
                .then(res => {
                  storage.setItem("is_superuser.admin", res.data.is_superuser);
                  storage.setItem("user_id.orbis", res.data.id);
                  if (res.data.is_superuser === true){
                    this.$router.push('/admin');
                  }else {
                    this.$router.push('/user')
                  }
                });
          });
    },
  },
};
</script>


<style>
.one {
  height: 100vh;
  background-image: linear-gradient(to bottom right, steelblue, white);
  /* background:url(""); */
  overflow: hidden;
  /*list-style-type: ;*/
}
.title{
  font-size:40px;
  margin-top:30px;
  margin-left:80px;
}

</style>

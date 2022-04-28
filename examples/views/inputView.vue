<template>
  <div>
    <h3>placeholder、type为password</h3>
    <hhh-input placeholder="请输入" type="password"></hhh-input>
    <h3>disabled</h3>
    <hhh-input placeholder="请输入" type="password" disabled></hhh-input>
    <h3>name属性</h3>
    <hhh-input placeholder="请输入" name="name属性"></hhh-input>
    <h3>v-model</h3>
    <hhh-input placeholder="请输入" v-model="username"></hhh-input>
    <h3>clearable </h3>
    <hhh-input placeholder="请输入" v-model="username" clearable></hhh-input>
    <h3>showPassword </h3>
    <hhh-input placeholder="请输入" v-model="username" type="password" show-password></hhh-input>

    <h3>原生实现v-model </h3>
    <hhh-input placeholder="请输入" :value="username" @input="handleinput"></hhh-input>
  </div>
</template>

<script>
import hhhInput from "../components/input";
export default {
  name: "inputView",
  components:{hhhInput},
  data(){
    return {
      username:'',
    }
  },
  methods:{
    handleinput(e){
      this.username=e
    }
  }
}
</script>

<style scoped>

</style>

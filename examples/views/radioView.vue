<template>
  <div>
    <hhh-radio label="1" name="11" v-model="gender">男</hhh-radio>
    <hhh-radio label="0" name="00" v-model="gender">女</hhh-radio>

    <hhh-radio label="1" name="11" v-model="gender"></hhh-radio>
    <hhh-radio label="0" name="00" v-model="gender"></hhh-radio>
  </div>
</template>
<script>
import hhhRadio from "../components/radio";
export default {
  name: "radioView",
  components:{hhhRadio},
  data(){
    return {
      gender:'0'
    }
  }
}
</script>
<style scoped></style>

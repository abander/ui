<template>
  <div>
    <hhh-radio label="0" v-model="gender"></hhh-radio>
    <hhh-radio label="1" v-model="gender"></hhh-radio>

    <hhh-radio-group  v-model="gender">
      <hhh-radio label="0"></hhh-radio>
      <hhh-radio label="1"></hhh-radio>
    </hhh-radio-group>
  </div>
</template>

<script>
import hhhRadioGroup from "../components/radio-group";
import hhhRadio from "../components/radio";
export default {
  name: "radioGroupView",
  components:{hhhRadioGroup,hhhRadio},
  data(){
    return {
      gender:'1'
    }
  }
}
</script>

<style scoped>

</style>

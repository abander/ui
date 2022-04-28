<template>
  <div>
    <hhh-checkbox name="00" v-model="active">单选</hhh-checkbox>
    <hhh-checkbox name="11" v-model="active" label="dan选"></hhh-checkbox>
  </div>
</template>

<script>
import hhhCheckbox from "../components/checkbox";

export default {
  name: "checkboxView",
  components:{hhhCheckbox},
  data(){
    return {
      active:''
    }
  }
}
</script>

<style scoped>

</style>

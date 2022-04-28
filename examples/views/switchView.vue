<template>
  <hhh-switch v-model="active"  active-color="#13ce66" inactive-color="#ff4949" name="username"></hhh-switch>
</template>

<script>
import hhhSwitch from "../components/switch";
export default {
  name: "switchView",
  components:{hhhSwitch},
  data(){
    return {
      active: false,
    }
  }
}
</script>

<style scoped>

</style>

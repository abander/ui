<template>
  <hhh-checkbox-group v-model="active">
    <hhh-checkbox name="11" label="复选1"></hhh-checkbox>
    <hhh-checkbox name="22" label="复选2"></hhh-checkbox>
    <hhh-checkbox name="33" label="复选3"></hhh-checkbox>
  </hhh-checkbox-group>
</template>

<script>
import hhhCheckboxGroup from "../components/checkbox-group";
import hhhCheckbox from "../components/checkbox";

export default {
  name: "checkboxGroupView",
  components:{hhhCheckboxGroup,hhhCheckbox},
  data(){
    return {
      active:['复选1','复选2','复选3'],
    }
  }
}
</script>

<style scoped>

</style>

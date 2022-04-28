<template>
  <hhh-form :model="model" label-width="100px">
    <hhh-form-item label="用户名">
      <hhh-input placeholder="请输入"></hhh-input>
    </hhh-form-item>
  </hhh-form>
</template>

<script>
import hhhForm from '../components/form'
import hhhFormItem from '../components/form-item'
import HhhInput from "../components/input";
export default {
  name: "formView",
  components:{HhhInput, hhhForm,hhhFormItem},
  data(){
    return {
      model: {},
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hhhRadioGroup",
  //不适合用$parent，有可能radio-group和radio存在子孙关系，所以用provide和inject
  provide(){
    return{
      RadioGroup:this
    }
  },
  props:{
    value: {
      type: String,
      default: ''
    }
   },
}
</script>

<style scoped>

</style>

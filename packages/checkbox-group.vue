<template>
  <div class="hhh-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hhhCheckboxGroup",
  provide(){
    return{
      CheckboxGroup:this
    }
  },
  props:{
    value: {
      type: Array,
      default: []
    }
  },
}
</script>

<style scoped>

</style>

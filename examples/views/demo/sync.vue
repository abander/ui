<template>
 <div>
   <div>demo---{{money}}</div>
   <button @click="fn">普通修改money</button>
 </div>
</template>

<script>
export default {
  name: "syncDemo",
  props:{
    visible: {
      type: Boolean,
      default: false
    },
    money: null
  },
  methods:{
    fn(){
      /*普通触发事件*/
      //this.$emit('aa',200)
      /*sync*/
      this.$emit('update:money',200)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="hhh-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hhhForm",
 props:{
   //用来收集数据
   model: {
     type: Object,
     required:true
   },
   //设置label宽度
   labelWidth:{
     type:String,
     default:'80px'
   }
 },
  //传下去，任何一个子组件可以接收到
  provide(){
    return{
      form:this
    }
  },

}
</script>

<style scoped>

</style>

<template>
  <div class="hhh-switch" :class="{'is-checked':value}" @click="handleSwitch">
<!--  自定义颜色也就是需要控制span的颜色  -->
    <span class="hhh-switch_core" ref="core">
      <span class="hhh-switch_button"></span>
    </span>
    <input type="checkbox" class="hhh-switch_input" :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: "hhhSwitch",
  props:{
    value:{
      type:Boolean,
      default:false
    },
    activeColor:{
      type:String,
      default:''
    },
    inactiveColor:{
      type:String,
      default:''
    },
    name:{
      type:String,
      default:''
    }
  },
  methods:{
    handleSwitch(e){
      this.$emit('input', !this.value)
      this.$nextTick(()=>{
       this.setColor()
     })
      //控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.value
    },
    setColor(){
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        let color = !this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
    //控制checkbox的值,input值同步value值
    this.$refs.input.checked = this.value
  },
}
</script>


<style lang="scss" scoped>
/*switch基础样式*/
.hhh-switch{
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .hhh-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .hhh-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  /*隐藏input标签*/
  .hhh-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
/*选中样式*/
.is-checked {
  .hhh-switch_core{
    border-color: #409eff;
    background-color: #409eff;
    .hhh-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>

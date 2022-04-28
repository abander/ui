<template>
<!-- 难点v-model：
 当我们操作多个input或者多个radio，而且希望两个单选框是一组，控制的是一个值，就要用到v-model
 -->
<!--  <label class="hhh-radio" :class="{'is-checked':label===value}">-->
  <label class="hhh-radio" :class="{'is-checked':label===model}">
    <span class="hhh-radio_input">
      <span class="hhh-radio_inner"></span>
<!--  input的value也就是我们的label值    -->
<!--  v-model其实需要绑定value值，但是我们不能直接修改父组件传过来的值，所以双向绑定自己的数据，
      这个数据需要是外界传进来的，而且还是要能修改的，所以用到了计算属性
-->
      <input type="radio" class="hhh-radio_original"
             :value="label"
             :name="name"
             v-model="model"
      >
    </span>
    <span class="hhh-radio_label">
      <slot></slot>
<!--  如果没有传内容，就把label当成内容   -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "hhhRadio",
  //radio-group用到inject
  //给default的作用是：如果不是radioGroup包裹的，RadioGroup就是空，如果是包裹的，就是传进来的东西
  inject:{
    RadioGroup:{
      default:''
    }
  },
  props:{
    label:{
      type:[String,Number,Boolean],
      default:''
    },
    value:{ //gender 0
      type:String,
      default:''
    },
    name:{
      type:String,
      default:''
    }
  },
  computed:{
    //这里需要改动，不一定是返回的是this.value，还应该有this.RadioGroup.value，设置同理
    model:{
      get(){
        //return this.value
        return this.isGroup ? this.RadioGroup.value : this.value //0
      },
      set(value){
        //触发父组件给当前组件注册的input事件
        //this.$emit('input',value)
        this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
      }
    },
    isGroup(){
      //判断radio是否被radio-group包裹,没包裹的是false，包裹的为true
      return !!this.RadioGroup
    }
  },
}
</script>
<style lang="scss" scoped>
//radio基础样式
.hhh-radio{
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .hhh-radio_input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hhh-radio_inner{
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .hhh-radio_original{
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .hhh-radio_label{
    font-size: 14px;
    padding-left: 10px;;
  }
}
// 选中的样式
.hhh-radio.is-checked{
  .hhh-radio_input{
    .hhh-radio_inner{
      border-color: #409eff;
      background-color: #409eff;
      &:after{
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .hhh-radio_label{
    color:#409eff;
  }
}
</style>

<template>
  <div class="hhh-input" :class="{'hhh-input_suffix':showSuffix}">
    <!--  普通接收props+ :placeholder="placeholder" -->
    <!--    <input :placeholder="placeholder"></input>-->

    <!--  $attrs接收： v-bind="$attrs" -->
    <input class="hhh-input_inner"
           v-bind="$attrs"
           :class="{'is-disabled': disabled}"
           :disabled="disabled"
           :type="showPassword ? (passwordVisible ? 'type' : 'password') : type"
           :value="value"
           @input="handleInput"
    ></input>
    <!--  先判断showPassword是否为真；
      如果为真则通过passwordVisible去判断type为text还是password，以此来控制隐藏和现实，
      为假type值就为传入的type值即可
    :type="showPassword ? (showPassword ? 'type' : 'password') : type"
   -->

<!-- 实现clearable功能和showPassword功能   -->
    <span class="hhh-input_suffix" v-if="showSuffix">
       <i class="hhh-icon-cancel" v-if="clearable && value" @click="clear"></i>
       <i class="hhh-icon-visible" v-if="showPassword" @click="handlePassword"></i>
 </span>

  </div>
</template>

<script>
export default {
  name: "hhhInput",
  props:{
   /* placeholder:{
      type:String,
      default:''
    },*/
    type:{
      type:String,
      default:''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable : {
      type: Boolean,
      default: false
    },
    showPassword : {
      type: Boolean,
      default: false
    },
  },
  computed:{
    showSuffix(){
      //只有这两个传了一个就显示小图标
      return this.clearable || this.showPassword
    }
  },
  data(){
    return {
      // 显示是否显示密码框
      passwordVisible: false
    }
  },
  methods:{
    handleInput(e){
      this.$emit('input', e.target.value)
    },
    clear(){
      this.$emit('input', '')
    },
    /*不可以直接修改type，自己定义一个类型去修改*/
    handlePassword(){
      this.passwordVisible = !this.passwordVisible
    },
  }
}
</script>
<style lang="scss" scoped>
/*input基础样式和disable样式*/
.hhh-input{
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hhh-input_inner{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,045,.355,1);
    width: 100%;

    &:focus{
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor:not-allowed;
    }
  }
}
/*input的clearable样式和showPassword样式*/
.hhh-input_suffix {
  .hhh-input_inner {
    padding-right: 30px;
  }
  .hhh-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645, .045, .355, 1);
    }
  }
}
</style>

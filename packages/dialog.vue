<template>
<!-- 正常操作dialog显示隐藏 -->
<!--self代表只有点击自己才触发  -->
<!--    <div class="hhh-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="hhh-dialog" :style="{width:width,marginTop:top}">
        <div class="hhh-dialog_header">
          <slot name="title">
            &lt;!&ndash;
            将span放到slot内，这样不仅可以定义title文本，还可以定义样式等
            利用具名插槽，如果父组件传了slot，则显示父组件插槽的title文本（子组件slot以及span标签会整体被父组件slot替换），
            不传slot，则显示传过来的title属性(span正常渲染)
            &ndash;&gt;
            <span class="hhh-dialog_title">{{title}}</span>
          </slot>
          <button class="hhh-dialog_headerbtn" @click="handleClose">
            <i class="hhh-icon-close"></i>
          </button>
        </div>
        <div class="hhh-dialog_body">
&lt;!&ndash;          <span>这是一段信息</span>&ndash;&gt;
          <slot></slot>
        </div>
        <div class="hhh-dialog_footer">
          &lt;!&ndash; 如果footer不传递内容，则不显示footer &ndash;&gt;
          <slot name="footer" v-if="$slots.footer"></slot>
        </div>
      </div>
    </div>-->
  <transition name="dialog-fade">
  <!-- sync dialog显示隐藏 -->
  <div class="hhh-dialog_wrapper" v-show="visible" @click.self="handleClose">
    <div class="hhh-dialog" :style="{width:width,marginTop:top}">
      <div class="hhh-dialog_header">
        <slot name="title">
          <!--
          将span放到slot内，这样不仅可以定义title文本，还可以定义样式等
          利用具名插槽，如果父组件传了slot，则显示父组件插槽的title文本（子组件slot以及span标签会整体被父组件slot替换），
          不传slot，则显示传过来的title属性(span正常渲染)
          -->
          <span class="hhh-dialog_title">{{title}}</span>
        </slot>
        <button class="hhh-dialog_headerbtn" @click="handleClose">
          <i class="hhh-icon-close"></i>
        </button>
      </div>
      <div class="hhh-dialog_body">
        <slot></slot>
      </div>
      <div class="hhh-dialog_footer">
        <!-- 如果footer不传递内容，则不显示footer -->
        <slot name="footer" v-if="$slots.footer"></slot>
      </div>
    </div>
  </div>
  </transition>
  </template>


<script>
import hhhButton from './button.vue'
export default {
  name: "hhhDialog",
  components:{ hhhButton },
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    },
  },
  methods:{
    //<!-- 正常操作dialog显示隐藏 -->
   /* handleClose(){
      //直接改为false，虽然弹窗关闭，但是会报错，不能直接修改父组件的值，需要通知父组件自己去改
      //this.visible=false
      this.$emit('close',false)
    }*/
    handleClose(){
      this.$emit('update:visible',false)
    }
  }
}
</script>

<style lang="scss" scoped>
/*dialog的基本样式*/
.hhh-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .hhh-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .hhh-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hhh-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .hhh-icon-close{
          color: #909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .hhh-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
/*dialog的动画效果*/
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

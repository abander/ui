<template>
  <button class="hhh-button" :class="[`hhh-button-${type}`,{
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled':disabled
  }]"
   @click="handleClick"
   :disabled="disabled"
  >
<!-- v-if="icon"： 在没有传入icon时隐藏<i>标签，只显示文字span标签 -->
    <i v-if="icon" :class="`hhh-icon-${icon}`"></i>
    <!-- span的左右就是可以控制slot的样式  -->
<!--v-if="$slots.default"的作用：用来判断是否传了插槽，如果没传入文本插槽，则不显示span内容  -->
<!-- 为什么是$slots.default。因为我们在任何一个组件中打印this.$slots，可以打印所有的插槽，只要传了插槽都会走一个默认default的插槽，没传则是空 -->
    <span v-if="$slots.default">
<!--凡是希望组件中内容可以灵活设置的地方，都需要用到slot插槽来自定义内容。-->
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "hhhButton",
  //封装一个通用的组件，会对props做一个约束，props进行校验
  props:{
    type:{
      type: String,
      default:'default'
    },
    plain:{
      type: Boolean,
      default: false
    },
    round:{
      type: Boolean,
      default: false
    },
    circle:{
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled:{
      type: Boolean,
      default: false
    },
  },
  created () {
    console.log(this.type,'type') //defalut primary success info danger warning
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }

}
</script>

<style lang="scss" scoped>
/*button组件基础样式：*/
.hhh-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

/*根据type设置不同类型的样式*/
.hhh-button-primary{
  color:#fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.hhh-button-success{
  color:#fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.hhh-button-info{
  color:#fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.hhh-button-warning{
  color:#fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.hhh-button-danger{
  color:#fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

/*朴素按钮样式*/
.hhh-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.hhh-button-primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.hhh-button-success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.hhh-button-info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.hhh-button-warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.hhh-button-danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

/*圆角按钮样式*/
.hhh-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}

/*是否为圆形按钮样式*/
.hhh-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}

/*icon样式*/
.hhh-button [class*=hhh-icon-]+span{
  margin-left: 5px;
}
/*disabled样式*/
.hhh-button.is-disabled {
  cursor: no-drop;
}
</style>

<template>
  <div>
    <div class="row">
      <h4>基础按钮</h4>
      <hhh-button>按钮</hhh-button>
      <hhh-button type="primary">primary按钮</hhh-button>
      <hhh-button type="success">success按钮</hhh-button>
      <hhh-button type="info">info按钮</hhh-button>
      <hhh-button type="danger">danger按钮</hhh-button>
      <hhh-button type="warning">warning按钮</hhh-button>
    </div>

    <div class="row">
      <h4>朴素按钮</h4>
      <hhh-button plain>按钮</hhh-button>
      <hhh-button plain type="primary">primary按钮</hhh-button>
      <hhh-button plain type="success">success按钮</hhh-button>
      <hhh-button plain type="info">info按钮</hhh-button>
      <hhh-button plain type="danger">danger按钮</hhh-button>
      <hhh-button plain type="warning">warning按钮</hhh-button>
    </div>

    <div class="row">
      <h4>圆角按钮</h4>
      <hhh-button round>按钮</hhh-button>
      <hhh-button round type="primary">primary按钮</hhh-button>
      <hhh-button round type="success">success按钮</hhh-button>
      <hhh-button round type="info">info按钮</hhh-button>
      <hhh-button round type="danger">danger按钮</hhh-button>
      <hhh-button round type="warning">warning按钮</hhh-button>
    </div>

    <div class="row">
      <h4>是否为圆形按钮</h4>
      <hhh-button circle>按钮</hhh-button>
      <hhh-button circle type="primary">primary按钮</hhh-button>
      <hhh-button circle type="success">success按钮</hhh-button>
      <hhh-button circle type="info">info按钮</hhh-button>
      <hhh-button circle type="danger">danger按钮</hhh-button>
      <hhh-button circle type="warning">warning按钮</hhh-button>
    </div>

    <div class="row">
      <h4>icon</h4>
      <hhh-button icon="caomei"></hhh-button>
      <hhh-button icon="a-li_huaban1" type="primary"></hhh-button>
      <hhh-button icon="baixiangguo" type="success">success按钮</hhh-button>
      <hhh-button icon="huolongguo" type="info">info按钮</hhh-button>
      <hhh-button icon="yangtao" type="danger">danger按钮</hhh-button>
      <hhh-button icon="shanzhu" type="warning">warning按钮</hhh-button>
    </div>

    <div class="row">
      <h4>点击事件</h4>
      <hhh-button icon="caomei" @click="getInfo">点击事件</hhh-button>
    </div>

    <div class="row">
      <h4>disabled</h4>
      <hhh-button disabled>按钮</hhh-button>
      <hhh-button disabled type="primary">primary按钮</hhh-button>
      <hhh-button disabled type="success">success按钮</hhh-button>
      <hhh-button disabled type="info">info按钮</hhh-button>
      <hhh-button disabled type="danger">danger按钮</hhh-button>
      <hhh-button disabled type="warning">warning按钮</hhh-button>
    </div>
  </div>
</template>

<script>
import hhhButton from '../components/button.vue'
export default {
  name: "btn",
  components:{ hhhButton },
  methods: {
    getInfo() {
      console.log('获取信息！！')//获取信息！！
    }
  }
  }
</script>

<style scoped>

</style>

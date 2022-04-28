<template>
 <div>
<!--   &lt;!&ndash; 正常操作dialog显示隐藏 &ndash;&gt;
   <hhh-button @click="visible=true">按钮</hhh-button>
   <hhh-dialog title="温馨提示" width="80%" top="200px" :visible="visible" @close="close">
     &lt;!&ndash; 使用v-slot指定插槽进行编辑 &ndash;&gt;
     <template v-slot:title>
       <h3 style="color:red">我是标题</h3>
     </template>
     &lt;!&ndash; body内容   &ndash;&gt;
     <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
     </ul>
     &lt;!&ndash; footer内容   &ndash;&gt;
     <template v-slot:footer>
       <hhh-button @click="visible=false">取消</hhh-button>
       <hhh-button type="primary" @click="visible=false">确定</hhh-button>
     </template>
   </hhh-dialog>-->
   <!-- sync dialog显示隐藏 -->
   <hhh-button @click="visible=true">按钮</hhh-button>
   <hhh-dialog title="温馨提示" width="80%" top="200px" :visible.sync="visible">
     <!-- 使用v-slot指定插槽进行编辑 -->
     <template v-slot:title>
       <h3 style="color:red">我是标题</h3>
     </template>
     <!-- body内容   -->
     <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
     </ul>
     <!-- footer内容   -->
     <template v-slot:footer>
       <hhh-button @click="visible=false">取消</hhh-button>
       <hhh-button type="primary" @click="visible=false">确定</hhh-button>
     </template>
   </hhh-dialog>
 </div>

<!--   测试sync demo
    普通传值
  <sync-demo :visible="visible" :money="money" @aa="editMoney1"></sync-demo>
   sync
   :money.sync="money"做的事情相当于定义了一个属性money（:money="money"），并注册了一个事件@aa （ @aa="editMoney1"）
  <sync-demo :money.sync="money"></sync-demo>-->
</template>

<script>
import hhhDialog from '../components/dialog.vue'
import hhhButton from '../components/button.vue'
import syncDemo from './demo/sync.vue'
export default {
  name: "dialogView",
  components:{syncDemo, hhhDialog ,hhhButton},
  data(){
    return {
      /*测试sync demo
      visible:false,
      money:100*/

      visible: false
    }
  },
  methods:{
   /*  <!-- 测试sync demo -->
   editMoney1(val){
      this.money=val
    }*/
    //<!-- 正常操作dialog显示隐藏 -->
  /*  close(val){
      this.visible=val
    }*/
  }
}
</script>

<style scoped>

</style>

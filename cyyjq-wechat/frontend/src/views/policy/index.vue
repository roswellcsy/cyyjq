<!--用于展示政策和政策咨询一级目录 -->

<template>
  <div id ='Policy'>
    <group>
      <!-- <cell title="政策信息" link="/policy/policyList"></cell> -->
      <cell title="证件办理" link="/policy/zjbl"></cell>
      <cell title="社会保障" link="/policy/shbz"></cell>
      <cell title="教育政策" link="/policy/jyzc"></cell>
      <cell title="民生事务" link="/policy/mssw"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'policy',
  components: { Group, Cell }
}
</script>

<style>

</style>
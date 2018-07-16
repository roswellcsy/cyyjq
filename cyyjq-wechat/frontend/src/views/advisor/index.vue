<!--用于咨询一级目录 -->

<template>
  <div id ='Advisor'>
    <group>
      <!-- <cell title="政策信息" link="/policy/policyList"></cell> -->
      <cell title="政策咨询" link="/policy/policyQa"></cell>
      <cell title="专业咨询" link="/proAdv/index"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'Advisor',
  components: { Group, Cell }
}
</script>

<style>

</style>
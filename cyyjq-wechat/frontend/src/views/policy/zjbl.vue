<!--用于展示证件办理相关政策清单 
后续改为模板形式
-->
<template>
  <div id ='zjbl'>
    <group>
        <!-- <cell title="政策信息" link="/policy/policyList"></cell> -->
        <cell title="居住证办理" link="/policy/jzz"></cell>
        <cell title="出入境办理" link="/policy/crj"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'zjbl',
  components: { Group, Cell }
}
</script>

<style>

</style>
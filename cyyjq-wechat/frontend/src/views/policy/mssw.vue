<!--民生事务
后续改为模板形式
-->
<template>
  <div id ='mssw'>
    <group>
        <!-- <cell title="政策信息" link="/policy/policyList"></cell> -->
        <cell title="《佛山市老年人优待证》申领指南" link="/policy/mssw1"></cell>
        <cell title="禅城区老年人和纳入社会化管理的企业退休人员健康管理服务指引" link="/policy/mssw2"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'mssw',
  components: { Group, Cell }
}
</script>

<style>

</style>
<!--用于教育政策相关政策清单 
后续改为模板形式
-->
<template>
  <div id ='jyzc'>
    <group>
        <!-- <cell title="政策信息" link="/policy/policyList"></cell> -->
        <cell title="入学相关政策" link="http://www.chancheng.gov.cn/jiaoyu/zcfg/201709/beb6d1f9902346fd8b9598fac47c4ebd.shtml"></cell>
        <cell title="学位安排规定" link="http://www.chancheng.gov.cn/jiaoyu/zcfg/201709/43e8dfa754174e748761b79602d78ba7.shtml"></cell>
        <cell title="学前教育相关政策" link="/policy/xqjy"></cell>
        <cell title="小学就读相关政策" link="/policy/xxjd"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'jyzc',
  components: { Group, Cell }
}
</script>

<style>

</style>
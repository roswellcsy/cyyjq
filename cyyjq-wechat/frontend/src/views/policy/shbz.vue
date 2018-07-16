<!--用于展示社会保障相关政策清单 
后续改为模板形式
-->
<template>
  <div id ='shbz'>
    <group>
        <!-- <cell title="政策信息" link="/policy/policyList"></cell> -->
        <cell title="城乡居民医保" link="/policy/cxjmyb"></cell>
        <cell title="城乡居民养老保险" link="/policy/cxjmylbx"></cell>
        <cell title="高龄老人津贴（老年人福利）" link="/policy/gllrjt"></cell>
        <cell title="残疾人福利相关政策" link="/policy/cjrfl"></cell>
        <cell title="城乡最低生活保障相关政策" link="/policy/cxzdshbz"></cell>
        <cell title="社会保障卡专栏" link="http://www.fshrss.gov.cn/ztzl/shbzkzl/"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'shbz',
  components: { Group, Cell }
}
</script>

<style>

</style>
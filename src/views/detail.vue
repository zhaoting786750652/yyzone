<!--
 * @Description: In User Settings Edit
 * @Author: zhaiyba@yonyou.com
 * @Date: 2019-08-07 14:54:39
 * @LastEditTime: 2019-08-23 17:25:04
 * @LastEditors: zhaiyba@yonyou.com
 -->
<template>
    <div class="page-detail">
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '',
        }
    },
    mounted(){
        this.title = this.$t('pageDetail.title');
    }
}
</script>

<style lang="less" scoped>
    .page-detail{
        text-align: center;
    }
</style>

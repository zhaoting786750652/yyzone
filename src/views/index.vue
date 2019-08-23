<!--
 * @Description: In User Settings Edit
 * @Author: zhaiyba@yonyou.com
 * @Date: 2019-08-07 14:51:19
 * @LastEditTime: 2019-08-23 17:31:38
 * @LastEditors: zhaiyba@yonyou.com
 -->
<template>
    <div class="page-index">
        <h3>{{$t('pageIndex.title')}}</h3>
        <app-card>
            <template slot="headerLeft">卡片</template>
            <template slot="headerRight">更多</template>
            <template slot="content">Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</template>
            <template slot="footer">
                <router-link :to="{name: 'Detail'}">{{$t('pageDetail.title')}}</router-link>
            </template>
        </app-card>
    </div>
</template>

<script>
const AppCard = () => import('@/components/common/card/index')

export default {
    data(){
        return {

        }
    },
    components: {
        AppCard,
    },
}
</script>

<style lang="less" scoped>
.page-index{
    margin: 20px 0;
    h3{
        text-align: center;
        font-weight: normal;
    }
    & /deep/ .content{
        padding: 0 20px;
        line-height: 2;
        color: @primary-color;
    }
    & /deep/ .footer{
        a{
            color: @link-color;
        }
    }
}
</style>




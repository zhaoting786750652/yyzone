<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 13:39:50
 * @LastEditTime: 2019-08-23 17:31:25
 * @LastEditors: zhaiyba@yonyou.com
 -->
<template>
    <div class="card-box">
        <div class="header" v-if="hasHeaderSlot">
            <slot name="headerBox">
                <div class="header-left" :class="hasHeaderCenterSlot ? '' : 'no-center' ">
                    <slot name="headerLeft"></slot>
                </div>
                <div class="header-center" v-if="hasHeaderCenterSlot">
                    <slot name="headerCenter"></slot>
                </div>
                <div class="header-right">
                    <slot name="headerRight"></slot>
                </div>
            </slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="footer" v-if="hasFooterSlot">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hasHeaderSlot: false,
            hasFooterSlot: false,
            hasHeaderCenterSlot: false,
        }
    },
    created() {
        if (this.$slots.headerLeft || this.$slots.headerRight || this.$slots.headerBox) {
            this.hasHeaderSlot = true
        }
        if (this.$slots.footer) {
            this.hasFooterSlot = true
        }
        if(! this.$slots.headerCenter){
            this.hasHeaderCenterSlot =false;
        }
    }
}
</script>

<style lang="less" scoped>
.card-box {
    .header {
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
        font-size: 26px;
        background: #ededed;
        border-bottom: 1px solid #e0e0e0;
        &>div {
            height: 80px;
            line-height: 80px;
            display: inline-block;
        }
        .header-left {
            max-width: 40%;
            color: #676767;
            font-weight: bold;
            &.no-center{
                max-width: 80%;
            }
        }
        .header-center {
            max-width: 50%;
        }
        .header-right {
            max-width: 20%;
            color: #b1b1b1;
        }
    }
    .footer {
        width: 100%;
        height: 180px;
        line-height: 180px;
        text-align: center;
    }
}
</style>

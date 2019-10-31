<template>
    <div>
        <el-container>
            <el-aside class="menu-contaier" v-bind:class="{launch:collapse,contract:!collapse}">
            <sied-menu :collapse="collapse" :menu-data="menuData"></sied-menu>
            </el-aside>
            <el-container>
                <el-header class="page-header">
                    <div class="hamburger-container" @click="collapseChange">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-Hamburger"></use>
                        </svg>
                    </div>
                    <breadcrumb></breadcrumb>
                </el-header>
                <el-main>
                    <transition name="fade" mode="out-in">
                    <router-view></router-view>
                    </transition>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Breadcrumb from "@/view/home/components/Breadcrumb.vue";
    import SiedMenu from "@/view/home/components/Menu.vue";

    @Component({
        components: {
            Breadcrumb,
            SiedMenu
        },
        mounted(this: any) {
            this.$service('/api/home/menu').then((data: any) => {
                this.menuData = data.data.data;

            })
        }
    })
    export default class Index extends Vue {
        collapse: Boolean = true
        menuData: Array<any> = []

        collapseChange() {
            this.collapse = !this.collapse
        }

    }
</script>

<style scoped>
    .el-container {
        height: 100vh;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #545c64;
        color: #333;
        text-align: center;
        line-height: 200px;
    }


    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .page-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .hamburger-container {
        font-size: 30px;
        margin-right: 10px;
        font-weight: bold;
    }

    .el-aside.menu-contaier {
        overflow: hidden;

    }

    .el-aside.menu-contaier.launch {
        width: 150px !important;
        transition: width .28s

    }

    .el-aside.menu-contaier.contract {
        width: 50px !important;
        transition: width .28s

    }

    .el-aside.menu-contaier.contract .el-menu {
        width: 40px;
    }

    .el-menu {
        border-right: none;
    }


</style>
<style>
    .el-breadcrumb__separator {
        margin: 0 9px;
        font-weight: 700;
        color: #ffffff;
    }
</style>
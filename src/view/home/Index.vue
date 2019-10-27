<template>
    <div>
        <el-container>
            <el-aside class="menu-contaier" v-bind:class="{launch:collapse,contract:!collapse}">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        :collapse="!collapse"
                        background-color="#545c64"
                        :router="true"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu v-for="(item,index) in menuData" :index="item.id" :key="item.id">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.text}}</span>
                        </template>
                        <el-menu-item :index="child.id" :key="child.id" v-for="(child,a) in item.child">
                            {{child.text}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header class="page-header">
                    <div class="hamburger-container" @click="collapseChange">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-Hamburger"></use>
                        </svg>
                    </div>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-header>
                <el-main>

                    <router-view></router-view></el-main>

            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component({
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
    .el-aside.menu-contaier.launch{
        width: 150px !important;
        transition: width .28s

    }
    .el-aside.menu-contaier.contract{
        width: 50px !important;
        transition: width .28s

    }
    .el-aside.menu-contaier.contract .el-menu{
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
<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

        <el-breadcrumb-item>{{firstName}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{secondName}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        created(this: any) {
  console.log(this.$router)
            this.firstName = this.$router.currentRoute.matched[0].meta.name;
            this.secondName = this.$router.currentRoute.matched[1].meta.name;

        },
        watch: {
            $route(this: any) {
             this.firstName = this.$router.currentRoute.matched[0].meta.name;
             this.secondName = this.$router.currentRoute.matched[1].meta.name;
            }
        }
    })
    export default class Breadcrumb extends Vue {
        firstName = ""
        secondName = ""

    }

</script>

<style scoped>

</style>
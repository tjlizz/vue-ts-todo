<template>
    <div class="table-container">
        <el-table>
            <component v-for="item in columnList" v-bind:is="name" prop="item.prop"
                       :label="item.label" :width="item.width"></component>
        </el-table>

    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Column from "@/model/Column";

    @Component({
        mounted() {
            this.$service('/user/userinfo')
        }
    })
    export default class BaseTable extends Vue {
        name: String = "el-table-column"
        data: any = []
        columnList: Array<Column> = [
            {prop: 'username', label: '用户名称'},
            {prop: 'userid', label: '用户ID'},
            {prop: 'date', label: '出生日期'},
            {prop: 'email', label: '邮箱'}]


    }
</script>
<style lang="scss" scoped>

</style>
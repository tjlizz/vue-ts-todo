<template>
    <div class="app">
        <base-table @selection-change="selectionChange" :table-parameter="setTable()"></base-table>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import BaseTable from "@/components/base/BaseTable.vue";
    import TableModel from "@/model/TableModel";

    @Component({
        components: {
            BaseTable
        }
    })
    export default class Index extends Vue {
        setTable() {
            let tablePar: TableModel = new TableModel();
            tablePar.DataQueryUrl = "/user/userinfo"

            tablePar.CloumnList = [
                {prop: 'username', label: '用户名称'},
                {prop: 'userid', label: '用户ID'},
                {prop: 'date', label: '出生日期'},
                {prop: 'email', label: '邮箱'}]

            return tablePar;
        }
        selectionChange(selection: any) {
            console.log(selection)

        }
    }
</script>

<style lang="scss">

</style>
<style lang="scss">
    ul,
    ol {
        list-style: none;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
    }
</style>

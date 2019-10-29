<template>
    <div class="container">
        <div class="page-header">
            <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="140px">
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>

        </div>
        <div class="page-body">

            <base-table @selection-change="selectionChange" :table-parameter="setTable()"></base-table>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import BaseTable from "@/components/base/BaseTable.vue";
    import TableModel from '@/model/TableModel';

    @Component({
        components: {
            BaseTable
        }
    })
    export default class Order extends Vue {
        formInline = {
            user: '',
            region: ''
        }
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
    .container {
        padding: 20px;
        > .page-header {
            padding: 20px;
            border: 1px solid #EBEBEB;
            border-radius: 6px;
            margin-bottom: 40px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        }

        > .page-body {
            border: 1px solid #EBEBEB;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
            padding: 20px;
        }
    }

</style>
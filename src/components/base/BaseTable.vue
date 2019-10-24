<template>
    <div class="table-container">
        <el-table :data="data" @selection-change="handleSelectionChange" :stripe="tableParameter.stripe">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <component v-for="item in tableParameter.CloumnList" v-bind:is="name" :prop="item.prop"
                       :label="item.label" :width="item.width"></component>
        </el-table>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import TableModel, {Column} from '@/model/TableModel';

    @Component({
        mounted(this: any): void {
            this.$service(this.tableParameter.DataQueryUrl).then((data: any) => {
                this.data = data.data.data;
            })
        }
    })
    export default class BaseTable extends Vue {
        @Prop() tableParameter: TableModel | undefined;
        private name: String = "el-table-column"
        private data: any = []
        multipleSelection: Array<String> = []

        handleSelectionChange(selection: any) {
            this.$emit('selection-change', selection)
        }

    }
</script>
<style lang="scss" scoped>

</style>
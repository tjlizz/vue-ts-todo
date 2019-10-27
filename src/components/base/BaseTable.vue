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
         <div class="pagination">
             <el-pagination @current-change="currentChange" @prev-click="currentChange" @next-click="currentChange"
                     background
                     layout="prev, pager, next"
                     :total="total">
             </el-pagination>
         </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import TableModel, {Column} from '@/model/TableModel';
    @Component({
        mounted(this: any): void {
            this.$service(this.tableParameter.DataQueryUrl).then((data: any) => {
                this.data = data.data.data;
                this.total=data.data.total;
            })
        }
    })
    export default class BaseTable extends Vue {
        @Prop() tableParameter: TableModel | undefined;
        private name: String = "el-table-column"
        private data: any = []
        private  pageIndex:number=1
        private  pageSize:number=10
        private total:number=0;
        multipleSelection: Array<String> = []

        currentChange(pageIndex:number){
            if(this.pageIndex!=pageIndex){
                console.log(pageIndex)
                this.pageIndex=pageIndex;

            }
        }
        handleSelectionChange(selection: any) {
            this.$emit('selection-change', selection)
        }

    }
</script>
<style lang="scss" scoped>

    .table-container{
        padding: 50px;
    }
    .pagination{
        float: right;
        margin: 20px    ;
    }
</style>
<template>
    <div class="app">
        <base-table></base-table>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import BaseTable from "@/components/base/BaseTable.vue";


    @Component({
        components: {
            BaseTable
        }
    })
    export default class Index extends Vue {

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

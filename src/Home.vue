<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        created() {

        }
    })
    export default class Home extends Vue {

    }
</script>


<style scoped>

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
        box-sizing: border-box;
    }

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>

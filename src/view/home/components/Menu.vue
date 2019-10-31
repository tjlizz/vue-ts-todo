<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="!collapse"
    background-color="#545c64"
    :router="true"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu v-for="(item,index) in menuData" :index="item.id" :key="item.id">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.text}}</span>
      </template>
      <el-menu-item :index="child.id" :key="child.id" v-for="(child,a) in item.child">{{child.text}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    collapse: Boolean,
    menuData: Array
  }
})
export default class Menu extends Vue {}
</script>

<style scoped>
</style>
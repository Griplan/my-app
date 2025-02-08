<template>
    <el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
         <div>
            <h1>我是Main</h1>
            <router-view></router-view>
        </div>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>


<template>
  <div class="hello">
    <el-card class="box-card">
      <el-form v-model="serchData" :inline="true"  class="demo-form-inline">
        <el-form-item label="用例名称">
          <el-input v-model="serchData.caseName" placeholder="请输入用例名称"></el-input>
        </el-form-item>
        <el-form-item label="用例描述">
          <el-input v-model="serchData.caseDesc" placeholder="请输入用例描述"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSelect">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onCreate">新建</el-button>
        </el-form-item>
        </el-form>
        <el-table align="center" :data="tableData" border="" style="width: 1001px">
          <el-table-column prop="id" label="ID" width="60px"/>
          <el-table-column prop="caseName" label="用例名称" width="300px"/>
          <el-table-column prop="outTime" label="超时时间（秒）" width="200px"/>
          <el-table-column prop="caseDesc" label="用例描述" width="300px"/>
          <el-table-column prop="createTime" label="创建时间" width="140px"/>
        </el-table>
      </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/testCase'
import ContextMenu from './ContextMenu.vue'
export default {
  name: 'TestCase',
  components: {
    ContextMenu
  },
  props: {
    theme: String
  },
  data () {
    return {
      menuOffset: {
        offsetLeft: 0,
        offsetWidth: 0,
        clientX: 0,
        clientY: 0
      },
      serchData: {
        caseName: '',
        caseDesc: ''
      },
      tableData: []
    }
  },
  methods: {
    onSelect () {
      getList(this.serchData).then(res => {
        console.log(res)
        this.tableData = res
      }).catch((err) => {
        console.log(err)
      })
    },
    onCreate () {

    },
    openMenu (e, data) {
      console.log(data)
      this.menuOffset.offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      this.menuOffset.offsetWidth = this.$el.offsetWidth // container width
      this.menuOffset.clientX = e.clientX
      this.menuOffset.clientY = e.clientY
      this.currentData = data
    },
    handleClick (vm, event) {
      alert(`「${vm.$slots.default[0].text}」被点击啦！`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-contextmenu {
    position: absolute;
    padding: 5px 0;
    margin: 0;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    -webkit-box-shadow: 2px 2px 8px 0 hsla(0, 0%, 58.8%, .2);
    box-shadow: 2px 2px 8px 0 hsla(0, 0%, 58.8%, .2);
    list-style: none;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    z-index: 2800;
    -webkit-tap-highlight-color: transparent
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

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
          <el-button type="primary" @click="dialogFormVisible = true">新建</el-button>
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
      <el-dialog title="新建页面" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用例名称" :label-width="formLabelWidth">
            <el-input v-model="form.caseName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="超时时间" :label-width="formLabelWidth">
            <el-input v-model="form.outTime" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用例描述" :label-width="formLabelWidth">
            <el-input v-model="form.caseDesc" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="创建时间" :label-width="formLabelWidth">
            <el-input v-model="form.createTime" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onCreate">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import { getList, addCase } from '@/api/testCase'
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
      tableData: [],
      dialogFormVisible: false,
      form: {
        caseName: '',
        outTime: '',
        caseDesc: '',
        createTime: ''
      },
      formLabelWidth: '80px'
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
      addCase(this.form).then(res => {
        this.dialogFormVisible = false
        this.$message({
          message: '保存成功',
          type: 'success'
        })
      })
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

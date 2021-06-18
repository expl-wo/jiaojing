<template>
  <div id="user">
    <Head></Head>
    <div>
      <div class="header">
        <div class="searchBox">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
              <Input
                v-model="formInline.value1"
                placeholder="姓名"
                style="width: 180px"
              />
            </FormItem>
            <FormItem prop="password">
              <Input
                v-model="formInline.value1"
                placeholder="身份证"
                style="width: 250px"
              />
            </FormItem>
            <FormItem prop="password">
              <Input
                v-model="formInline.value1"
                placeholder="联系方式"
                style="width: 200px"
              />
            </FormItem>
            <FormItem prop="password">
              <Select v-model="formInline.value1" style="width: 100px" placeholder='骑手类型'>
                <Option
                  v-for="item in personTypeList"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
            <FormItem prop="password">
              <Input
                v-model="formInline.value1"
                placeholder="平台名称"
                style="width: 180px"
              />
            </FormItem>
            <FormItem prop="password">
              <Select v-model="formInline.value1" style="width: 120px" placeholder='码类型'>
                <Option
                  v-for="item in codeTypeList"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
            <FormItem prop="password">
             <Select v-model="formInline.value1" style="width: 120px" placeholder='宣教时间'>
                <Option
                  v-for="item in educationTimeList"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
            <FormItem prop="password">
              <Select v-model="formInline.value1" style="width: 120px" placeholder='宣教积分'>
                <Option
                  v-for="item in educationGradeList"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')"
                >查询</Button
              >
              <Button type="primary" @click="handleReset('formInline')"
                >重置</Button
              >
              <Button type="primary" @click="handleExport('formInline')"
                >导出</Button
              >
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
    <section>
      <div class="tableBox">
        <Table :columns="columns1" :data="data1" height="664"></Table>
      </div>
    </section>
    <footer>
      <div class="footerWrap">
        <Page :total="100" show-sizer />
      </div>
    </footer>
  </div>
</template>
<script>
import Head from "../header.vue"
import tableConfig from "./tableConfig.js"
export default {
  components: {
    Head,
  },
  mounted() {
    console.log(tableConfig.tableDataList, tableConfig.tableHeadConfig)
  },
  data() {
    let tableCon = tableConfig(this)
    return {
      columns1: tableCon.tableHeadConfig,
      data1: tableCon.tableDataList,
      //输入框的值
      value: "",
      //骑手类型的值
      model1:'',
      model2:'',
      personTypeList: [
        {
          value: "0",
          label: "骑手类型",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
      ],
      codeTypeList:[
        {
          value: "New York",
          label: "码类型",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
      ],
      educationTimeList:[],
      educationGradeList:[],
      formInline: {
        value1: "",
        value: "",
      },
      ruleInline: {
        value1: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        value: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    }
  },

  methods: {
    handleSubmit(params) {
      console.log(params,'查询参数')
      this.$refs[params].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!")
        } else {
          this.$Message.error("Fail!")
        }
      })
      //查询之后调用重置方法，清空输入框数据
      this.handleReset()
    },
    //重置方法，清空输入框的数据
    handleReset(name) {
      this.formInline.value = ""
      this.formInline.value1 = ""
      console.log("表格选项", name)
    },
    //导出方法
    handleExport(name){
      console.log("表格选项", name)
    },
    // showEducation(index){
    //   console.log('表格的信息',index)
    // },

    //展示详情弹窗
    showDetail(index){
      console.log('表格的信息',index)
    }
  },
}
</script>

<style lang="less" scoped src='@/assets/style/user.less'>
</style>
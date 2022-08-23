<template>
  <a-card title="表格">
    <a-card title="Table 表格">
      <a-table :columns="columns" :data-source="data">
        <template #name="{ text }">
          <a>{{ text }}</a>
        </template>
        <template #customTitle>
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
        <template #tags="{ text: tags }">
          <span>
            <a-tag
              v-for="tag in tags"
              :key="tag"
              :color="
                tag === 'loser'
                  ? 'volcano'
                  : tag.length > 5
                  ? 'geekblue'
                  : 'green'
              "
            >
              {{ tag.toUpperCase() }}</a-tag
            >
          </span>
        </template>
        <template #action="{ record }">
          <span>
            <a>Invite - {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical">
              <a class="ant-dropdown-link">
                More actions
                <down-outlined />
              </a>
            </a-divider>
          </span>
        </template>
      </a-table>
    </a-card>
    <a-card title="远程加载数据">
      <a-table
        :columns="columns2"
        :row-key="(record) => record.login.uuid"
        :data-source="dataSource"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template #name="{ text }">{{ text.first }} {{ text.last }}</template>
      </a-table>
    </a-card>
    <a-card title="带线框">
      <a-table :columns="columns" :data-source="data" bordered>
        <template #name="{ text }">
          <a>{{ text }}</a>
        </template>
        <template #customTitle>Header</template>
        <template #footer>Footer</template>
      </a-table>
    </a-card>
  </a-card>
</template>

<script>
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue'
import { usePagination } from 'vue-request'
import { computed } from 'vue'
const columns = [
  // 构架对象属性(列)
  {
    dataIndex: 'name', // 对象表(数组)的关键字（索引）Official define: 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法
    align: 'center', // 列对齐方式
    key: 'name',
    colSpan: 1, // 合并表头（横跨列数 0不渲染）
    slots: {
      // TODO:
      //使用 columns 时，可以通过该属性配置支持 slot 的属性，如 slots: { filterIcon: 'XXX'}
      title: 'customTitle', // 使 title 属性支持 slot 并将插槽命名为 customTitle
      customRender: 'name', // 创建 name 作用域插槽，挂载用户数据
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true, // 根据单元格宽度自动省略内容
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    slots: {
      customRender: 'tags',
    },
  },
  {
    title: 'Action',
    key: 'action',
    slots: {
      customRender: 'action',
    },
  },
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const columns2 = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    slots: {
      // 生成复杂数据的渲染函数，
      // 参数分别为当前行的值，当前行数据，行索引，
      // @return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并
      // Function({text, record, index}){}|v-slot
      customRender: 'name',
    },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filtered: false, // 控制删选图标是否高亮
    filters: [
      {
        text: 'Male',
        value: 'male',
      },
      {
        text: 'Female',
        value: 'female',
      },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]

const queryData = (params) => {
  return `https://randomuser.me/api?noinfo&${new URLSearchParams(params)}`
}

export default {
  setup() {
    const {
      data: dataSource,
      run,
      loading,
      current,
      pageSize,
    } = usePagination(queryData, {
      formatResult: (res) => res.results,
      pagination: {
        currentKey: 'page',
        pageSizeKey: 'results',
      },
    })
    // console.log(dataSource)
    /* ----- demo -----------
    dataSource = [
      {
        gender: 'female',
        name: { first: 'Elif', last: 'kececi', title: 'Mrs' },
        email: 'elif.kececi@example.com',
        login: {
          md5: '228e08e0f08c9ef73e7f3b6aa37fa2c2',
          password: 'girlies',
          salt: 'JWID9Dzd',
          sha1: '73931538cb52d7519b3812b36961d76d0328e1e1',
          sha256:
            '15a50e182e4fad7c328120b5e20466431de1d13e7f7deb05486c5392bb20cb0d',
          username: 'happycat352',
          uuid: '58881e40-59c8-47f7-a166-247f213abc12',
        },
        ...
      },
      ...
    ]
    ---------------------------- */

    // 分页信息
    const pagination = computed(() => ({
      total: 200,
      current: current.value,
      pageSize: pageSize.value,
    }))

    // 分页对象，筛选对象，排序对象，当前数据对象
    const handleTableChange = (pag, filters, sorter) => {
      run({
        results: pag.pageSize,
        page: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      })
    }

    return {
      data,
      columns,

      dataSource,
      pagination,
      loading,
      columns2,
      handleTableChange,
    }
  },
  components: {
    SmileOutlined,
    DownOutlined,
  },
}
</script>

<style></style>


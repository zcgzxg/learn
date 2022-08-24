<template>
  <a-card title="Table 3 表格 3">
    <a-card title="可编辑行 可展开">
      <a-table :columns="columns" :data-source="dataSource" bordered>
        <template #expandedRowRender="{ record }">
          <p style="margin: 0">
            {{ record.description }}
          </p>
        </template>
        <!-- #[col] []方括号表示动态的值， 这里是使用 v-for 循环处理了三个插槽 -->
        <template
          v-for="col in ['name', 'age', 'address']"
          #[col]="{ text, record }"
          :key="col"
        >
          <!-- text 当前单元格的值， record 当前记录（行） -->
          <div>
            <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][col]"
            />
            <template v-else>{{ text }}</template>
          </div>
        </template>
        <template #operation="{ record }">
          <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
              <a @click="save(record.key)">Save</a>
              <a-popconfirm
                title="Sure to cancel?"
                @confirm="cancel(record.key)"
              >
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="edit(record.key)">Edit</a>
            </span>
          </div>
        </template>
      </a-table>
    </a-card>
    <a-card title="树形数据展示">
      <a-table
        :columns="columnsTree"
        :data-source="dataTree"
        :row-selection="rowSelection"
      />
    </a-card>
    <a-card title="固定头和列">
      <a-table
        :columns="columnsAffix"
        :data-source="dataAffix"
        :scroll="{ x: 1500, y: 300 }"
      >
        <template #action>
          <a>action</a>
        </template>
      </a-table>
    </a-card>
  </a-card>
</template>

<script>
import { cloneDeep } from 'lodash-es'
import { defineComponent, reactive, ref } from 'vue'
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    slots: {
      customRender: 'name',
    },
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    slots: {
      customRender: 'age',
    },
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    slots: {
      customRender: 'address',
    },
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    slots: {
      customRender: 'operation',
    },
  },
]
const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    description: '表格内容较多补鞥呢一次性完全展示时，使用展开功能',
  })
}
//-------------------------
const columnsTree = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
]
const dataTree = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows)
  },
}

//affix--------------------
const columnsAffix = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    slots: {
      customRender: 'action',
    },
  },
]
const dataAffix = []
for (let i = 0; i < 100; i++) {
  dataAffix.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  })
}

export default {
  setup() {
    const dataSource = ref(data)
    const editableData = reactive({})

    const edit = (key) => {
      editableData[key] = cloneDeep(
        dataSource.value.filter((item) => key === item.key)[0]
      )
    }

    const save = (key) => {
      Object.assign(
        dataSource.value.filter((item) => key === item.key)[0],
        editableData[key]
      )
      delete editableData[key]
    }
    const cancel = (key) => {
      delete editableData[key]
    }
    return {
      dataSource,
      columns,
      editingKey: '',
      editableData,
      edit,
      save,
      cancel,
      dataTree,
      columnsTree,
      rowSelection,
      //Affix---
      dataAffix,
      columnsAffix,
    }
  },
}
</script>

<style></style>


<template>
  <a-card title="表格2">
    <a-card title="行/列合并">
      <a-table :columns="columns" :data-source="data" bordered>
        <template #name="{ text }">
          <a>{{ text }}</a>
        </template>
      </a-table>
    </a-card>
    <a-card title="自定义搜索">
      <a-table :columns="columnsSearch" :data-source="dataSearch">
        <template
          #filterDropdown="{
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            column,
          }"
        >
          <div style="padding: 8px">
            <a-input
              ref="searchInput"
              :placeholder="`Search ${column.dataIndex}`"
              :value="selectedKeys[0]"
              style="width: 188px; margin-bottom: 8px; display: block"
              @change="
                (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
              "
              @pressEnter="
                handleSearch(selectedKeys, confirm, column, dataIndex)
              "
            />
            <a-button
              type="primary"
              size="small"
              style="width: 90px; margin-right: 8px"
              @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
            >
              <template #icon><SearchOutlined />Search</template>
            </a-button>
            <a-button
              size="small"
              style="width: 90px"
              @click="handleReset(clearFilters)"
            >
              Reset
            </a-button>
          </div>
        </template>
        <template #filterIcon="filtered">
          <search-outlined
            :style="{ color: filtered ? '#108ee9' : undefined }"
          />
        </template>
        <template #customRender="{ text, column }">
          <span v-if="searchText && searchedColumn === column.dataIndex">
            <template
              v-for="(fragment, i) in text
                .toString()
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
            >
              <!-- TODO: on this -->
              <mark
                v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                class="highlight"
                :key="i"
              >
                {{ fragment }}
              </mark>
              <template v-else>{{ fragment }}</template>
            </template>
          </span>
          <template v-else>
            {{ text }}
          </template>
        </template>
      </a-table>
    </a-card>
  </a-card>
</template>

<script>
import { h } from 'vue'
// Table Col/RowSpan---------------------------------------------------------
const renderContent = ({ text, index }) => {
  const obj = {
    children: text,
    props: {},
  }

  if (index === 4) {
    // 隐藏第五行的内容避免排版错误
    obj.props.colSpan = 0
  }
  return obj
}

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
]
// Table Col/RowSpan End-----------------------------------------------------

// Table Search--------------------------------------------------------------
import { SearchOutlined } from '@ant-design/icons-vue'
import { reactive, ref, toRefs } from 'vue'
const dataSearch = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]
// Table Search End----------------------------------------------------------

export default {
  setup() {
    // Table Col/RowSpan---------------------------------------------------------
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        customRender: ({ text, index }) => {
          if (index < 4) {
            // TODO: h 渲染函数返回的内容？
            return h(
              'a',
              {
                href: 'javascript:;',
              },
              text
            )
          }

          return {
            children: h('a', { href: 'javascript:;' }, text),
            props: {
              colSpan: 5,
            },
          }
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        customRender: renderContent,
      },
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        customRender: ({ text, index }) => {
          const obj = {
            children: text,
            props: {},
          }

          if (index === 2) {
            obj.props.rowSpan = 2
          }

          if (index === 3) {
            obj.props.rowSpan = 0
          }

          if (index === 4) {
            obj.props.colSpan = 0
          }

          return obj
        },
      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        customRender: renderContent,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        customRender: renderContent,
      },
    ]
    // Table Col/RowSpan End-----------------------------------------------------

    // Table Search--------------------------------------------------------------
    const state = reactive({
      searchText: '',
      searchedColumn: '',
    })
    const searchInput = ref()
    const columnsSearch = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        slots: {
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
          customRender: 'customRender',
        },
        onFilter: (value, record) =>
          record.name.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              console.log(searchInput.value)
              searchInput.value.focus()
            }, 100)
          }
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        slots: {
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
          customRender: 'customRender',
        },
        onFilter: (value, record) =>
          record.age.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            }, 100)
          }
        },
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        slots: {
          filterDropdown: 'filterDropdown',
          filterIcon: 'filterIcon',
          customRender: 'customRender',
        },
        onFilter: (value, record) =>
          record.address.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus()
            }, 100)
          }
        },
      },
    ]

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm()
      state.searchText = selectedKeys[0]
      state.searchedColumn = dataIndex
    }

    const handleReset = (clearFilters) => {
      clearFilters()
      state.searchText = ''
    }
    // Table Search End----------------------------------------------------------

    return {
      // Table Col/RowSpan-----------
      data,
      columns,
      // Table Col/RowSpan End-------
      columnsSearch,
      dataSearch,
      handleSearch,
      handleReset,
      searchInput,
      ...toRefs(state),
    }
  },
  components: {
    SearchOutlined,
  },
}
</script>

<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>


<template>
  <a-card title="Tree 树形控件">
    <a-card title="拖拽事件">
      <a-tree
        v-model:expandeKeys="expandedKeys"
        draggable
        :tree-data="gData"
        @dragenter="onDragEnter"
        @drop="onDrop"
      ></a-tree>
    </a-card>
  </a-card>
</template>

<script>
import { ref } from 'vue'
const x = 3
const y = 2
const z = 1
const genData = []

// 生成假数据
const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0'
  const tns = _tns || genData
  const children = []

  for (let i = 0; i < x; i++) {
    const key = `${preKey} - ${i}`
    tns.push({
      title: key,
      key,
    })

    if (i < y) {
      children.push(key)
    }
  }

  if (_level < 0) {
    return tns
  }

  const level = _level - 1
  children.forEach((key, index) => {
    tns[index].children = []
    return generateData(level, key, tns[index].children)
  })
}
generateData(z)

export default {
  setup() {
    const expandedKeys = ref(['0-0', '0-0-0', '0-0-0-0']) // 默认展开
    const gData = ref(genData)

    const onDragEnter = (info) => {
      // 拖入事件
      console.log('onDragEnter', info) // expandedKeys 需要展开时
      // expandedKeys.value = info.expandedKeys
    }

    const onDrop = (info) => {
      // 拖放后触发
      console.log('onDrop', info)
      const dropKey = info.node.eventKey // 拖拽目标对象的key
      const dragKey = info.dragNode.eventKey // 拖拽对象的key
      const dropPos = info.node.pos.split('-') // 拖拽入位置
      const dropPosition = // dropPosition 拖拽到位置
        info.dropPosition - Number(dropPos[dropPos.length - 1])

      const loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr)
          }

          if (item.children) {
            return loop(item.children, key, callback)
          }
        })
      }
      // Find dragObject
      const data = [...gData.value]

      let dragObj = {}
      loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1)
        dragObj = item
      })

      if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, (item) => {
          item.children = item.children || []
          item.children.push(dragObj)
        })
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        loop(data, dropKey, (item) => {
          item.children = item.children || [] // whrer to insert

          item.children.unshift(dragObj)
        })
      } else {
        let ar = []
        let i = 0
        loop(data, dropKey, (item, index, arr) => {
          ar = arr
          i = index
        })
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj)
        } else {
          ar.splice(i + 1, 0, dragObj)
        }
      }
      gData.value = data
    }
    return {
      expandedKeys,
      gData,
      onDragEnter,
      onDrop,
    }
  },
}
</script>

<style></style>


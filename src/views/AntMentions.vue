<template>
  <div>
    <a-mentions style="width:300px" autofocus v-model:value="value" @select="onSelect">
      <a-mentions-option value="afc163">afc163</a-mentions-option>
      <a-mentions-option value="zombieJ">zombieJ</a-mentions-option>
      <a-mentions-option value="yesmeck">yesmeck</a-mentions-option>
    </a-mentions>
    <a-mentions
      placeholder="输入‘@’或‘#’开始查找"
      :prefix="['@', '#']"
      v-model:value="value2"
      :loading="loading"
      @search="onSearch"
      placement="top"
      style="width:300px"
    >
      <a-mentions-option v-for="{login, avatar_url: avatar} in users" :key="login" :value="login">
        <img :src="avatar" :alt="login" style="width:20px;margin-right:8px" />
        <span>{{login}}</span>
      </a-mentions-option>
    </a-mentions>
    <a-mentions disabled placeholder="disabled禁用" style="width:300px">
      <a-mentions-option value="123">@123</a-mentions-option>
      <a-mentions-option value="456">@456</a-mentions-option>
    </a-mentions>
    <a-mentions readonly placeholder="readonly只读" style="width:300px">
      <a-mentions-option value="123">@123</a-mentions-option>
      <a-mentions-option value="456">@456</a-mentions-option>
    </a-mentions>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { debounce } from "lodash-es";
// debounce 防抖动函数，该函数会从上一次被调用后，延时 wait 毫秒后调用 func 方法
// func(Function):要防抖动的函数
// [wait=0](Number):需要延迟的毫秒数
// [options](Object):选项对象
// [options.leading = false](boolean):指定在延迟开始前调用
// [option.maxWait](number):设置 func 允许被延迟的最大值
// [options.trailing = true](boolean):指定在延迟结束后调用
// return
// (Function):返回新的 debounced(防抖动) 函数
export default defineComponent({
  setup() {
    const value2 = ref("");
    const loading = ref(false);
    const users = ref([]);
    const search = ref("");
    const loadGithubUsers = debounce(key => {
      if (!key) {
        user.values = [];
        return;
      }

      fetch(`https://api.github.com/search/users?q=${key}`)
        .then(res => {
          // console.log("res.json", res.json);
          return res.json();
        })
        .then(({ items = [] }) => {
          if (search.value != key) return;
          console.log(items.slice(0, 5));
          users.value = items.slice(0, 10); // 截取前十个
          loading.value = false; // 关闭搜索图标
        });
    }, 800);

    const onSearch = searchValue => {
      search.value = searchValue;
      loading.value = !!searchValue; // !! 转为布尔值
      console.log(!!searchValue);
      users.value = [];
      console.log("Search:", searchValue);
      loadGithubUsers(searchValue); // 防抖动访问github
    };

    const value = ref("@afc163");
    watch(value, () => {
      console.log("value", value);
    });

    const onSelect = option => {
      console.log("select", option);
    };

    return {
      value2,
      loading,
      users,
      loadGithubUsers,
      onSearch,
      // ------
      value,
      onSelect
    };
  }
});
</script>
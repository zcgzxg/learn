<template>
  <a-upload
    v-model:file-list="fileList"
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    action="/upload"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <!-- TODO:上传文件服务器地址问题 -->
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>
<script>
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineComponent, ref } from "vue";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default defineComponent({
  components: {
    LoadingOutlined,
    PlusOutlined
  },

  setup() {
    const fileList = ref([]);
    const loading = ref(false);
    const imageUrl = ref("");

    const handleChange = info => {
      console.log("info", info);
      if (info.file.status === "uploading") {
        loading.value = true;
        console.log("1");
        return;
      }

      if (info.file.status === "done") {
        console.log("2");
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, base64Url => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
        console.log("3");
      }

      if (info.file.status === "error") {
        loading.value = false;
        console.log("4");
        message.error("upload error");
      }
    };

    const beforeUpload = file => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";

      if (!isJpgOrPng) {
        message.error("You can only upload JPG file!");
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }

      return isJpgOrPng && isLt2M;
    };

    return {
      fileList,
      loading,
      imageUrl,
      handleChange,
      beforeUpload
    };
  }
});
</script>
<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
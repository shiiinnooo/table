<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="information-tab"
                data-bs-toggle="tab"
                data-bs-target="#information"
                type="button"
                role="tab"
                aria-controls="information"
                aria-selected="true"
              >
                產品資訊
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="image-tab"
                data-bs-toggle="tab"
                data-bs-target="#image"
                type="button"
                role="tab"
                aria-controls="image"
                aria-selected="false"
              >
                產品圖片
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="content-tab"
                data-bs-toggle="tab"
                data-bs-target="#content"
                type="button"
                role="tab"
                aria-controls="content"
                aria-selected="false"
              >
                產品內容
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="information"
              role="tabpanel"
              aria-labelledby="information-tab"
            >
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row mt-1">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <!-- <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  /> -->
                  <select class="form-select" id="category" v-model="tempProduct.category">
                    <option value="" disabled>請選擇分類</option>
                    <option value="玻璃杯">玻璃杯</option>
                    <option value="馬克杯">馬克杯</option>
                    <option value="碗">碗</option>
                    <option value="盤子">盤子</option>
                    <option value="其他餐具">其他餐具</option>
                    <option value="鍋具">鍋具</option>
                    <option value="砧板">砧板</option>
                    <option value="托盤">托盤</option>
                    <option value="香氛系列">香氛系列</option>
                    <option value="TAbLe選物">TAbLe選物</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <select class="form-select" id="unit" v-model="tempProduct.unit">
                    <option value="" disabled>請選擇單位</option>
                    <option value="piece">個</option>
                    <option value="group">組</option>
                  </select>
                </div>
              </div>

              <div class="row mt-1">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control mt-1"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>
              <hr />
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="image"
              role="tabpanel"
              aria-labelledby="image-tab"
            >
              <div class="form-group">
                <label for="imageUrl">圖片連結</label>
                <div class="input-group mb-2">
                  <input
                    type="text"
                    id="imageUrl"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempImage"
                  />
                  <button
                    class="btn btn-outline-secondary rounded-end"
                    type="button"
                    @click="uploadImage(tempImage)"
                  >
                    上傳連結
                  </button>
                </div>
              </div>
              <div class="form-group">
                <label for="file">上傳檔案</label>
                <div class="input-group mb-3">
                  <input
                    type="file"
                    id="file"
                    class="form-control rounded-start"
                    placeholder="請上傳圖片檔案"
                  />
                  <button
                    class="btn btn-outline-secondary rounded-end"
                    type="button"
                    @click="uploadFile()"
                  >
                    上傳檔案
                  </button>
                </div>
              </div>
              <div class="d-flex flex-wrap">
                <div class="position-relative"
                  v-for="(item, key) in tempProduct.imagesUrl"
                  :key="key"
                  style="width: 31.3%; margin: 1%; background-color: #f5f5f5;"
                  @mouseover="iconShow = key" @mouseleave="iconShow = null"
                >
                  <span v-if="iconShow == key"
                    class="position-absolute material-icons remove_circle_outline"
                    style="top: 2px; left: 2px;"
                    @click="removeImage(item, key)">
                  </span>
                  <span v-if="iconShow == key"
                    class="position-absolute
                    material-icons material-icons-round star_border"
                    style="top: 2px; right: 2px;"
                    @click="mainImageSet(item)">
                  </span>
                  <img
                    :src="item"
                    class="w-100"
                    height="140"
                    style="object-fit: contain"
                  />
                  <span v-if="tempProduct.imageUrl === item"
                    class="position-absolute
                    material-icons material-icons-round main_image"
                    style="top: 2px; right: 2px;">
                    star
                  </span>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="content"
              role="tabpanel"
              aria-labelledby="content-tab"
            >
              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="form-group mt-1">
                <label for="content">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary"
          @click="$emit('update-product', tempProduct)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    product: {
      type: Object,
      default() {
        return {
          imagesUrl: [],
        };
      },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update-product'],
  data() {
    return {
      productModal: '',
      tempProduct: {},
      tempImage: '',
      iconShow: '',
      fileInput: '',
    };
  },
  watch: {
    product() {
      this.tempProduct = JSON.parse(JSON.stringify(this.product));
    },
  },
  mounted() {
    this.fileInput = document.querySelector('#file');
    this.productModal = new Modal(this.$refs.productModal);
    this.$refs.productModal.addEventListener('hidden.bs.modal', () => {
      this.tempProduct = {
        imagesUrl: [],
      };
      this.tempImage = '';
      this.fileInput.value = '';
    });
  },
  methods: {
    show() {
      this.productModal.show();
    },
    hide() {
      this.productModal.hide();
    },
    uploadImage(image) {
      if (!this.tempProduct.imageUrl) {
        this.tempProduct.imageUrl = image;
      }
      this.tempProduct.imagesUrl.push(image);
      this.tempImage = '';
    },
    removeImage(item, key) {
      this.tempProduct.imagesUrl.splice(key, 1);
      if (!this.tempProduct.imagesUrl.length) {
        this.tempProduct.imageUrl = '';
      } else if (item === this.tempProduct.imageUrl) {
        [this.tempProduct.imageUrl] = this.tempProduct.imagesUrl;
      }
    },
    uploadFile() {
      const file = this.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((res) => {
        if (res.data.success) {
          const image = res.data.imageUrl;
          this.uploadImage(image);
          this.fileInput.value = '';
        }
      });
    },
    mainImageSet(item) {
      this.tempProduct.imageUrl = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.material-icons {
  opacity: 0.4;
  font-size: 22px;
  cursor: pointer;
}
.material-icons:hover {
  opacity: 1;
}
.main_image {
  opacity: 1;
  color: rgb(255, 174, 0);
}
.star_border::after {
  content: 'star_border';
}
.star_border:hover::after {
  color: rgb(255, 174, 0);
  content: 'star';
}
.remove_circle_outline::after {
  content: 'remove_circle_outline';
}
.remove_circle_outline:hover::after {
  content: 'remove_circle_outline';
}
</style>

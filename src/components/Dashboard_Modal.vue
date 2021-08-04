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

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
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
                    checked
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
                <div class="input-group mb-3">
                  <input
                    type="text"
                    id="imageUrl"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon"
                    v-model="tempImage"
                  />
                  <button
                    class="btn btn-outline-secondary rounded-end"
                    type="button"
                    id="button-addon"
                    @click="pushImage"
                  >
                    上傳連結
                  </button>
                </div>
              </div>
              <div class="d-flex flex-wrap">
                <div class="position-relative"
                  v-for="(item, key) in tempProduct.imagesUrl"
                  :key="key"
                  style="width: 31.3%; margin: 1%"
                >
                  <span class="position-absolute material-icons fs-4"
                    style="top: 2px; left: 2px; cursor: pointer"
                    @click="removeImage(key)"
                    @mouseover="active = key" @mouseleave="active = null"
                    :class="{'text-light' : active === key }">
                      remove_circle_outline
                  </span>
                  <img
                    :src="item"
                    class="w-100"
                    height="120"
                    style="object-fit: cover"
                  />
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
              <div class="form-group">
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
          @click="$emit('update-product', this.tempProduct)">確認</button>
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
      active: '',
    };
  },
  watch: {
    product() {
      this.tempProduct = JSON.parse(JSON.stringify(this.product));
    },
  },
  mounted() {
    this.productModal = new Modal(this.$refs.productModal);
    this.$refs.productModal.addEventListener('hidden.bs.modal', () => {
      this.tempProduct = {};
    });
  },
  methods: {
    show() {
      this.productModal.show();
    },
    hide() {
      this.productModal.hide();
    },
    pushImage() {
      if (!this.tempProduct.imageUrl) {
        this.tempProduct.imageUrl = this.tempImage;
      }
      this.tempProduct.imagesUrl.push(this.tempImage);
      this.tempImage = '';
    },
    removeImage(key) {
      this.tempProduct.imagesUrl.splice(key, 1);
      this.active = null;
    },
  },
};
</script>

<template>
  <div class="text-end mt-4">
    <button class="btn btn-dark" @click="openModal(true)">新增產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th width="120">圖片</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>
          <img
            :src="item.imageUrl"
            width="120"
            height="120"
            style="object-fit: cover"
          />
        </td>
        <td>{{ item.title }}</td>
        <td class="text-start">NT. {{ toCurrency(item.origin_price) }}</td>
        <td class="text-start">NT. {{ toCurrency(item.price) }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-dark btn-sm rounded-start"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm rounded-end"
              @click="openDelModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex justify-content-center">
    <Pagination :page="pagination" @get-product="getProducts"></Pagination>
  </div>
  <Modal
    ref="modal"
    :product="tempProduct"
    :is-new="isNew"
    @update-product="updateProduct"
  ></Modal>
  <DelModal
    ref="delModal"
    :product="tempProduct"
    @del-product="delProduct"
  ></DelModal>
  <loading :active="isLoading"
    :is-full-page="fullPage"/>
</template>

<script>
import Pagination from '@/components/Dashboard_Pagination.vue';
import Modal from './components/ProductModal.vue';
import DelModal from './components/ProductDelModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      isNew: false,
      tempProduct: {
        imagesUrl: [],
      },
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    Pagination,
    Modal,
    DelModal,
  },
  methods: {
    getProducts(page = 1) {
      this.loadingShow();
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
          this.loadingHide();
        } else {
          this.loadingHide();
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    updateProduct(product) {
      this.loadingShow();
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let method = '';
      if (this.isNew) {
        method = 'post';
      } else {
        method = 'put';
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
      }
      this.$http[method](url, { data: product }).then((res) => {
        if (res.data.success) {
          this.loadingHide();
          this.$refs.modal.hide();
          this.getProducts();
        }
      });
    },
    delProduct(id) {
      this.loadingShow();
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.loadingHide();
          this.$refs.delModal.hide();
          this.getProducts();
        } else {
          this.loadingHide();
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {
          imagesUrl: [],
          unit: '',
          category: '',
        };
        this.isNew = true;
      } else {
        const obj = item;
        if (item.imagesUrl === undefined) {
          obj.imagesUrl = [];
        }
        this.tempProduct = JSON.parse(JSON.stringify(obj));
        this.isNew = false;
      }
      this.$refs.modal.show();
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      this.$refs.delModal.show();
    },
    loadingShow() {
      this.isLoading = true;
    },
    loadingHide() {
      this.isLoading = false;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<template>
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
        <td class="text-start">{{ item.origin_price }}</td>
        <td class="text-start">{{ item.price }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-dark btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- <div class="d-flex justify-content-center">
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
  ></DelModal> -->
</template>

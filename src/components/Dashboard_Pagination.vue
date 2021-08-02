<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !page.has_pre }">
        <a
          class="page-link text-dark"
          href="#"
          aria-label="Previous"
          @click.prevent="$emit('get-product', page.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="item in page.total_pages" :key="item">
        <a
          class="page-link text-dark"
          href="#"
          @click.prevent="$emit('get-product', item)"
          >{{ item }}</a
        >
      </li>
      <li class="page-item" :class="{ disabled: !page.has_next }">
        <a
          class="page-link text-dark"
          href="#"
          aria-label="Next"
          @click.prevent="$emit('get-product', page.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  emits: ['get-product'],
  props: {
    page: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

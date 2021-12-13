<template>
  <router-view :myFavorite="myFavorite" @add-favorite="addFavorite"></router-view>
</template>

<script>
const storageMethods = {
  setItem(item) {
    localStorage.setItem('myFavorite', JSON.stringify(item));
  },
  getItem() {
    return JSON.parse(localStorage.getItem('myFavorite'));
  },
};

export default {
  data() {
    return {
      myFavorite: storageMethods.getItem() || [],
    };
  },
  methods: {
    addFavorite(id) {
      if (this.myFavorite.includes(id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(id), 1);
      } else {
        this.myFavorite.push(id);
      }
      storageMethods.setItem(this.myFavorite);
    },
  },
};
</script>

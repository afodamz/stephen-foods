<template>
  <div id="product_list" class="tab_pane">
    <div class="product__section--inner product__section--style3__inner">
      <div class="row row-cols-1 mb--n30">
        <ListProductItem
          :key="product.id"
          v-for="product in products"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListProductItem from "@/components/product/ListProductItem.vue";
export default {
  name: "ListView",
  props: {
    products: Array,
  },
  components: {
    ListProductItem,
  },
};
</script>
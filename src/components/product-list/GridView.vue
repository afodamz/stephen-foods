<template>
  <div id="product_grid" class="tab_pane active show">
    <div class="product__section--inner product__section--style3__inner">
      <div
        class="
          row
          row-cols-xxl-5
          row-cols-xl-4
          row-cols-lg-3
          row-cols-md-3
          row-cols-sm-3
          row-cols-2
          mb--n30
        "
      >
        <GridProductItem
          :key="product.id"
          v-for="product in products"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GridProductItem from "@/components/product/GridProductItem.vue";

export default {
  name: "GridView",
  props: {
    products: Array,
  },
  components: {
    GridProductItem,
  },
};
</script>
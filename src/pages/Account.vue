<template>
  <div>
    <!-- Start breadcrumb section -->
    <section class="breadcrumb__section breadcrumb__bg">
      <div class="container">
        <div class="row row-cols-1">
          <div class="col">
            <div class="breadcrumb__content text-center">
              <h1 class="breadcrumb__content--title text-white mb-25">
                My Account
              </h1>
              <ul class="breadcrumb__content--menu d-flex justify-content-center">
                <li class="breadcrumb__content--menu__items">
                  <a class="text-white" href="index-2.html">Home</a>
                </li>
                <li class="breadcrumb__content--menu__items">
                  <span class="text-white">My Account</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End breadcrumb section -->

    <!-- my account section start -->
    <section class="my__account--section section--padding">
      <div class="container">
        <p class="account__welcome--text">
          Hello, {{ currentUser.last_name }} welcome to your dashboard!
        </p>
        <div class="my__account--section__inner border-radius-10 d-flex">
          <div class="account__left--sidebar">
            <h2 class="account__content--title h3 mb-20">My Profile</h2>
            <ul class="account__menu">
              <li class="account__menu--list" :class="{ active: showDashboard }">
                <a @click="showDashboardFunc">Dashboard</a>
              </li>
              <li class="account__menu--list" :class="{ active: showAddresses }">
                <a @click="showAddressFunc">Addresses</a>
              </li>
              <li class="account__menu--list">
                <router-link tag="a" to="/wishlist">
                  Wishlist
                </router-link>
              </li>
              <li class="account__menu--list">
                <a href="login.html">Log Out</a>
              </li>
            </ul>
          </div>
          <div class="account__wrapper">
            <div class="account__content" v-show="showDashboard">
              <h2 class="account__content--title h3 mb-20">Orders History</h2>
              <div class="account__table--area">
                <table class="account__table">
                  <thead class="account__table--header">
                    <tr class="account__table--header__child">
                      <th class="account__table--header__child--items">
                        Order
                      </th>
                      <th class="account__table--header__child--items">Date</th>
                      <th class="account__table--header__child--items">
                        Status
                      </th>
                      <th class="account__table--header__child--items">
                        No of Items
                      </th>
                      <th class="account__table--header__child--items">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody class="account__table--body mobile__none">
                    <tr v-for="order in orderItems" :key="order.id" class="account__table--body__child">
                      <td class="account__table--body__child--items">{{ order.orderId }}</td>
                      <td class="account__table--body__child--items">
                        {{ order.dateCreated }}
                      </td>
                      <td class="account__table--body__child--items">{{ order.status }}</td>
                      <td class="account__table--body__child--items">
                        {{ order.carts.reduce( ( sum, b ) => sum + Number(b.quantity) , 0) }}
                      </td>
                      <td class="account__table--body__child--items">
                        ${{ order.carts.reduce( ( sum, b ) => sum + Number(b.totalPrice) , 0) }} USD
                      </td>
                    </tr>
                    
                  </tbody>
                  <tbody class="account__table--body mobile__block">
                    <tr v-for="order in orderItems" :key="order.id"  class="account__table--body__child">
                      <td class="account__table--body__child--items">
                        <strong>Order</strong>
                        <span>#2014</span>
                      </td>
                      <td class="account__table--body__child--items">
                        <strong>Date</strong>
                        <span>November 24, 2022</span>
                      </td>
                      <td class="account__table--body__child--items">
                        <strong>Payment Status</strong>
                        <span>Paid</span>
                      </td>
                      <td class="account__table--body__child--items">
                        <strong>Fulfillment Status</strong>
                        <span>Unfulfilled</span>
                      </td>
                      <td class="account__table--body__child--items">
                        <strong>Total</strong>
                        <span>$40.00 USD</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="account__content" v-show="showAddresses">
              <h2 class="account__content--title h3 mb-20">Addresses</h2>
              <button class="new__address--btn btn mb-25" type="button">Add a new address</button>
              <div class="account__details two">
                <h3 class="account__details--title h4">Default</h3>
                <p class="account__details--desc">Admin <br> Dhaka <br> Dhaka 12119 <br> Bangladesh</p>
                <a class="account__details--link" href="my-account-2.html">View Addresses (1)</a>
              </div>
              <div class="account__details--footer d-flex">
                <button class="account__details--footer__btn" type="button">Edit</button>
                <button class="account__details--footer__btn" type="button">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- my account section end -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Account",
  data() {
    return {
      showAddresses: false,
      showDashboard: true,
    }
  },
  computed: {
    ...mapGetters(["currentUser", "orderItems"]),
  },
  methods: {
    ...mapActions(["getOrders"]),
    showAddressFunc: function () {
      this.showAddresses = true;
      this.showDashboard = false;
    },
    showDashboardFunc: function () {
      this.showAddresses = false;
      this.showDashboard = true;
    },
    async getServerOrders() {
      await this.getOrders();
    },
  },
  async created() {
    this.getServerOrders();
  },
}
</script>
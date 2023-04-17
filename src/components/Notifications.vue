<template>
    <div>
    </div>
  <!-- <div v-if="getToast.message !== ''" :class="getToast.class_name">
    {{ getToast.message }}
  </div> -->
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { NotificationAction } from "../store/types.actions";
// import { ToastApi } from "vue-toast-notification";

export default {
  name: "Notifications",
  //   setup() {
  //     // Get toast interface
  //     // const $toast = ToastApi();

  //     // // // Use it!
  //     // // $toast("I'm a toast!");

  //     // // // or with options
  //     // // $toast.success("My toast content", {
  //     // //   timeout: 2000,
  //     // // });
  //     // $toast.success("My toast content");
  //     // // These options will override the options defined in the "app.use" plugin registration for this specific toast

  //     // // Make it available inside methods
  //     // // return { $toast };
  //     // $toast.clear();
  //     // this.$toast.success(message,?options)
  // //     app.$toast.open({
  // //   message: 'Error Message',
  // //   onClick: FUNCTION
  // // });
  // // this.$toast.clear();
  // console.log(this)
  // this.$toast.open({
  //   message: 'Error Message',
  //   type: 'error'
  // })
  //   },


//   created() {
//     console.log(this);
//     this.$toast.open({
//       message: "Error Message",
//       type: "error",
//     });

// this.$toast.open({
//           ...this.$store.getters["notification/getAlertMessage"],
//           position: 'top-right',
//           duration: '3000',
//           dismissible: false,
//           queue: true,
//           onClick: (){},
//           onDismiss: (){}
//         });
//         this.$toast.clear();

//   },
  methods: {
    ...mapMutations("notification", {
      clearToast: NotificationAction.CLEAR_TOAST,
      clearDialog: NotificationAction.CLEAR_ALERT,
    }),
  },
  computed: {
    // getToast is the same as this.$store.getters.getToast or as this.$store.state.toast
    ...mapGetters("notification", ["getToast", "getToastMessage"]),
    toast() {
      return this.$store.getters["notification/getToast"];
    },
  },
  watch: {
    // WARNING: if you plan using this keyword, the functions should not be implemented with () =>{} but as below:
    toast: function () {
      if (this.$store.state.notification.toast.message !== "") {
        
        this.$toast.open({
          ...this.$store.getters["notification/getToast"],
          position: 'top-right',
          duration: 5000,
        });

        // this.$toasted.show(
        //   this.$store.getters["notification/getAlertMessage"],
        //   {
        //     // this.$toasted.show(this.getAlertMessage, {
        //     duration: 5000,
        //     className: this.$store.state.notification.toast.class_name,
        //   }
        // );
        setTimeout(this.clearDialog, 5000);
      }
    },

    getToast: function () {
      if (this.getToastMessage !== "") {
        setTimeout(
          () =>
            this.$store.commit(
              `notification/${NotificationAction.CLEAR_TOAST}`
            ),
          3000
        );
      }
    },
  },
};
</script>

<style scoped>
</style>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <!-- Button -->
    <button 
      type="button" 
      class="btn btn-primary btn-lg" 
      @click="loadManual" 
      :disabled="loading"
    >
      <span v-if="!loading">User Manual</span>
      <span v-else>
        <div class="spinner-border spinner-border-sm text-light me-2" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        Loading...
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "UserManualButton",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    loadManual() {
      this.loading = true;

      // Example: simulate loading for 3 seconds
      setTimeout(() => {
        this.loading = false;
        // Example: open manual (replace with your file/page)
        // window.location.href = "/user-manual.pdf";
      }, 3000);
    }
  }
};
</script>

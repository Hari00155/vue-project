<template>
  <!-- Full-width sky blue background -->
  <div class="bg-info-subtle text-info-emphasis py-5">
    <!-- Inner container to center the form nicely -->
    <div class="container bg-white p-5 rounded-4 shadow">
      <h1>Staffs Form</h1>

      <RouterLink to="/staffs/update">To update a staff</RouterLink>

      <form class="row g-3 needs-validation" @submit.prevent="handleSubmit">
        <div class="col-md-6">
          <label for="inputFirstName" class="form-label">First Name</label>
          <input type="text" class="form-control" id="inputFirstName" required v-model="formData.firstName" />
          {{ formData.firstName }}
        </div>

        <div class="col-md-6">
          <label for="inputLastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="inputLastName" required v-model="formData.lastName" />
          {{ formData.lastName }}
        </div>

        <div class="row mb-3">
          <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="colFormLabel" placeholder="XYZ@Email.com" required
              v-model="formData.email" />
            {{ formData.email }}
          </div>
        </div>

        <div class="col-md-4">
          <label for="DOB" class="form-label">DOB</label>
          <input type="date" class="form-control" id="DOB" required v-model="formData.Dob" />
          {{ formData.Dob }}
        </div>

        <div class="col-md-4">
          <label for="Bloodgroup" class="form-label">Blood Group</label>
          <select id="inputBloodgroup" class="form-select" v-model="formData.bloodgroup">
            <option selected disabled>Choose...</option>
            <option>A+</option>
            <option>A-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
          {{ formData.bloodgroup }}
        </div>

        <div class="col-md-4">
          <label for="inputAGE" class="form-label">Age</label>
          <input type="number" class="form-control" id="inputAGE" required v-model="formData.age" />
          {{ formData.age }}
        </div>

        <div class="form-floating col-md-6">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example"
            v-model="formData.yearofexperience">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label for="floatingSelect">Year of Experience</label>
        </div>

        <div class="row mb-3">
          <label for="inputPhoneNO" class="col-sm-2 col-form-label">Phone No</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPhoneNo" required v-model="formData.phno" />
            {{ formData.phno }}
          </div>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">Check me out</label>
          </div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>

      <!-- Optional message after submission -->
      <p v-if="message" class="mt-3 text-success fw-bold">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        firstName: null,
        lastName: null,
        email: null,
        Dob: null,
        bloodgroup: null,
        age: null,
        yearofexperience: null,
        phno: null,
      },
      message: null,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const url = "http://localhost:3001/staffs";
        const response = await axios.post(url, this.formData);
        console.log(response);
        this.message = "Record created successfully!";
        this.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
    resetForm() {
      this.formData = {
        firstName: null,
        lastName: null,
        email: null,
        Dob: null,
        bloodgroup: null,
        age: null,
        yearofexperience: null,
        phno: null,
      };
    },
  },
};
</script>

<style scoped>
.bg-info-subtle {
  background-color: #d8f7ff !important;
  /* sky blue */
  min-height: 100vh;
}

/* Add a little spacing to make it neat */
.container {
  max-width: 900px;
}
</style>

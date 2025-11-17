<template>
   <!-- Full-width sky blue background -->
   <div class="bg-info-subtle text-info-emphasis py-5">
    <!-- Inner container to center the form nicely -->
    <div class="container bg-white p-5 rounded-4 shadow">
    <h1>Student Form</h1>
    

    <RouterLink to="/students/update">To update a student</RouterLink>

    <form class="row g-3 needs-validation" @submit.prevent="handleSubmit"  style="max-width: px;">
      <div class="col-md-6">
        <label for="inputFirstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="inputFirstName" required v-model="formData.firstName" />
        {{ formData.firstName }}
      </div>
      <div class="col-md-6">
        <label for="inputLastName" class="form-label">Last Name</label>
        <input type="LastName" class="form-control" id="inputLastName" required v-model="formData.lastName" />
        {{ formData.lastName }}
      </div>
      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-25">
          <input type="email" class="form-control" id="colFormLabel" placeholder="XYZ@Email.com" required
            v-model="formData.email" />
          {{ formData.email }}
        </div>
      </div>

      <div>
        <label for="dob">Dob:</label>
        <input type="date" required v-model="formData.dob" />
        {{ formData.dob }}
      </div>

      <div class="col-md-4">
        <label for="Bloodgroup" class="form-label">Blood Group</label>
        <select id="inputBloodgroup" class="form-select" v-model="formData.bloodGroup">
          <option selected>Choose...</option>
          <option>A+</option>
          <option>A-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
        </select>
        {{ formData.bloodGroup }}
      </div>
      <div class="col-md-2">
        <label for="inputAGE" class="form-label">Age</label>
        <input type="text" class="form-control" id="inputAGE" required v-model="formData.age" />
        {{ formData.age }}
      </div>
      <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example"
          v-model="formData.currentYear">
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3th Year">3th Year</option>
          <option value="4th Year">4th Year</option>
        </select>
        <label for="floatingSelect">Current Year</label>
        {{ formData.currentYear }}
      </div>
      <div class="row mb-3">
        <label for="inputPhoneNO" class="col-sm-2 col-form-label">Phone No</label>
        <div class="col-sm-25">
          <input type="text" class="form-control" id="inputPhoneNo" required v-model="formData.mobileNo" />
          {{ formData.mobileNo }}
        </div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
      </form>
    

    <!-- Success Alert-->
    <div v-if="message" class="alert alert-success" role="alert">
      {{ message }}
    </div>
      </div>
    </div>
 
</template>

<script>
import Container from '@/components/Container.vue'

import axios from 'axios'

export default {
  data() {
    return {
      formData: {
        firstName: null,
        lastName: null,
        email: null,
        dob: null,
        age: null,
        mobileNo: null,
        currentYear: null,
        createdAt: Date.now(),
        bloodGroup: null,
        departmentId: 1,
      },
      message: null,
    }
  },
  methods: {
    async handleSubmit() {
      let url = 'http://localhost:3001/students'
      axios.post(url, this.formData)
        .then( response => {
          console.log(response);
          this.message = "Record created."
          this.resetForm()
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    resetForm() {
      this.formData = {
        firstName: null,
        lastName: null,
        email: null,
        dob: null,
        age: null,
        mobileNo: null,
        currentYear: null,
        createdAt: null,
        bloodGroup: null,
        departmentId: 1,
      }
    },
  },

  components: {
    Container,
  },
}
</script>

<style scoped>
.bg-info-subtle {
  background-color: #b6cef7 !important;
  /* light voilet */
  min-height: 100vh;
}

/* Add a little spacing to make it neat */
.container {
  max-width: 900px;
}
</style>


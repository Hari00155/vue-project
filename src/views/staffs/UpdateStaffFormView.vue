<template>
  <Container>
    <h1>Update Staff Form</h1>

     <form class="row g-3 needs-validation">
      <div class="col-md-6">
        <label for="inputFirstName" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          id="inputFirstName"
          required
          v-model="formData.firstName"
        />
        {{ formData.firstName }}
      </div>
      <div class="col-md-6">
        <label for="inputLastName" class="form-label">Last Name</label>
        <input type="LastName" class="form-control" id="inputLastName" required
          v-model="formData.lastName" />
          {{ formData.lastName }}
      </div>
      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-25">
          <input type="email" class="form-control" id="colFormLabel" placeholder="XYZ@Email.com" required v-model="formData.email"/>
          {{ formData.email }}
        </div>
      </div>
      <div>
        <label for="DOB">DOB:</label>
        <input type="date" required v-model="formData.Dob"/>
        {{ formData.Dob }}
      </div>

      <div class="col-md-4">
        <label for="Bloodgroup" class="form-label">Blood Group</label>
        <select id="inputBloodgroup" class="form-select">
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
      </div>
      <div class="col-md-2">
        <label for="inputAGE" class="form-label">Age</label>
        <input type="text" class="form-control" id="inputAGE" required v-model="formData.age"/>
        {{ formData.age }}
      </div>
      <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
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
        <div class="col-sm-25">
          <input type="email" class="form-control" id="inputPhoneNo" required v-model="formData.phno"/>
          {{ formData.phno }}
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
  </Container>
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
        bloodGroup: null,
        age: null,
        Yearofexperience: null,
        mobileNo: null,
        createdAt: null,
        departmentId: 1,
      },
      message: null,
      staffId: null,

    }
  },
  methods: {
    async handleSubmit() {
      let url = `http://localhost:3001/staffs/${this.staffId}`
      axios.put(url, this.formData)
        .then(response => {
          this.formData = response
          this.message = 'Record updated successfully.'
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
        Yearofexperience: null,
        createdAt: null,
        bloodGroup: null,
      }
    },
    async searchStaffById() {

      let url = `http://localhost:3000/staffs/${this.staffId}`
      axios.get(url)
        .then(response => {
          console.log(response)
          this.formData = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },

  components: {
    Container,
  },
}
</script>
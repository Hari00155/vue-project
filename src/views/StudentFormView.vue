<template>
  <Container>
    <h1>Student Form</h1>

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
          v-model="formData.lastName"/>
          {{ formData.lastName }}
      </div>
      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-25">
          <input type="email" class="form-control" id="colFormLabel" placeholder="XYZ@Email.com" required
          v-model="formData.email"/>
          {{ formData.email }}
        </div>
      </div>

      <div>
        <label for="dob">Dob:</label>
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
        {{ formData.Age }}
      </div>
      <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3th Year</option>
          <option value="4">4th Year</option>
        </select>
        <label for="floatingSelect">Current Year</label>
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
  </Container>
</template>

<script>
import Container from '@/components/Container.vue'

export default {
  data() {
    return {
      formData: {
        firstName: null,
        lastName: null,
        email: null,
        Dob: null,
        Age: null,
        phno: null,
      },
    }
  },

  components: {
    Container,
  },
}
</script>

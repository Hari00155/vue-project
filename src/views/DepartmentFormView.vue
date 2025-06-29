<template>
  <Container>
    <div class="p-3 mb-2 bg-warning-subtle text-warning-emphasis">
    <h1>Department Form</h1>

    <RouterLink to="/departments/update">To update a department</RouterLink>

    <form class="row mb-3 needs-validation">
      <div class="col-sm-25">
        <label for="inputDepartmentName" class="form-label">Department Name</label>
        <input
          type="text"
          class="form-control"
          id="inputDepartmenttName"
          required
          v-model="formData.DepartmentName"
        />
        {{ formData.DepartmentName }}
      </div>
      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-25">
          <input
            type="email"
            class="form-control"
            id="colFormLabel"
            placeholder="XYZ@Email.com"
            required
            v-model="formData.email"
          />
          {{ formData.email }}
        </div>
      </div>
      <div class="col-sm-25">
        <label for="inputHODName" class="form-label">HOD Name</label>
        <input
          type="text"
          class="form-control"
          id="inputHODName"
          required
          v-model="formData.HODName"
        />
        {{ formData.HODName }}
      </div>
      <div class="col-md-2">
        <label for="inputnoofstaff" class="form-label">No of Staffs</label>
        <input
          type="text"
          class="form-control"
          id="inputnoofstaffs"
          required
          v-model="formData.noofstaffs"
        />
        {{ formData.noofstaffs }}
      </div>

      <div class="col-md-2">
        <label for="inputnooflabs" class="form-label">No of Labs</label>
        <input
          type="text"
          class="form-control"
          id="inputnooflabs"
          required
          v-model="formData.Nooflabs"
        />
        {{ formData.Nooflabs }}
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
  </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue'
import axios from 'axios'

export default {
  data() {
    return {
      apiData: {},
      formData: {
        DepartmentName: null,
        lastName: null,
        email: null,
        HODName: null,
        noofstaffs: null,
        Nooflabs: null,
      },
    }
  },
  mounted() {
    axios
      .get('http://localhost:3001/students') // Replace with your API endpoint
      .then((response) => {
        this.apiData = response.data
      })
      .catch((error) => {
        this.error = error
      })
  },

  components: {
    Container,
  },
}
</script>

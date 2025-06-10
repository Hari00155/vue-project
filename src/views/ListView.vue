<template>
  <Container>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Blood Group</th>
          <th>DOB</th>
          <th>Phone</th>
          <th>Year</th>
          <th>Timestamp</th>
          <th>Dept ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.firstName }}</td>
          <td>{{ student.lastName }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.bloodGroup }}</td>
          <td>{{ student.dob }}</td>
          <td>{{ student.mobileNo }}</td>
          <td>{{ student.currentYear }}</td>
          <td>{{ student.createdAt }}</td>
          <td>{{ student.departmentId }}</td>
        </tr>
      </tbody>
    </table>
  </Container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      students: []
    }
  },
  created() {
    axios
      .get('http://localhost:3001/students') // Replace with your API endpoint
      .then((response) => {
        this.students = response.data
      })
      .catch((error) => {
        this.error = error
      })
  },
}
</script>
<template>
  <div class="container py-4">
    <div class="row gy-4">
      <!-- Student Card -->
      <div class="col-md-12">
        <div class="card h-100">
          <div class="row g-0">
            <div class="col-md-3 d-flex align-items-center justify-content-center p-3">
              <img src="https://cdn-icons-png.flaticon.com/512/1061/1061431.png"
                   class="img-fluid rounded-start"
                   alt="Student">
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <h5 class="card-title">STUDENT</h5>
                <p class="card-text">
                  Update your personal, academic, and contact details easily. Ensure your student records are always accurate and up to date.
                </p>
                <ul>
                  <li><b>Edit personal details</b> – Update your name, address, or date of birth</li>
                  <li><b>Academic details</b> – Update your course or year of study</li>
                  <li><b>Contact information</b> – Update your email, phone, or address</li>
                  <li><b>Save changes</b> – Ensure your records are up to date</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Staff Card -->
      <div class="col-md-12">
        <div class="card h-100">
          <div class="row g-0">
            <div class="col-md-3 d-flex align-items-center justify-content-center p-3">
              <img src="https://cdn-icons-png.flaticon.com/512/9746/9746195.png"
                   class="img-fluid rounded-start"
                   alt="Staff">
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <h5 class="card-title">STAFF</h5>
                <p class="card-text">
                  Modify your profile, professional details, and contact information. Keep your staff records current for smooth communication.
                </p>
                <ul>
                  <li><b>Edit profile details</b> – Update your name, designation, or department</li>
                  <li><b>Professional information</b> – Update your role, qualifications, or work history</li>
                  <li><b>Contact information</b> – Update your email, phone, or office address</li>
                  <li><b>Save changes</b> – Ensure your staff records are accurate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Department Card -->
      <div class="col-md-12">
        <div class="card h-100">
          <div class="row g-0">
            <div class="col-md-3 d-flex align-items-center justify-content-center p-3">
              <img src="https://cdn-icons-png.flaticon.com/512/3652/3652287.png"
                   class="img-fluid rounded-start"
                   alt="Department">
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <h5 class="card-title">DEPARTMENT</h5>
                <p class="card-text">
                  Manage and update department information and staff assignments. Maintain accurate departmental data with simple tools.
                </p>
                <ul>
                  <li><b>Edit department details</b> – Update department name, code, or description</li>
                  <li><b>Assign/Update Head of Department (HOD)</b> – Change or reassign the HOD as needed</li>
                  <li><b>Add/Remove Staff Members</b> – Manage which staff belong to the department</li>
                  <li><b>Contact Information</b> – Update departmental email, phone, or office location</li>
                  <li><b>Academic Programs</b> – Add or update the courses/programs handled by the department</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogView"
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.card-title {
  color: #2c3e50;
}
</style>

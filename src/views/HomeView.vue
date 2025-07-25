<template>
  <div class="card text-bg-dark position-relative">
    <img src="https://www.univariety.com/blog/wp-content/uploads/2020/08/Blog-banner-image-1.jpg" class="card-img"
      alt="...">

    <!-- Top Center Black Text -->
    <div class="position-absolute top-0 start-50 translate-middle-x mt-3 text-center">
      <h2 class="text-black fw-bold display-4">DEVELOPER UNIVERSITY</h2>
    </div>


    <!-- Card Group Section -->
    <div class="card-group p-4 gap-4 ">
      <!-- Card 1 -->
      <div class="card text-center">
        <img src="https://cdn-icons-png.flaticon.com/512/1061/1061431.png" class="card-img-top mx-auto mt-3"
          style="width: 80px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">STUDENT </h5>
          <p class="card-text"> Student Portal
            Update your personal, academic, and contact details easily.
            Ensure your student records are always accurate and up to date.</p>
          <p><RouterLink to="/student-form">To update a student</RouterLink></p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card text-center">
        <img src="https://cdn-icons-png.flaticon.com/512/9746/9746195.png" class="card-img-top mx-auto mt-3"
          style="width: 80px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">STAFF</h5>
          <p class="card-text">Modify your profile, professional details, and contact information.
            Keep your staff records current for smooth communication.</p>
           <p><RouterLink to="/staff-form">To update a staff</RouterLink></p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card text-center">
        <img src="https://cdn-icons-png.flaticon.com/512/3652/3652287.png" class="card-img-top mx-auto mt-3"
          style="width: 80px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">DEPARTMENT</h5>
          <p class="card-text">Manage and update department information and staff assignments.
            Maintain accurate departmental data with simple tools</p>
           <p><RouterLink to="/department-form">To update a department</RouterLink></p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-auto">
      <p class="mb-0">© 2025 DEVELOPER UNIVERSITY</p>
    </footer>
  </div>
</template>

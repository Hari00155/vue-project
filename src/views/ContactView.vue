<template>
  <div class="container py-5">

    <!-- Title -->
    <div class="text-center mb-5">
      <h1 class="fw-bold text-primary">📩 Contact Us</h1>
      <p class="text-muted">Have questions? Reach out to the right department or staff member easily.</p>
    </div>

    <div class="row g-4">
      <!-- Left: Contact Form -->
      <div class="col-md-6">
        <div class="card shadow-lg border-0 rounded-3 p-4">
          <h4 class="mb-3 text-secondary">Send us a Message</h4>

          <div class="mb-3">
            <label for="contactName" class="form-label fw-semibold">Name</label>
            <input type="text" class="form-control" id="contactName" placeholder="Your Name">
          </div>

          <div class="mb-3">
            <label for="contactEmail" class="form-label fw-semibold">Email</label>
            <input type="email" class="form-control" id="contactEmail" placeholder="name@example.com">
          </div>

          <div class="mb-3">
            <label for="contactSubject" class="form-label fw-semibold">Subject</label>
            <input type="text" class="form-control" id="contactSubject" placeholder="Enter your subject">
          </div>

          <div class="mb-3">
            <label for="contactMessage" class="form-label fw-semibold">Message</label>
            <textarea class="form-control" id="contactMessage" rows="4" placeholder="Write your message..."></textarea>
          </div>

          <button type="button" class="btn btn-primary w-100 rounded-pill shadow-sm">
            🚀 Send Message
          </button>
        </div>
      </div>

      <!-- Right: Office Info -->
      <div class="col-md-6">
        <div class="card shadow-lg border-0 rounded-3">
          <img src="https://developers.google.com/static/maps/images/current-place-ios.png" 
               class="card-img-top rounded-top" alt="Map">

          <div class="card-body">
            <h4 class="text-secondary">📍 General Office</h4>
            <p class="card-text mb-1"><b>Address:</b> 123 Main St, Anytown, USA</p>
            <p class="card-text mb-1"><b>Email:</b> support@yourportal.com</p>
            <p class="card-text mb-3"><b>Phone:</b> +1 234 567 690</p>
            <span class="badge bg-info text-dark">Open: Mon - Fri, 9am - 6pm</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Department Directory -->
    <div class="mt-5">
      <h2 class="text-center fw-bold text-primary mb-4">🏢 Department Directory</h2>
      <div class="row g-4">

        <!-- Electrical -->
        <div class="col-md-4">
          <div class="card shadow border-0 h-100 text-center p-3">
            <img src="https://cdn-icons-png.flaticon.com/512/5402/5402751.png" class="card-img-top mx-auto" style="width: 80px;" alt="Electrical">
            <div class="card-body">
              <h5 class="fw-bold">Electrical Department</h5>
              <p class="text-muted">electrical@example.com <br> HOD: Jane Doe</p>
            </div>
          </div>
        </div>

        <!-- Mechanical -->
        <div class="col-md-4">
          <div class="card shadow border-0 h-100 text-center p-3">
            <img src="https://cdn-icons-png.flaticon.com/512/5381/5381386.png" class="card-img-top mx-auto" style="width: 80px;" alt="Mechanical">
            <div class="card-body">
              <h5 class="fw-bold">Mechanical Department</h5>
              <p class="text-muted">mechanical@example.com <br> HOD: John Doe</p>
            </div>
          </div>
        </div>

        <!-- Computer Science -->
        <div class="col-md-4">
          <div class="card shadow border-0 h-100 text-center p-3">
            <img src="https://cdn-icons-png.flaticon.com/512/10719/10719487.png" class="card-img-top mx-auto" style="width: 80px;" alt="CS">
            <div class="card-body">
              <h5 class="fw-bold">Computer Science Department</h5>
              <p class="text-muted">cs@example.com <br> HOD: Alice Johnson</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

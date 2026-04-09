document.addEventListener("DOMContentLoaded", function () {
  const kbygHTML = `
  <!-- Know Before You Go Modal -->
  <div class="modal fade" id="knowBeforeYouGoModal" tabindex="-1" aria-labelledby="knowBeforeYouGoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg kbyg-modal">
      <div class="modal-content border-0">
        <button type="button" class="btn-close position-absolute top-0 end-0 m-3 z-index-3" data-bs-dismiss="modal" aria-label="Close" style="z-index: 1055; background-color: rgba(255,255,255,0.9); border-radius: 50%; padding: 0.5rem; box-shadow: 0 4px 10px rgba(0,0,0,0.1);"></button>
        
        <div id="kbygCarousel" class="carousel slide carousel-fade h-100" data-bs-ride="carousel" data-bs-interval="6000">
          <div class="carousel-indicators kbyg-indicators mb-0 pb-2">
            <button type="button" data-bs-target="#kbygCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#kbygCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#kbygCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#kbygCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#kbygCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#kbygCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
          </div>
          
          <div class="carousel-inner h-100">
            
            <!-- Slide 1: Welcome -->
            <div class="carousel-item active kbyg-slide">
              <div class="kbyg-content w-100 px-4 py-5 text-center d-flex flex-column justify-content-center align-items-center h-100">
                <img src="images/logo.png" alt="WWiT Logo" class="mb-4" style="height: 80px; border-radius: 12px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
                <h2 class="fw-black mb-3 text-dark">Know Before You Go!</h2>
                <p class="lead text-muted mb-0 mx-auto" style="max-width: 500px; font-size: 1.1rem; line-height: 1.5;">April 10th is finally here! Swipe through this quick guide for everything you need to know for a seamless day of connection and inspiration.</p>
              </div>
            </div>
            
            <!-- Slide 2: Location & Parking -->
            <div class="carousel-item kbyg-slide">
              <div class="kbyg-content w-100 px-4 py-5 text-center d-flex flex-column justify-content-center h-100">
                <div class="mb-4">
                  <i class="fa-solid fa-map-location-dot text-accent mb-3" style="font-size: 2.5rem;"></i>
                  <h3 class="fw-bold mb-1">Infosys Lab</h3>
                  <p class="text-muted small mb-0"><i class="fa-solid fa-location-arrow me-2 text-primary"></i>6100 Sam Jones Expy, Indianapolis, IN</p>
                </div>
                <div class="row g-3 px-2 justify-content-center mx-auto w-100" style="max-width: 600px;">
                  <div class="col-sm-6">
                    <div class="bg-light p-3 rounded-4 text-center border border-secondary border-opacity-10 shadow-sm d-flex flex-column justify-content-center h-100">
                      <i class="fa-solid fa-square-parking text-primary fs-3 mb-2"></i>
                      <h6 class="fw-bold mb-1">Free Parking</h6>
                      <span class="text-muted" style="font-size: 0.8rem;">Park near the building or on the back loop street.</span>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="bg-light p-3 rounded-4 text-center border border-secondary border-opacity-10 shadow-sm d-flex flex-column justify-content-center h-100">
                      <i class="fa-solid fa-bolt text-warning fs-3 mb-2"></i>
                      <h6 class="fw-bold mb-1">EV Spots</h6>
                      <span class="text-muted" style="font-size: 0.8rem;">Available! Please leave at least 6 spots open.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Slide 3: Check-in & Security -->
            <div class="carousel-item kbyg-slide">
              <div class="kbyg-content w-100 px-4 py-5 text-center d-flex flex-column justify-content-center h-100 pb-5">
                <h3 class="fw-bold mb-4 text-center">Registration</h3>
                <div class="row g-3 px-2 justify-content-center mx-auto w-100" style="max-width: 600px;">
                  <div class="col-sm-6">
                    <div class="p-4 rounded-4 bg-teal-light shadow-sm d-flex flex-column justify-content-center align-items-center h-100">
                      <i class="fa-solid fa-id-card text-primary mb-3" style="font-size: 2.5rem;"></i>
                      <h5 class="fw-bold text-dark mb-2">Photo ID Required</h5>
                      <span class="text-muted small lh-sm">Infosys strictly requires ID to check-in/out.</span>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="p-4 rounded-4 bg-orange-light shadow-sm d-flex flex-column justify-content-center align-items-center h-100">
                      <i class="fa-solid fa-door-open text-accent mb-3" style="font-size: 2.5rem;"></i>
                      <h5 class="fw-bold text-dark mb-2">Doors at 8:30 AM</h5>
                      <span class="text-muted small lh-sm">Arrive early to check in, grab a badge, and connect!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Slide 4: Schedule Highlights -->
            <div class="carousel-item kbyg-slide">
              <div class="kbyg-content w-100 px-3 py-4 text-center d-flex flex-column justify-content-center h-100 pb-5">
                <h4 class="fw-bold mb-3"><i class="fa-regular fa-clock text-primary me-2"></i>Schedule at a Glance</h4>
                <div class="row g-2 px-2 justify-content-center mx-auto w-100" style="max-width: 600px;">
                  <div class="col-6 col-sm-4">
                    <div class="d-flex align-items-center gap-2 bg-light p-2 rounded-3 shadow-sm border border-secondary border-opacity-10 text-start">
                      <div class="bg-primary text-white rounded d-flex align-items-center justify-content-center flex-shrink-0" style="width: 35px; height: 35px;"><i class="fa-solid fa-coffee fs-6 text-white"></i></div>
                      <div class="lh-sm"><strong class="d-block text-dark" style="font-size: 0.8rem;">8:30 AM</strong><span class="text-muted" style="font-size: 0.7rem;">Breakfast</span></div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4">
                    <div class="d-flex align-items-center gap-2 bg-light p-2 rounded-3 shadow-sm border border-secondary border-opacity-10 text-start">
                      <div class="bg-accent text-white rounded d-flex align-items-center justify-content-center flex-shrink-0" style="width: 35px; height: 35px;"><i class="fa-solid fa-desktop fs-6 text-white"></i></div>
                      <div class="lh-sm"><strong class="d-block text-dark" style="font-size: 0.8rem;">9:15 AM</strong><span class="text-muted" style="font-size: 0.7rem;">Keynote</span></div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4">
                    <div class="d-flex align-items-center gap-2 bg-light p-2 rounded-3 shadow-sm border border-secondary border-opacity-10 text-start">
                      <div class="bg-secondary text-white rounded d-flex align-items-center justify-content-center flex-shrink-0" style="width: 35px; height: 35px;"><i class="fa-solid fa-users fs-6 text-white"></i></div>
                      <div class="lh-sm"><strong class="d-block text-dark" style="font-size: 0.8rem;">10:30 AM</strong><span class="text-muted" style="font-size: 0.7rem;">Breakouts</span></div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4">
                    <div class="d-flex align-items-center gap-2 bg-light p-2 rounded-3 shadow-sm border border-secondary border-opacity-10 text-start">
                      <div class="bg-success text-white rounded d-flex align-items-center justify-content-center flex-shrink-0" style="width: 35px; height: 35px;"><i class="fa-solid fa-utensils fs-6 text-white"></i></div>
                      <div class="lh-sm"><strong class="d-block text-dark" style="font-size: 0.8rem;">11:45 AM</strong><span class="text-muted" style="font-size: 0.7rem;">Lunch</span></div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4">
                    <div class="d-flex align-items-center gap-2 bg-light p-2 rounded-3 shadow-sm border border-secondary border-opacity-10 text-start">
                      <div class="bg-primary text-white rounded d-flex align-items-center justify-content-center flex-shrink-0" style="width: 35px; height: 35px;"><i class="fa-solid fa-comments fs-6 text-white"></i></div>
                      <div class="lh-sm"><strong class="d-block text-dark" style="font-size: 0.8rem;">1:00 PM</strong><span class="text-muted" style="font-size: 0.7rem;">Panels</span></div>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4">
                    <div class="d-flex align-items-center gap-2 bg-light p-2 rounded-3 shadow-sm border border-secondary border-opacity-10 text-start">
                      <div class="bg-accent text-white rounded d-flex align-items-center justify-content-center flex-shrink-0" style="width: 35px; height: 35px;"><i class="fa-solid fa-clock fs-6 text-white"></i></div>
                      <div class="lh-sm"><strong class="d-block text-dark" style="font-size: 0.8rem;">2:15 PM</strong><span class="text-muted" style="font-size: 0.7rem;">Lightning</span></div>
                    </div>
                  </div>
                  <div class="col-12 mt-2">
                     <div class="bg-primary-light text-primary text-center py-2 px-3 rounded-3 fw-bold shadow-sm d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-bullhorn me-2 fs-5"></i> <span style="font-size: 0.9rem;">3:00 PM — Wrap Up & Raffles</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Slide 5: Food & Locations Redesign -->
            <div class="carousel-item kbyg-slide">
              <div class="kbyg-content w-100 px-4 py-4 text-center d-flex flex-column justify-content-center h-100 pb-5">
                <div class="row g-3 justify-content-center mx-auto w-100" style="max-width: 600px;">
                  <div class="col-12">
                    <div class="bg-light rounded-4 p-3 shadow-sm border border-secondary border-opacity-10 d-flex align-items-center justify-content-start gap-3">
                      <div class="bg-accent text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm" style="width: 50px; height: 50px;">
                        <i class="fa-solid fa-utensils fs-4"></i>
                      </div>
                      <div class="text-start">
                        <h6 class="fw-bold mb-1">Food & Drinks</h6>
                        <p class="mb-0 text-muted" style="font-size: 0.8rem; line-height: 1.3;">Panera Breakfast & Italian Lunch Buffet.<br><span class="text-success fw-bold">Vegan & Veg options provided!</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="bg-light rounded-4 p-3 shadow-sm border border-secondary border-opacity-10 d-flex align-items-center justify-content-start gap-3">
                      <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm" style="width: 50px; height: 50px;">
                        <i class="fa-solid fa-building fs-4"></i>
                      </div>
                      <div class="text-start">
                        <h6 class="fw-bold mb-1">Session Areas</h6>
                        <p class="mb-0 text-muted" style="font-size: 0.8rem; line-height: 1.3;"><strong class="text-danger">No Food</strong> in the Auditorium. Food is okay in Classrooms. Events packet provided.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 6: Raffles Redesign -->
            <div class="carousel-item kbyg-slide">
              <div class="kbyg-content w-100 px-4 py-4 text-center d-flex flex-column justify-content-center h-100 pb-5">
                <i class="fa-solid fa-gift text-accent mb-2 mx-auto" style="font-size: 2.5rem;"></i>
                <h4 class="fw-bold mb-3 text-dark">Amazing Prizes</h4>
                
                <div class="row g-2 px-2 justify-content-center mx-auto w-100 mb-3" style="max-width: 600px;">
                  <div class="col-6">
                    <div class="bg-light p-2 rounded-3 shadow-sm d-flex align-items-center gap-2 border border-secondary border-opacity-10 text-start">
                      <div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:35px;height:35px;"><i class="fa-solid fa-book fs-6"></i></div>
                      <span class="fw-bold lh-sm text-dark" style="font-size: 0.8rem;">Tech Books</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="bg-light p-2 rounded-3 shadow-sm d-flex align-items-center gap-2 border border-secondary border-opacity-10 text-start">
                      <div class="bg-accent bg-opacity-10 text-accent rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:35px;height:35px;"><i class="fa-solid fa-box-open fs-6"></i></div>
                      <span class="fw-bold lh-sm text-dark" style="font-size: 0.8rem;">Gift Bags</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="bg-light p-2 rounded-3 shadow-sm d-flex align-items-center gap-2 border border-secondary border-opacity-10 text-start">
                      <div class="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:35px;height:35px;"><i class="fa-solid fa-laptop fs-6"></i></div>
                      <span class="fw-bold lh-sm text-dark" style="font-size: 0.8rem;">Laptop Desk</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="bg-light p-2 rounded-3 shadow-sm d-flex align-items-center gap-2 border border-secondary border-opacity-10 text-start">
                      <div class="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:35px;height:35px;"><i class="fa-solid fa-mug-saucer fs-6"></i></div>
                      <span class="fw-bold lh-sm text-dark" style="font-size: 0.8rem;">QR Mug</span>
                    </div>
                  </div>
                </div>

                <div class="bg-accent-light p-2 px-3 rounded-4 d-flex align-items-center gap-3 border border-warning border-opacity-25 shadow-sm mx-auto w-100 text-start" style="max-width: 600px;">
                  <div class="icon-box-sm bg-accent text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm" style="width: 45px; height: 45px;">
                    <i class="fa-solid fa-hand-holding-heart fs-5"></i>
                  </div>
                  <p class="mb-0 fw-bold text-dark lh-sm" style="font-size: 0.85rem;">Bring donations for Second Harvest Food Bank for an EXTRA raffle ticket!</p>
                </div>
              </div>
            </div>
            
          </div>
          
          <button class="carousel-control-prev kbyg-control" type="button" data-bs-target="#kbygCarousel" data-bs-slide="prev" style="width: 5%;">
            <span class="carousel-control-prev-icon rounded-circle bg-dark bg-opacity-50 p-3" aria-hidden="true" style="width:35px; height:35px; background-size: 1rem;"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next kbyg-control" type="button" data-bs-target="#kbygCarousel" data-bs-slide="next" style="width: 5%;">
            <span class="carousel-control-next-icon rounded-circle bg-dark bg-opacity-50 p-3" aria-hidden="true" style="width:35px; height:35px; background-size: 1rem;"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>`;
  
  // Append to bottom
  document.body.insertAdjacentHTML('beforeend', kbygHTML);

  // Show "Know Before You Go" modal automatically just once per session
  setTimeout(function () {
    if (typeof bootstrap !== 'undefined') {
      var kbygModal = new bootstrap.Modal(document.getElementById('knowBeforeYouGoModal'));
      kbygModal.show();
    }
  }, 1500); // Wait 1.5s after load
});

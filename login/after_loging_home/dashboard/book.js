document.addEventListener('DOMContentLoaded', () => {
    // 1. Parse URL Parameter
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movie') || 'jurassic_world_rebirth';
    const movie = window.moviesData[movieId] || window.moviesData['jurassic_world_rebirth'];

    // If movie doesn't exist, show error
    if (!movie) {
        alert("Movie not found!");
        window.location.href = 'dashboard.html';
        return;
    }

    // Set page title
    document.title = `${movie.title} - Book Tickets`;

    // 2. Set Up Movie Metadata
    document.getElementById('movie-title').innerText = movie.title;
    document.getElementById('poster').src = movie.poster;
    document.getElementById('movie-directed').innerText = movie.directed;
    document.getElementById('movie-starring').innerText = movie.starring;
    document.getElementById('movie-duration').innerText = movie.duration;
    const durationVal = document.getElementById('movie-duration-val');
    if (durationVal) durationVal.innerText = movie.duration;
    document.getElementById('movie-rating').innerText = movie.rating;
    document.getElementById('movie-type').innerText = movie.type;

    // Set custom background style variable
    const rightSection = document.querySelector('.right');
    if (movie.background) {
        rightSection.style.setProperty('--bg-image', `url('${movie.background}')`);
    } else {
        rightSection.style.setProperty('--bg-image', `url('${movie.poster}')`);
    }

    // Set up Video Trailer
    const videoElement = document.getElementById('video');
    const playBtn = document.getElementById('play');
    if (movie.video) {
        videoElement.src = movie.video;
        videoElement.style.display = 'none';
        
        playBtn.addEventListener('click', () => {
            const rightChildren = document.querySelectorAll('.right > *:not(#video):not(.back-btn-float):not(#ticket-wrapper)');
            if (videoElement.paused) {
                videoElement.play();
                videoElement.style.display = 'block';
                playBtn.classList.remove('bi-play-fill');
                playBtn.classList.add('bi-pause-fill');
                rightChildren.forEach(el => el.style.visibility = 'hidden');
            } else {
                videoElement.pause();
                videoElement.style.display = 'none';
                playBtn.classList.add('bi-play-fill');
                playBtn.classList.remove('bi-pause-fill');
                rightChildren.forEach(el => el.style.visibility = 'visible');
            }
        });

        videoElement.addEventListener('ended', () => {
            videoElement.currentTime = 0;
            videoElement.play();
        });
    } else {
        // Hide play button if no trailer is available
        playBtn.style.display = 'none';
    }

    // 3. Generate Dates (Next 7 Days)
    const dateContainer = document.getElementById('date-list');
    const timeContainer = document.getElementById('time-list');
    const bookBtn = document.getElementById('book_ticket');
    const screenEl = document.getElementById('screen');
    const chairEl = document.getElementById('chair-container');
    const detailsEl = document.getElementById('det');
    const ticketWrapper = document.getElementById('ticket-wrapper');
    const backBtn = document.getElementById('back_ticket');
    dateContainer.innerHTML = '';
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let selectedDate = '';
    let selectedTime = '';
    let selectedSeats = [];

    // Generate dates dynamically starting from today
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        
        const dateStr = futureDate.toISOString().split('T')[0];
        const dayName = daysOfWeek[futureDate.getDay()];
        const dateNum = futureDate.getDate();

        const li = document.createElement('li');
        li.dataset.date = dateStr;
        li.innerHTML = `
            <h6>${dayName}</h6>
            <h6 class="date_point">${dateNum}</h6>
        `;

        li.addEventListener('click', () => {
            // Remove active classes
            document.querySelectorAll('#date-list li').forEach(el => el.querySelector('.date_point').classList.remove('h6_active'));
            li.querySelector('.date_point').classList.add('h6_active');
            
            selectedDate = dateStr;
            updateTimeSlots(dateStr);
        });

        dateContainer.appendChild(li);

        // Default select first date
        if (i === 0) {
            li.click();
        }
    }

    // 4. Update Time Slots based on Date
    function updateTimeSlots(dateStr) {
        timeContainer.innerHTML = '';
        selectedTime = '';
        selectedSeats = [];
        updateSummary();

        // Get slots for this movie or default slots
        const timeSlots = movie.slots[dateStr] || ["10:30", "14:00", "17:30", "21:00"];

        timeSlots.forEach((time, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h6>${movie.type}</h6>
                <h6 class="time_point">${time}</h6>
            `;

            li.addEventListener('click', () => {
                document.querySelectorAll('#time-list li').forEach(el => el.querySelector('.time_point').classList.remove('h6_active'));
                li.querySelector('.time_point').classList.add('h6_active');
                
                selectedTime = time;
                selectedSeats = [];
                updateSummary();
                generateSeatGrid(dateStr, time);
            });

            timeContainer.appendChild(li);

            // Default select first time slot
            if (index === 0) {
                li.click();
            }
        });
    }

    // 5. Generate Seat Grid & Mock Booking States
    // To make it look dynamic, we seed a deterministic set of booked seats based on date and time
    function getBookedSeats(dateStr, timeStr) {
        const seedStr = dateStr + timeStr + movie.title;
        let hash = 0;
        for (let i = 0; i < seedStr.length; i++) {
            hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        const booked = [];
        const totalSeats = 8 * 24; // 8 rows, 24 seats per row
        // Approximately 30% to 50% seats booked
        const percentBooked = 35 + (Math.abs(hash) % 20);
        
        for (let i = 0; i < totalSeats; i++) {
            // Use simple LCG pseudo-random generation based on seed
            const val = Math.abs(Math.sin(hash + i) * 1000) % 100;
            if (val < percentBooked) {
                booked.push(i);
            }
        }
        return booked;
    }

    const chairContainer = document.getElementById('chair-container');
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    function generateSeatGrid(dateStr, timeStr) {
        chairContainer.innerHTML = '';
        const bookedList = getBookedSeats(dateStr, timeStr);

        rows.forEach((rowLetter, rowIndex) => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';

            // Left row label
            const leftSpan = document.createElement('span');
            leftSpan.innerText = rowLetter;
            rowDiv.appendChild(leftSpan);

            // Seats
            const seatsPerRow = 24;
            const price = movie.price[rowIndex] || 500;

            for (let seatIndex = 1; seatIndex <= seatsPerRow; seatIndex++) {
                const seatNum = (rowIndex * seatsPerRow) + seatIndex;
                const seatLi = document.createElement('li');
                
                // Pad seat number like "001", "024"
                const seatLabel = seatNum.toString().padStart(3, '0');
                seatLi.innerText = seatLabel;
                
                // Add booking state
                if (bookedList.includes(seatNum)) {
                    seatLi.className = 'seat booked';
                } else {
                    seatLi.className = 'seat';
                    
                    // Click handler for available seats
                    seatLi.addEventListener('click', () => {
                        seatLi.classList.toggle('selected');
                        
                        const seatInfo = {
                            id: seatNum,
                            label: seatLabel,
                            row: rowLetter,
                            price: price
                        };

                        if (seatLi.classList.contains('selected')) {
                            selectedSeats.push(seatInfo);
                        } else {
                            selectedSeats = selectedSeats.filter(s => s.id !== seatNum);
                        }
                        updateSummary();
                    });
                }

                rowDiv.appendChild(seatLi);
            }

            // Right row label
            const rightSpan = document.createElement('span');
            rightSpan.innerText = rowLetter;
            rowDiv.appendChild(rightSpan);

            chairContainer.appendChild(rowDiv);
        });
    }

    // 6. Update Booking Summary and Action Button

    function updateSummary() {
        if (selectedSeats.length > 0) {
            bookBtn.style.display = 'unset';
        } else {
            bookBtn.style.display = 'none';
        }
    }

    // 7. Booking Ticket Receipt Generator (Requested Layout Section)
    bookBtn.addEventListener('click', () => {
        if (selectedSeats.length === 0) return;

        // Hide seat map and components
        screenEl.style.display = 'none';
        chairEl.style.display = 'none';
        detailsEl.style.display = 'none';
        bookBtn.style.display = 'none';
        
        // Show ticket display & back button
        ticketWrapper.style.display = 'block';
        if (backBtn) backBtn.style.display = 'unset';

        // Clear ticket wrapper list but keep back button
        const ticketList = document.getElementById('ticket-list');
        ticketList.innerHTML = '';

        // Formatted Date
        const dateObj = new Date(selectedDate);
        const dayNum = dateObj.getDate();
        const monthShort = months[dateObj.getMonth()].toLowerCase();
        const yearNum = dateObj.getFullYear();

        selectedSeats.forEach(seat => {
            const ticketDiv = document.createElement('div');
            ticketDiv.className = 'tic';
            
            // Generate ticket ID for barcode
            const barcodeVal = `${seat.row}${seat.label}${seat.price}${dayNum}${monthShort.toUpperCase()}${yearNum.toString().slice(-2)}`;

            ticketDiv.innerHTML = `
                <div class="barcode">
                    <div class="card">
                        <h6>ROW ${seat.row}</h6>
                        <h6>${dayNum} ${months[dateObj.getMonth()]} ${yearNum}</h6>
                    </div>
                    <div class="card">
                        <h6>Seat ${seat.label}</h6>
                        <h6>${selectedTime}</h6>
                    </div>
                    <canvas class="barcode-svg" id="barcode-${seat.id}"></canvas>
                    <h5>POPCORN PLACE</h5>
                </div>
                <div class="tic_details" style="background: url('${movie.background || movie.poster}') no-repeat center -30px /cover">
                    <div class="type">${movie.type}</div>
                    <h5 class="pvr"><span>Popcorn</span> Place</h5>
                    <h1>${movie.title}</h1>
                    <div class="seat_det">
                        <div class="seat_cr">
                            <h6>ROW</h6>
                            <h6>${seat.row}</h6>
                        </div>
                        <div class="seat_cr">
                            <h6>SEAT</h6>
                            <h6>${seat.label}</h6>
                        </div>
                        <div class="seat_cr">
                            <h6>DATE</h6>
                            <h6>${dayNum} <sub>${monthShort}</sub></h6>
                        </div>
                        <div class="seat_cr">
                            <h6>TIME</h6>
                            <h6>${selectedTime}</h6>
                        </div>
                    </div>
                </div>
            `;

            ticketList.appendChild(ticketDiv);

            // Draw Barcode after appending to DOM
            setTimeout(() => {
                if (window.JsBarcode) {
                    JsBarcode(`#barcode-${seat.id}`, barcodeVal, {
                        format: "CODE128",
                        lineColor: "#000",
                        width: 1.5,
                        height: 40,
                        displayValue: true,
                        fontSize: 10
                    });
                }
            }, 50);
        });
    });

    // 8. Back button to seating layout
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            screenEl.style.display = 'block';
            chairEl.style.display = 'block';
            detailsEl.style.display = 'flex';
            ticketWrapper.style.display = 'none';
            backBtn.style.display = 'none';
            updateSummary();
        });
    }
});

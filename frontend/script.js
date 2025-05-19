document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to Top Button
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Back to Top Button
    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Menu Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Populate RC Cars
    const rcGrid = document.querySelector('.rc-grid');
    const rcCars = [
        {
            title: "1:8 Off-Road Buggy",
            desc: "High-speed buggy with excellent suspension for jumps and rough terrain",
            img: "https://media.istockphoto.com/id/1746338411/photo/sand-dune-bashing-ofrroad-utv-rally-buggy.jpg?s=612x612&w=0&k=20&c=xmMtSIIgzNx1dOd_RzJcvLVq83y4kCY7EzqVNIyk_aU=",
            badge: "Popular"
        },
        {
            title: "1:8 Truggy",
            desc: "Perfect blend of buggy and truck with great stability and power",
            img: "https://thumbs.dreamstime.com/b/trying-to-keep-lead-boise-idaho-july-truggy-taking-off-ram-being-chased-another-racer-boise-summer-blast-points-race-74707724.jpg",
            badge: "New"
        },
        {
            title: "1:10 Short Course Truck",
            desc: "Realistic truck handling with durable body for competitive racing",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWk5WpUjRwY34LihW9Z6kcrtAqkuSRf1ooug&s",
            badge: "High star"
        }
    ];
    
    rcCars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'rc-card';
        card.innerHTML = `
            <img src="${car.img}" alt="${car.title}">
            ${car.badge ? `<span class="card-badge">${car.badge}</span>` : ''}
            <h3>${car.title}</h3>
            <p>${car.desc}</p>
        `;
        rcGrid.appendChild(card);
    });
    
    // Populate Menu Items
    const drinksMenu = document.getElementById('drinks');
    const foodMenu = document.getElementById('food');
    const combosMenu = document.getElementById('combos');
    
    const drinks = [
        { name: "Espresso", price: "$3.50",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLfQaF9syeejbpTzrWKbCKcFUSqeKS9Aqqw&s" ,desc: "Single shot of our premium espresso" },
        { name: "Cappuccino", price: "$4.00",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVG_B0Y7Z0CqjyG3l47cMau4_XUqKFgw2Kg&s", desc: "Espresso with steamed milk and foam" },
        { name: "Racer's Latte", price: "$4.50", desc: "Double shot latte with caramel drizzle" },
        { name: "Iced Coffee", price: "$4.00", desc: "Cold brew with your choice of milk" },
        { name: "Soft Drinks", price: "$2.50", desc: "Various sodas and sparkling water" }
    ];
    
    const food = [
        { name: "Breakfast Panini", price: "$6.50", desc: "Egg, cheese, and bacon on ciabatta" },
        { name: "RC Racers Sandwich", price: "$7.00", desc: "Turkey, avocado, and cranberry on sourdough" },
        { name: "Track-side Nachos", price: "$5.50", desc: "Tortilla chips with cheese, salsa, and jalapeños" },
        { name: "Power-up Cookies", price: "$2.50", desc: "Oatmeal cookies with chocolate chips and nuts" },
        { name: "Pit Stop Muffins", price: "$3.00", desc: "Freshly baked muffins daily" }
    ];
    
    const combos = [
        { name: "Racer's Combo", price: "$10.00", desc: "Any drink + RC Racers Sandwich" },
        { name: "Pit Stop Combo", price: "$8.50", desc: "Any drink + Breakfast Panini" },
        { name: "Track Day Special", price: "$15.00", desc: "Two drinks + Nachos + Cookies" }
    ];
    
    drinks.forEach(item => {
        drinksMenu.appendChild(createMenuItem(item));
    });
    
    food.forEach(item => {
        foodMenu.appendChild(createMenuItem(item));
    });
    
    combos.forEach(item => {
        combosMenu.appendChild(createMenuItem(item));
    });
    
    function createMenuItem(item) {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <div>
                <div class="item-name">${item.name}</div>
                <div class="item-desc">${item.desc}</div>
            </div>
            <div class="item-price">${item.price}</div>
        `;
        return div;
    }
    
    // Populate Booking Form Car Options
    const carSelect = document.getElementById('cars');
    const carOptions = [
        { value: "buggy", text: "1:8 Off-Road Buggy" },
        { value: "truggy", text: "1:8 Truggy" },
        { value: "short-course", text: "1:10 Short Course Truck" },
        { value: "drift", text: "1:10 Drift Car" },
        { value: "rally", text: "1:10 Rally Car" }
    ];
    
    carOptions.forEach(car => {
        const option = document.createElement('option');
        option.value = car.value;
        option.textContent = car.text;
        carSelect.appendChild(option);
    });
    
    // Populate Events
    const eventsContainer = document.querySelector('.events-container');
    const events = [
        {
            title: "Weekly Friday Night Races",
            date: "Every Friday | 7:00 PM - 10:00 PM",
            desc: "Join our weekly amateur racing league with prizes for top finishers. All skill levels welcome!",
            action: "Register Now"
        },
        {
            title: "RC Car Birthday Parties",
            date: "Available Weekends | 10:00 AM - 6:00 PM",
            desc: "Book our VIP area for birthday parties including 1 hour of private track time and food packages.",
            action: "Inquire Now"
        },
        {
            title: "Monthly Championship",
            date: "First Saturday of each month | 9:00 AM - 5:00 PM",
            desc: "Compete in our monthly championship with cash prizes and trophies for winners in each category.",
            action: "Learn More"
        }
    ];
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p class="event-date"><i class="far fa-calendar-alt"></i> ${event.date}</p>
            <p>${event.desc}</p>
            <a href="#booking" class="btn secondary">${event.action}</a>
        `;
        eventsContainer.appendChild(eventCard);
    });
    
  // Booking Form Submission
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      carType: document.getElementById('cars').value,
      duration: document.getElementById('duration').value,
      specialRequests: document.getElementById('special-requests').value
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(`Booking confirmed for ${formData.date} at ${formData.time}`);
        bookingForm.reset();
      } else {
        alert(data.msg || 'Booking failed');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Error submitting booking');
    }
  });
}
    // Set minimum date for booking to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupClose = document.getElementById('popup-close');
    const popupBox = document.querySelector('.popup-box');
    const services = document.getElementById('dropdown');

    services.style.display = 'none'
    // Show the popup when the page loads
    popupOverlay.style.display = 'flex';

    // Close the popup when the X button is clicked
    popupClose.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
        services.style.display = 'flex'
    });

    // Close the popup when clicking outside the popup box
    popupOverlay.addEventListener('click', (event) => {
        // Check if the click was outside the popup box
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
            services.style.display = 'flex'
        }
    });
});
const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.querySelector(".dropdown-menu").classList.toggle("active");
            }
        });
    });

    const dropdownSubmenus = document.querySelectorAll(".dropdown-submenu");

    dropdownSubmenus.forEach((submenu) => {
        submenu.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                submenu.querySelector(".submenu").classList.toggle("active");
            }
        });
    });


// DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');

// Toggle the nav menu on hamburger click
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});





// Service data
const services = [
    
    {
      icon: 'fa-calendar-alt',
      heading: 'Strategic Tax Planning & Advisory Services',
      description: 'Receive personalized tax planning and advisory services tailored to your needs.'
    },
    {
      icon: 'fa-user',
      heading: 'US Individual Tax Filing Services',
      description: 'Professional tax filing services for individuals in the US.'
    },
    {
      icon: 'fa-calendar',
      heading: 'Extension Tax Filing',
      description: 'Need more time? We handle extension tax filings to ensure compliance.'
    },
    {
      icon: 'fa-flag',
      heading: 'FBAR & FATCA Filing',
      description: 'Expert assistance with FBAR and FATCA filings for international compliance.'
    },
    {
      icon: 'fa-id-card',
      heading: 'ITIN Assistance',
      description: 'Support with obtaining and managing your Individual Taxpayer Identification Number (ITIN).'
    },
    {
      icon: 'fa-building',
      heading: 'Entity Formation',
      description: 'Guidance on forming entities, including LLCs, corporations, and partnerships.'
    },
    {
      icon: 'fa-briefcase',
      heading: 'Small & Medium Business Tax Services',
      description: 'Comprehensive tax services tailored for small and medium-sized businesses.'
    },
    {
      icon: 'fa-solid fa-flag',
      heading: 'Indian Tax Filing Services',
      description: 'Specialized tax filing services for individuals and businesses in India.'
    }
  ];
  
  // Function to create service cards
  function createServiceCards(services) {
    const container = document.getElementById('service-cards-container');
  
    services.forEach(service => {
      // Create card element
      const card = document.createElement('div');
      card.className = 'card';
  
      // Create icon element
      const icon = document.createElement('div');
      icon.className = 'icon';
      icon.innerHTML = `<i class="fas ${service.icon}"></i>`; // Font Awesome icon
  
      // Create heading element
      const heading = document.createElement('div');
      heading.className = 'heading';
      heading.textContent = service.heading;
  
      // Create description element
      const description = document.createElement('div');
      description.className = 'description';
      description.textContent = service.description;
  
      // Append elements to card
      card.appendChild(icon);
      card.appendChild(heading);
      card.appendChild(description);
  
      // Append card to container
      container.appendChild(card);
    });
  }
  
  // Call the function to create and display service cards
  createServiceCards(services);
  

  document.addEventListener('DOMContentLoaded', () => {
      const testimonials = [
          {
              name: "Ramashankar Tiwari",
              location: "Franklin, TN",
              feedback: "Dollar Tax Filer saved me time and money. The process was straightforward, and they helped me uncover deductions I didn't know about. A reliable and cost-effective choice for tax filing!",
              icon: "fa-user"
          },
          {
              name: "Vamsi Krishna Atluri",
              location: "Irving, TX",
              feedback: "I'm not a tax expert, but Dollar Tax Filer made me feel like one! The guidance and explanations were clear, making the entire process smooth. I appreciate the simplicity and affordability.",
              icon: "fa-user"
          },
          {
              name: "Asif Iqbal Shaik",
              location: "Phoenix, AZ",
              feedback: "As a freelancer, I need a tax service that understands my unique situation. Dollar Tax Filer not only understands but also makes it easy to navigate complex tax matters. Definitely sticking with them!",
              icon: "fa-user"
          },
          {
              name: "Supritha Subramanian",
              location: "Plano, TX",
              feedback: "I've tried several tax filing services, and Dollar Tax Filer is by far the best. The process is quick and the results are accurate. I'm a happy customer!",
              icon: "fa-user"
          },
          {
              name: "Vivek Balaji Krishnamoorthy",
              location: "CostaMesa, CA",
              feedback: "Dollar Tax Filer understands that every taxpayer is unique. They catered to my specific needs, ensuring I claimed all eligible credits. It's personalized tax filing at its best!",
              icon: "fa-user"
          },
          {
              name: "Om Prakash Shinde",
              location: "Hackensack, NJ",
              feedback: "Choosing Dollar Tax Filer was the best decision. They not only saved us money but also took the time to educate us on potential deductions. Trustworthy, reliable, and highly recommended!",
              icon: "fa-user"
          },
          {
              name: "Shivanand Gaddala",
              location: "Virginia Beach, VA",
              feedback: "Being an international student, tax season seemed daunting, but Dollar Tax Filer made the process straightforward and easy to understand. Their attention to detail and knowledge of tax regulations for students saved me time and ensured compliance.",
              icon: "fa-user"
          },
          {
              name: "Hemanth Gaikwad",
              location: "Rocky Hill, CT",
              feedback: "As a U.S. citizen, my experience with Dollar Tax Filer has been excellent. They are always available to answer my questions, provide clear explanations, and ensure I stay compliant with tax regulations.",
              icon: "fa-user"
          },
          {
              name: "Pritam Mukherjee",
              location: "Brownsville, TX",
              feedback: "As a first-time filer, Dollar Tax Filer made the entire process incredibly easy and stress-free. Very professional and saved me money.",
              icon: "fa-user"
          },
          {
              name: "Ramashankar Tiwari",
              location: "Franklin, TN",
              feedback: "Dollar Tax Filer saved me time and money. The process was straightforward, and they helped me uncover deductions I didn't know about. A reliable and cost-effective choice for tax filing!",
              icon: "fa-user"
          },
          {
              name: "Vamsi Krishna Atluri",
              location: "Irving, TX",
              feedback: "I'm not a tax expert, but Dollar Tax Filer made me feel like one! The guidance and explanations were clear, making the entire process smooth. I appreciate the simplicity and affordability.",
              icon: "fa-user"
          },
          {
              name: "Asif Iqbal Shaik",
              location: "Phoenix, AZ",
              feedback: "As a freelancer, I need a tax service that understands my unique situation. Dollar Tax Filer not only understands but also makes it easy to navigate complex tax matters. Definitely sticking with them!",
              icon: "fa-user"
          },
          {
              name: "Supritha Subramanian",
              location: "Plano, TX",
              feedback: "I've tried several tax filing services, and Dollar Tax Filer is by far the best. The process is quick and the results are accurate. I'm a happy customer!",
              icon: "fa-user"
          },
          {
              name: "Vivek Balaji Krishnamoorthy",
              location: "CostaMesa, CA",
              feedback: "Dollar Tax Filer understands that every taxpayer is unique. They catered to my specific needs, ensuring I claimed all eligible credits."
          }
      ];

    const container = document.getElementById('accordion-container');

    testimonials.forEach((testimonial, index) => {
        const item = document.createElement('div');
        item.className = 'accordion-item';

        item.innerHTML = `
            <div class="accordion-header">
                <i class="fa-solid fa-plus accordion-icon"></i>
                  ${testimonial.location} - ${testimonial.name}
            </div>
            <div class="accordion-content">
                <p class="feedback">${testimonial.feedback}</p>
                <p class="name">${testimonial.name}</p>
                <p class="location">${testimonial.location}</p>
            </div>
        `;

        container.appendChild(item);
    });

    // Add event listeners for accordion functionality
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            // Close all open accordions
            document.querySelectorAll('.accordion-content').forEach(accContent => {
                accContent.classList.remove('show');
            });
            document.querySelectorAll('.accordion-header').forEach(accHeader => {
                accHeader.classList.remove('active');
            });

            // Toggle the clicked accordion
            if (!isActive) {
                content.classList.add('show');
                header.classList.add('active');
            }
        });
    });
});


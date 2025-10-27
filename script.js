 // Plan selection tracking
        document.addEventListener('DOMContentLoaded', function() {
            // Track which plan user selects
            const planButtons = document.querySelectorAll('.select-plan');
            const confirmSection = document.getElementById('selected-plan-section');
            const selectedPlanText = document.getElementById('selected-plan-text');
            const whatsappLink = document.getElementById('whatsapp-link');
            
            planButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const planName = this.getAttribute('data-plan');
                    const planPrice = this.getAttribute('data-price');
                    
                    // Store in localStorage
                    localStorage.setItem('selectedPlan', planName);
                    localStorage.setItem('selectedPrice', planPrice);
                    
                    // Update confirmation section
                    selectedPlanText.textContent = `${planName} (${planPrice})`;
                    
                    // Update WhatsApp message
                    updateWhatsAppMessage(planName, planPrice);
                    
                    // Show confirmation section
                    confirmSection.style.display = 'block';
                    
                    // Scroll to confirmation
                    confirmSection.scrollIntoView({ behavior: 'smooth' });
                });
            });
            
            function updateWhatsAppMessage(planName, planPrice) {
                const message = `Hi! I want to join your VIP group. I've selected the ${planName} (${planPrice}) plan. I am ready to pay.`;
                const encodedMessage = encodeURIComponent(message);
                whatsappLink.href = `https://wa.me/2347087980174?text=${encodedMessage}`;
            }
            
            // Check if there's a previously selected plan
            const savedPlan = localStorage.getItem('selectedPlan');
            const savedPrice = localStorage.getItem('selectedPrice');
            
            if (savedPlan && savedPrice) {
                selectedPlanText.textContent = `${savedPlan} (${savedPrice})`;
                updateWhatsAppMessage(savedPlan, savedPrice);
                confirmSection.style.display = 'block';
            }
            
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Animation on scroll
            function animateOnScroll() {
                const elements = document.querySelectorAll('.fade-in-up');
                
                elements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('fade-in-up');
                    }
                });
            }
            
            // Initial check
            animateOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', animateOnScroll);
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
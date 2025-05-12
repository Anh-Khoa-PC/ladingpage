document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng lướt chuột cho các phần
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            this.style.transform = 'scale(1.05)'; // Phóng to khi lướt chuột
            this.style.opacity = '2'; // Làm mờ khi lướt chuột
        });

        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)'; // Trở về kích thước ban đầu
            this.style.opacity = '10'; // Trở về độ mờ ban đầu
        });
    });

    // Cuộn mượt cho các liên kết anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Tính toán cho header cố định
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hiệu ứng fade-in cho các phần tử khi cuộn
    const fadeElements = document.querySelectorAll('.section-heading, .rule-card, .project-card, .team-member');

    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    // Kiểm tra ban đầu
    fadeInOnScroll();
    // Kiểm tra khi cuộn
    window.addEventListener('scroll', fadeInOnScroll);

    // Xử lý gửi biểu mẫu email
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');

            if (emailInput.value) {
                alert('Cảm ơn bạn đã đăng ký với: ' + emailInput.value);
                emailInput.value = '';
            }
        });
    }

    // Hiệu ứng lướt chuột cho các liên kết xã hội
    const socialLinks = document.querySelectorAll('.social-item a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Hiệu ứng lướt chuột cho các thẻ dự án
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(0.98)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Hiệu ứng lướt chuột cho các thẻ quy tắc
    const ruleCards = document.querySelectorAll('.rule-card');
    ruleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

    // Add hover effects for social links
    const socialLinks = document.querySelectorAll('.social-item a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(0.98)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Rule card hover effect
    const ruleCards = document.querySelectorAll('.rule-card');
    ruleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
// It seems like the $SELECTION_PLACEHOLDER$ is misplaced or unnecessary.
// If you intended to close a block, ensure the correct placement of the closing brace.



document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('show');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close mobile menu when clicking on a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 200) {
            navbar.classList.add('scrolled');
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.classList.add('scrolled');
            navbar.style.transform = 'translateY(0)';
        }

        if (window.scrollY <= 50) {
            navbar.classList.remove('scrolled');
        }

        lastScrollY = window.scrollY;
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        carouselItems.forEach(item => {
            item.classList.remove('active');
        });

        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show the selected slide and set the active dot
        carouselItems[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Event listeners for carousel navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = currentSlide === 0 ? carouselItems.length - 1 : currentSlide - 1;
            showSlide(currentSlide);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = currentSlide === carouselItems.length - 1 ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        });
    }

    // Add click event to dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-index'));
            showSlide(slideIndex);
        });
    });

    // Auto-advance the carousel every 5 seconds
    let carouselInterval = setInterval(() => {
        if (carouselItems.length > 0) {
            currentSlide = currentSlide === carouselItems.length - 1 ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        }
    }, 5000);

    // Pause carousel on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(() => {
                currentSlide = currentSlide === carouselItems.length - 1 ? 0 : currentSlide + 1;
                showSlide(currentSlide);
            }, 5000);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
                body.classList.remove('light-theme');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.add('light-theme');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    // Scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    };

    // Fade-in animations
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        fadeObserver.observe(el);
    });

    // Slide-in animations
    const slideLeftObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                slideLeftObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-in-left').forEach(el => {
        slideLeftObserver.observe(el);
    });

    const slideRightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                slideRightObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-in-right').forEach(el => {
        slideRightObserver.observe(el);
    });

    // Zoom-in animations
    const zoomObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                zoomObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.zoom-in').forEach(el => {
        zoomObserver.observe(el);
    });

    // Add animation classes to sections and elements
    document.querySelectorAll('section').forEach((section, index) => {
        if (!section.classList.contains('fade-in') &&
            !section.classList.contains('slide-in-left') &&
            !section.classList.contains('slide-in-right') &&
            !section.classList.contains('zoom-in')) {
            section.classList.add('fade-in');
            fadeObserver.observe(section);
        }
    });

    // Add animation to feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        fadeObserver.observe(card);
    });

    // Add animation to target items
    document.querySelectorAll('.target-item').forEach((item, index) => {
        item.classList.add('slide-in-right');
        item.style.transitionDelay = `${index * 0.1}s`;
        slideRightObserver.observe(item);
    });

    // Form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            if (input.value.trim() !== '') {
                alert('Thanks for subscribing! We\'ll keep you updated on the latest news.');
                input.value = '';
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const mobileNavBtn = document.querySelector('.mobile-nav-btn');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu khi nhấn vào nút hamburger
    if (mobileNavBtn && navLinks) {
        mobileNavBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            mobileNavBtn.classList.toggle('active');
        });

        // Đóng menu khi nhấn vào một liên kết
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                mobileNavBtn.classList.remove('active');
            });
        });
    }

    // Smooth scroll cho các liên kết anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Trừ đi chiều cao của header cố định
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hiệu ứng fade-in khi cuộn
    const fadeElements = document.querySelectorAll('.section-heading, .rule-card, .project-card, .team-member');

    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    // Kiểm tra ban đầu và khi cuộn
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);
});
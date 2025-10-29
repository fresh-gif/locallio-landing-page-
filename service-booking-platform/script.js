// Business Registration Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Locallio Modern Edition Loaded!');
    
    // Modal elements
    const modal = document.getElementById('registrationModal');
    const registerBtn = document.getElementById('registerBusinessBtn');
    const closeBtn = document.querySelector('.close');
    const businessForm = document.getElementById('businessForm');
    
    // Open modal when Register button is clicked
    registerBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Handle form submission
    businessForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            businessName: document.getElementById('businessName').value,
            businessType: document.getElementById('businessType').value,
            location: document.getElementById('location').value,
            idNumber: document.getElementById('idNumber').value,
            idDocument: document.getElementById('idDocument').files[0]?.name,
            proofOfAddress: document.getElementById('proofOfAddress').files[0]?.name,
            apiKey: document.getElementById('apiKey').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };
        
        // Simple validation
        const requiredFields = ['businessName', 'businessType', 'location', 'idNumber', 'email', 'phone'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        
        if (missingFields.length > 0) {
            alert('Please fill in all required fields marked with *.');
            return;
        }
        
        // Check file uploads
        const idDocument = document.getElementById('idDocument').files[0];
        const proofOfAddress = document.getElementById('proofOfAddress').files[0];
        
        if (!idDocument || !proofOfAddress) {
            alert('Please upload both ID document and proof of address.');
            return;
        }
        
        // Simulate form submission
        console.log('Business Registration Submitted:', formData);
        
        // Show success message
        alert('✅ Thank you! Your business registration has been submitted successfully.\n\nVerification typically takes 24-48 hours. You will receive your vendor API key via email once approved.');
        
        // Reset form and close modal
        businessForm.reset();
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to features on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe features for animation
    document.querySelectorAll('.feature').forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transition = 'all 0.6s ease';
        observer.observe(feature);
    });
});
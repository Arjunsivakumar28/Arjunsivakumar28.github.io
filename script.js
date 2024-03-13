console.log("start")

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.getElementById("scrollToTopBtn").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.getElementById("scrollToBottomBtn").addEventListener("click", function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active')
            const details = this.nextElementSibling;
            details.classList.toggle('active');
        });
    });

    const resumePreview = document.getElementById('resume-preview');

    resumePreview.addEventListener('click', function() {
        const pdfSrc = resumePreview.querySelector('embed').src;
        window.open(pdfSrc, '_blank');
    });
    
});
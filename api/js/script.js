document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'rotateX(20deg) rotateY(20deg)';
    });
    card.addEventListener('mouseout', function() {
        this.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 4px 8px 0 rgba(255, 255, 255, 0.5), 0 6px 20px 0 rgba(255, 255, 255, 0.5)';
    });
    card.addEventListener('mouseout', function() {
        this.style.boxShadow = 'none';
    });
});

document.getElementById('showMoreProjects').addEventListener('click', function() {
    var extraProjects = document.getElementById('card-container');
    extraProjects.style.display = extraProjects.style.display === 'none' ? 'flex' : 'none';
});


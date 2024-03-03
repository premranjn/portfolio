// Smooth scrolling function
function smoothScroll(targetId) {
    var targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}

// Add event listener to the link
document.getElementById('my-name').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    smoothScroll('about-me');
});

document.getElementById('reachout-button').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    smoothScroll('reach-out');
});

document.getElementById('projects').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    smoothScroll('my-projects');
});

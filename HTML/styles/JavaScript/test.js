document.addEventListener('DOMContentLoaded', function () {
    function signIn(event) {
        event.preventDefault();
        var emailInput = document.querySelector('input[name="email"]');
        var passwordInput = document.querySelector('input[name="password"]');
        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            return;
        }
        if (passwordInput.value.trim() === '') {
            alert('Please enter your password.');
            return;
        }
        console.log('Email:', emailInput.value);
        console.log('Password:', passwordInput.value);
        emailInput.value = '';
        passwordInput.value = '';
    }

    var signInForm = document.querySelector('.sign-in form');
    signInForm.addEventListener('submit', signIn);

    var carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var blogTitle = item.querySelector('h3').textContent;
            console.log('Clicked on blog:', blogTitle);
        });
    });
});

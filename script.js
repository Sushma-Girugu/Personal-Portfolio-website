function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Message Sent Successfully!");

        form.reset();

    });

});
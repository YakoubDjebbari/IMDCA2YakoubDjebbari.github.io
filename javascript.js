// to clear contact form when submit
function clearcontact() {
    document.getElementById("contactform").reset();
}

$(document).ready(function () {
    var typed = new Typed(".type-letter", {
        strings: ["Backend Developer", "Programmer", "Web Developer", "Student", "Frontend Developer", "QA Software", "Technology Enthusiast"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
});

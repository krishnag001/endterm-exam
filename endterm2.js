const nameInputs = document.querySelectorAll("input[name='name']");
const emailInputs = document.querySelectorAll("input[name='email']");
const numberInputs = document.querySelectorAll("input[name='number']")
const forms = document.querySelectorAll(".cta")
const heroText = document.querySelector(".hero_content")

forms.forEach((form, index) => {
    form.addEventListener("submit", (e) => handleSubmit(e, index));
})

function handleSubmit(e, instance) {
    e.preventDefault();

    let name = nameInputs[instance].value;
    let email = emailInputs[instance].value;
    let number = numberInputs[instance].value;

    alert(`Your name is ${name}`)

    if (!isValidNumber(number)) {
        alert("Your number is invalid")
    }

    if (!isValidEmail(email)) {
        alert("Please enter your official mail id")
        return;
    }

    heroText.innerText = `Thank you ${name} for sharing your details. We will reach out to you on on your mail id : ${email}`;
}

function isValidNumber(number) {
    return number.length === 10;
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    const prohibitedDomains = ['gmail.com', 'hotmail.com', 'yahoo.com'];

    const domain = email.substring(email.lastIndexOf('@') + 1);

    return !prohibitedDomains.includes(domain)
}


// Testimonials
testimonialImages = document.querySelectorAll(".testimonial_images > img");
testimonials = document.querySelectorAll(".testimonial");

testimonialImages.forEach((image, index) => {
    image.addEventListener("click", () => handleTestimonialChange(index));
})

function handleTestimonialChange(index) {
    testimonialImages.forEach(image => {
        image.setAttribute("data-active-img", "false");
    })
    testimonialImages[index].setAttribute("data-active-img", "true");

    testimonials.forEach(testimonial => {
        testimonial.setAttribute("data-active", "false");
    })
    testimonials[index].setAttribute("data-active", "true");
}
const lenis = new Lenis({
    autoRaf: true,
});

const bottomToTopScroll = document.getElementById("bottomToTopScroll");
const whatsapp = document.getElementById("whatsapp");

bottomToTopScroll.innerHTML = `
<div
    class="bottomToTop fadeIn w-10 cursor-pointer z-40 bg-[#1e5b5a] h-10 fixed bottom-5 right-5 hover:opacity-80 transition-all duration-500 hidden text-zinc-100 flex items-center justify-center rounded-lg "><i class="fa-solid fa-angle-up"></i>
</div>`

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".bottomToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            whatsapp.style.display = "flex";
        } else {
            whatsapp.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

AOS.init({
    once: true,
    duration: 1000
});

// loader

let loaderStartTime = 0;

function showLoader() {
    const loader = document.getElementById('global-loader');
    loader.classList.remove('hidden');
    requestAnimationFrame(() => loader.classList.add('opacity-100'));
    loaderStartTime = Date.now();
}

function hideLoader() {
    const loader = document.getElementById('global-loader');
    const elapsed = Date.now() - loaderStartTime;
    const remainingTime = 500 - elapsed; // ensure at least 0.5s

    setTimeout(() => {
        loader.classList.remove('opacity-100');
        setTimeout(() => loader.classList.add('hidden'), 300); // wait for fade-out
    }, Math.max(0, remainingTime));
}

// Example usage:
showLoader();
// simulate some async task (like fetch or form submission)
setTimeout(() => {
    hideLoader();
}, 200); // even if task is fast, loader will stay at least 0.5s

// contact
const form = document.getElementById('contact-form');
const successPopup = document.getElementById('success-popup');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Stop default form submission

    const formData = new FormData(form);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            // Show success popup
            successPopup.classList.remove('hidden');

            // Hide after 3 seconds
            setTimeout(() => {
                successPopup.classList.add('hidden');
            }, 3000);

            // Reset form
            form.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error(error);
        alert('Error while submitting form.');
    }
});
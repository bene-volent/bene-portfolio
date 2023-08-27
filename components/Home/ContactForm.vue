<template>
    <form ref="contactForm" aria-label="Contact" class="contactForm" @submit.prevent="handleFormSubmit">
        <div class="contactForm-group"><label for="cta1" class="contactForm-label">Your Name</label><input
                class="contactForm-input" placeholder=" " autocapitalize="words" autocomplete="off" ref="contactFormName"
                type="text" name="name" id="cta1" required>
        </div>
        <div class="contactForm-group"><label for="cta2" class="contactForm-label">Your Email</label><input
                class="contactForm-input" placeholder=" " autocomplete="off" ref="contactFormEmail" type="email"
                name="email" id="cta2" required>
        </div>
        <div class="contactForm-group"><label for="message" class="contactForm-label">Your Message</label><textarea
                class="contactForm-input contactForm-message" ref="contactFormMessage" name="message" id="message"
                maxlength="400" placeholder=" " autocomplete="off" cols="30" rows="8"></textarea></div>
        <button ref="contactSubmit" class="contactForm-submit" type="submit">
            <span class="[ button-message ] [ default ] ">
                <span class="submit-message">Send Message</span>
                <Icon name="akar-icons:send" class="submit-icon" />
            </span>
            <span class="[ button-message ] [ done ] ">
                <span class="submit-message">Thank you</span>
                <Icon name="mdi:like" class="submit-icon" />
            </span>
        </button>
    </form>
</template>

<script setup>
import { useLocalStorage } from '@vueuse/core';

let contactForm = ref(null)
let contactFormName = ref(null)
let contactFormEmail = ref(null)
let contactFormMessage = ref(null)
let contactSubmit = ref(null)

let submittedEmail = useLocalStorage("bene-portfolio-email", false)

const handleFormSubmit = (event) => {
    const data = {
        name: contactFormName.value.value,
        email: contactFormEmail.value.value,
        message: contactFormMessage.value.value,
    }
    const query = `name=${data.name}&email=${data.email}&message=${data.message}`
    if (!submittedEmail.value || submittedEmail.value === "false") {
        submittedEmail.value = true;
        $fetch(`/api/notify-email?${query}`)
        contactSubmit.value.dataset.submit = true

    }
    else {
        alert("You have already sent an email!\nIf you want to faster communication, try connecting on LinkedIn")
    }
};
</script>


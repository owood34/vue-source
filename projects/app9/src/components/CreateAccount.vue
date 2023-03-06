<script setup>
import { ref, watch } from "vue";

const html = ref({
    user: ref(null),
    password: ref(null),
    password2: ref(null),
    email: ref(null),
    phone: ref(null),
    profile: ref(null)
})

const user = ref('')
const password = ref('')
const password2 = ref('')
const email = ref('')
const phone = ref('')

const error_user = ref(null)
const error_password = ref(null)
const error_password2 = ref(null)
const error_email = ref(null)
const error_phone = ref(null)

let profile = null;

const disabled = ref(true)

const password_length = 8


// Username Watcher
watch(user, () => {
    error_user.value.innerHTML = (user.value.length > 4) ? "&nbsp;" : "Invalid Username length"
})

// Passord 1 Watcher
watch(password, () => {
        // error_password.value.innerHTML = (password.value.length >= 8) ? "&nbsp;" : "Invalid Password"
        let array = [...password.value]
        let requirements = {
            punct: false,
            lower: false,
            upper: false,
            length: array.length >= password_length
        }

        array.forEach((c) => {
            requirements.punct = (specialCharacter(c) && !requirements.punct) ? true : requirements.punct
            requirements.lower = (c === c.toLowerCase() && !requirements.lower && !specialCharacter(c)) ? true : requirements.lower
            requirements.upper = (c === c.toUpperCase() && !requirements.upper && !specialCharacter(c)) ? true : requirements.upper
        })

        if (!requirements.length) { 
            error_password.value.innerHTML = "Requires 8 characters in Password"
        } else if (!requirements.punct) {
            error_password.value.innerHTML = "Requires at least 1 Punctuation in the Password"
        } else if (!requirements.lower) {
            error_password.value.innerHTML = "Requires at least 1 lowercase letter in the Password"
        } else if (!requirements.upper) {
            error_password.value.innerHTML = "Requires at least 1 uppercase letter in the Password"
        } else {
            error_password.value.innerHTML = "&nbsp;"
        }
        
    }
)

// Passord 2 Watcher
watch([password, password2], () => 
    error_password2.value.innerHTML = (password.value === password2.value) ? "&nbsp;" : "Does not match Password above"
)

// Email Watcher
watch (email, () => 
    error_email.value.innerHTML = (email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) 
        ? "&nbsp;" : "Invalid Email"
)

// Phone Watcher
watch(phone, () =>
    error_phone.value.innerHTML = (phone.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) 
    ? "&nbsp;" : "Invalid Phone Number Format: (###-###-####)"
)

watch([user, password, password2, email, phone], () => {
    disabled.value = disable()
})  
//onMounted(() => user.value.focus())

function specialCharacter(character) {
    let str = "" + character;
    return str.match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g);
}

function loadImage(evt) {
    profile = evt.target.files[0];
    let reader = new FileReader()
    reader.onloadend = function () {
        let img = document.querySelector("#preview_img")
        img.src = reader.result
    }
    reader.readAsDataURL(profile)
}

function disable() {
    if (error_user.value != null && error_password.value != null && error_password2.value != null && error_email.value != null && error_phone.value != null) {
        return !(error_user.value.innerHTML === "&nbsp;" 
        && error_user.value.innerHTML === error_password.value.innerHTML 
        && error_password.value.innerHTML === error_password2.value.innerHTML 
        && error_password2.value.innerHTML === error_email.value.innerHTML 
        && error_email.value.innerHTML === error_phone.value.innerHTML)
    }
    return true;
}

function submit() {
    alert("Successfully created new account! \nWelcome " + user.value)
}


</script>

<template>
    <div id="body">
        <fieldset>
            <legend>Create Account </legend>
            <div>
                <label for="username"> Username *</label>
                <input ref="html.value.user" id="username" v-model="user" type="text" /> <br>
                <span ref="error_user" id="error_user"></span> <br>

                <label for="password1"> Password *</label>
                <input ref="html.value.password" id="password1" v-model="password" type="password" minlength="8" /> <br>
                <span ref="error_password" id="error_password"></span> <br>

                <label for="password2"> Retype Password *</label>
                <input ref="html.value.password2" id="password2" v-model="password2" type="password" minlength="8" /> <br>
                <span ref="error_password2" id="error_password2"> </span> <br>

                <label for="email"> Email *</label>
                <input ref="html.value.email" id="email" v-model="email" type="text" /> <br>
                <span ref="error_email" id="error_email"> </span> <br>

                <label for="phone"> Phone Number *</label>
                <input ref="html.value.phone" id="phone" v-model="phone" type="text" /> <br>
                <span ref="error_phone" id="error_phone"> </span> <br>

                <label for="profile"> Profile </label>
                <input type="file" accept="image/png, image/jpeg" name="avatar" @change="loadImage" /> <br>
                <img id="preview_img"> <br>

                <button @click="submit" class="btn" type="button"
                        v-bind:disabled="disabled">Create</button>
            </div>
        </fieldset>
    </div>
</template>

<style>

#body {
    position: absolute;
    width: 450px;
    top: 15vh;
    right: 40vw;
}

fieldset {
    border: 4px lightblue solid;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: darkblue
}

#username {
    position: relative;
    right: -48px;
}

#password1 {
    position: relative;
    right: -52px;
}

#email {
    position: relative;
    right: -81px;
}

#phone {
    position: relative;
    right: -18px;
}

label {
    margin: 10px;
    padding-right: 10px;
}

img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
}

span {
    position: relative;
    color: red;
    right: -55px;
}

</style>
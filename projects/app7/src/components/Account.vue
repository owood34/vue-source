<script setup>
import { ref, reactive } from "vue";

const user = reactive({
  name: {
    first: "",
    last: "",
  },
  email: "",
  color: "",
  size: "",
  quantity: "",
  date: "",
  address: {
    street: "",
    street2: "",
    city: "",
    zip: "",
  },
});

const pictures = reactive({
  blue: "blue.jpg",
  green: "green.jpg",
  yellow: "yellow.jpg",
});

function submit() {
  console.log("User data: ");
  let userObj = { ...user };
  console.log(userObj);
  let jsonString = JSON.stringify(user);
  console.log(jsonString);
  let jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);
}
</script>

<template>
  <div id="body">
    <h3>Create an Account</h3>
    <fieldset id="fieldset">
      <label for="firstName">Name </label>
      <input id="firstName" type="text" v-model="user.name.first" required />
      <input id="lastName" type="text" v-model="user.name.last" required />
      <br>

      <label for="email">Email </label>
      <input id="email" type="email" v-model="user.email" required />
      <br>

      <label for="shirt"> T-shirt model </label>
      <input
        id="shirt"
        type="radio"
        name="t-shirt"
        value="blue"
        v-model="user.color"
      /><img :src="pictures.green" />
      <input
        id="shirt"
        type="radio"
        name="t-shirt"
        value="yellow"
        v-model="user.color"
      /><img :src="pictures.yellow">
      <input
        id="shirt"
        type="radio"
        name="t-shirt"
        value="green"
        v-model="user.color"
        checked
      /><img :src="pictures.blue" />
      <br>

      <label for="size"> Size </label>
      <select id="sizes" name="size" v-model="user.size" required>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>

      <br>

      <label for="delivery">Delivery Date </label>
      <input
        id="delivery"
        name="delivery"
        type="date"
        value="2017-03-15"
        min="2017-01-01"
        max="2023-02-06"
      />
      <br>
      <div id="Address">
        <label for="Address"> Delivery Address </label> <br />
        <div id="fields">
          <input
            id="street"
            name="street"
            type="text"
            v-model="user.address.street"
            required
          />
          <br />
          <input
            id="street2"
            name="street2"
            type="text"
            v-model="user.address.street2"
          />
          <br />
          <input
            id="city"
            name="city"
            type="type"
            v-model="user.address.city"
            required
          />
          <br>
          <input
            id="zipcode"
            name="zipcode"
            type="type"
            v-model="user.address.zip"
            required
          />
          <br>
        </div>
      </div>
      <button id="button" class="btn" type="button" @click="submit">
        Purcahse
      </button>
    </fieldset>
  </div>
</template>


<style>
#body {
  display: inline-grid;

  grid-template-areas: 
    'header header header header header header header header header header header header'
    'label label . . . . firstName . . . . lastName'
    'label label . . . . email . . . . .'
    'label label . . . . greenShirt . yellowShirt . blueShirt .'
    'label label . . . . sizes . . . . .'
    'label label . . . . delivery . . . . .'
    'Address . . . . . . . . . . .'
    '. . . . . . street street street street street street'
    '. . . . . . street2 street2 street2 street2 street2 street2'
    '. . . . . . city city city city city city'
    '. . . . . . zip zip zip zip zip zip zip' 
    '. . . . . . . . . . . purchase';

  background-color: rgb(15, 202, 15);
  border-radius: 5px;
  color: black;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  padding: 10px;
}

h3 {
  color: white;
}

#fieldset {
  background-color: white;
}

input {
  grid-area: input;
}

label {
  grid-area: label;
}

#firstName {
  grid-area: firstName;
}

#lastName {
  grid-area: lastName;
}

#blue {
  grid-area: blueShirt;
}

#yellow {
  grid-area: yellowShirt;
}

#green {
  grid-area: greenShirt;
}

img {
  height: 80%;
}

#sizes {
  grid-area: sizes;
}

#Address {
  grid-area: Address;
}

#delivery {
  grid-area: delivery
}
#street {
  grid-area: street;
}

#street2 {
  grid-area: street2;
}

#city {
  grid-area: city;
}
#zipCode {
  grid-area: zip;
}
button {
  grid-area: purchase;
  background-color: rgb(15, 202, 15);
}
</style>
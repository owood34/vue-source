<script setup>
import {ref} from 'vue'

const comp_two = ref({
    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie enim ac lorem sagittis auctor. In vulputate at orci at mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean egestas egestas diam eget eleifend. Etiam maximus tempus justo, non commodo leo feugiat nec. Vivamus eu est ultrices, vestibulum nunc nec, auctor massa. Quisque sollicitudin, sem dapibus malesuada luctus, tellus turpis egestas nisl, nec sollicitudin mi quam tempor magna. Nam dignissim, leo et sagittis blandit, enim risus maximus diam, a volutpat eros tortor at diam. Donec scelerisque malesuada ante. Pellentesque ultricies tortor eget diam sodales venenatis. Suspendisse laoreet purus elementum arcu venenatis, in euismod lacus luctus. Proin feugiat eros semper lacus luctus fermentum. Maecenas id elementum felis. Nulla pharetra nec odio non volutpat. Nullam venenatis lectus quis lectus finibus, sit amet hendrerit dui malesuada.",
    para2: "Morbi placerat eleifend ultrices. Morbi tristique fermentum massa vitae posuere. In vel tempor nulla. Aliquam consectetur, leo vitae luctus vulputate, lorem neque molestie sem, sit amet finibus felis sapien ut ligula. Integer est nulla, suscipit a risus in, egestas porta quam. Maecenas porta leo velit, a dignissim nisi faucibus vitae. Nullam lectus velit, feugiat quis metus eu, cursus lacinia felis. Cras lacus augue, sollicitudin a vehicula et, dictum eget libero. Nullam tellus ante, dictum eget sagittis non, volutpat in urna. Etiam diam diam, placerat at purus vitae, lacinia pellentesque risus. Quisque semper lorem augue, ac dictum turpis viverra at. Etiam mauris orci, laoreet et velit eu, pulvinar lobortis metus. Sed consectetur libero id leo gravida laoreet eu non dui. Curabitur egestas purus id consequat rutrum.",
    para3: "Mauris tristique tempus massa non facilisis. Pellentesque aliquam efficitur consequat. Etiam tincidunt tempor magna, vel ornare odio facilisis vitae. Ut porttitor eu nisi quis commodo. Maecenas orci enim, tempus id magna in, feugiat sodales neque. Cras efficitur tincidunt metus, suscipit dapibus enim maximus a. Nulla facilisi. Aenean risus ante, lacinia et leo dignissim, pretium porttitor dui. Morbi vel placerat ipsum. Maecenas a sagittis nibh. Nam sollicitudin mauris ac tempor faucibus.",
})

const color = ref("blue")

function colorButton() {
    color.value = (color.value === "blue") ? "red" : "blue"
    document.body.style.setProperty('--style', color.value)
}

</script>

<template>
    <div>
        <button @click="colorButton()">{{"Is this the button? : " + color + ""}}</button>
        <p :class="color"> 
            {{comp_two.para1}} <br><br>
            {{comp_two.para2}} <br><br>
            {{comp_two.para3}} <br><br>
        </p>
    </div>
</template>

<style>
    :root {
        --style: blue;
    }
    img {
        border: 10px solid var(--style);
    }
    p {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin: 40px;
    }
    .red {
        color: blue;
    }
    .blue {
        color: red;
    }
    button {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        border: none;
        background: none;
        border-bottom: 1px solid black;
        margin: 15px;
        transform: translate(1vw, 0vh);
    }
</style>
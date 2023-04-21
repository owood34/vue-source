import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const skin = [
    'black',
    'gray',
    'yellow',
    'orange',
    'red',
    'blue',
    'purple',
    'pink'
  ]

  const body = [
    'medium',
    'thick',
    'thicc',
    'thin',
    'smol'
  ]

  const face = [
    'surprised',
    'laughing',
    'smile',
    'silly',
    'devious',
    'queasy',
    'grin',
    'crying',
    'none'
  ]

  const hats = [
    'top',
    'sleepy',
    'pilgrim',
    'jester',
    'mariachi',
    'bycocket',
    'none'
  ]

  const torso = [
    'buttonup',
    'flannel',
    'hawaiian',
    'pajamas',
    'tanktop',
    'tshirt',
    'None'
  ]

  const pants = [
    'pajamas',
    'pinky',
    'shorts',
    'trousers',
    'gangsta',
    'None'
  ]

  const shoes = [
    'fancy',
    'bright',
    'converse',
    'little',
    'tennis',
    'None'
  ]

  let counter = [0,0,0,0,0,0,0]

  const looping = {
    skin_loop: () => {
      counter[0] = (counter[0] < skin.length - 1) ? ++counter[0] : 0
      return skin[counter[0]]
    },
    body_loop: () => {
      counter[1] = (counter[1] < body.length - 1) ? ++counter[1] : 0
      return body[counter[1]]
    },
    face_loop: () => {
      counter[2] = (counter[2] < face.length - 1) ? ++counter[2] : 0
      return face[counter[2]]
    },
    hat_loop: () => {
      counter[3] = (counter[3] < hats.length - 1) ? ++counter[3] : 0
      return hats[counter[3]]
    },
    torso_loop: () => {
      counter[4] = (counter[4] < torso.length - 1) ? ++counter[4] : 0
      return torso[counter[4]]
    },
    pant_loop: () => {
      counter[5] = (counter[5] < pants.length - 1) ? ++counter[5] : 0
      return pants[counter[5]]
    },
    shoe_loop: () => {
      counter[6] = (counter[6] < shoes.length - 1) ? ++counter[6] : 0
      return shoes[counter[6]]
    }
  }

  const functions = {
    body: () => {
      switch (body[counter[1]]) {
        case body[0]:
          return 10;
        case body[1]:
          return 20;
        case body[2]:
          return 40;
        case body[3]:
          return 5;
        case body[4]:
          return 1;
        default:
          return 10;
      }
    }
  }

  const menu = {
    skin: ref({
      name: "Skin",
      value: skin[0].charAt(0).toUpperCase() + skin[0].slice(1)
    }),
    body: ref({
      name: "Body",
      value: body[0].charAt(0).toUpperCase() + body[0].slice(1)
    }),
    face: ref({
      name: "Face",
      value: face[0].charAt(0).toUpperCase() + face[0].slice(1)
    }),
    hat: ref({
      name: "Hats",
      value: hats[0].charAt(0).toUpperCase() + hats[0].slice(1)
    }),
    torso: ref({
      name: "Torso",
      value: torso[0].charAt(0).toUpperCase() + torso[0].slice(1)
    }),
    pants: ref({
      name: "Pants",
      value: pants[0].charAt(0).toUpperCase() + pants[0].slice(1)
    }),
    shoes: ref({
      name: "Shoes",
      value: shoes[0].charAt(0).toUpperCase() + shoes[0].slice(1)
    })
  }


  return { menu, looping, functions, skin }
})
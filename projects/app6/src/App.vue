<template>
  <div id="body">
    <label for="story"> What is your story? </label>
    <textarea id="story" name = "story" row="15" cols="40"></textarea>
    
    <fieldset>
      <legend> Is this a true story? </legend>
      <div>
        <input type="radio" id="radio_true" name="radio" value="Yes">
        <label for="radio_truth" id="radio_true">Yes</label>
      </div>
      <div>
        <input type="radio" id="radio_false" name="radio" value="No">
        <label for="radio_false" id="radio_false">No</label>
      </div>
    </fieldset>
    
    <label for="dateTime" id="dateTime">When did your story take place? </label>
    <input type="datetime-local" id="dateTime" 
      name="dateTime" value="2023-01-30T14:00" 
      min="2000-01-01T00:00" max="2030-01-01T00:00">
      
    <input type="reset" value="Reset">
  </div>
</template>

<style>
  body {
    position: fixed;
    display: block;
    top: 10vh;
    right: 40vw;
  }
  label {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    position: relative;
    top: -2vh;
  }
  textarea {
    position: relative;
    top: 5vh;
    right: 5vw;
    font-size: 0.8em;
    letter-spacing: 1px;
    padding: 10px;
    max-width: 100%;
    line-height: 1.5;
    border: 1px solid gray;
    border-radius: 5px;
  }
  #dateTime {
    position: relative;
    top: 0.1vh;
    right: 0.1vw;
  }
  #radio_true, #radio_false {
    position: relative;
    top: 0.1vw;
  }
  fieldset {
    position: relative;
    top: 15vh;
  }
</style>
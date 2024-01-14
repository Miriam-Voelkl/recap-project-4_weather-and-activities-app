import React from "react";
import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const data = {
      name: formElements.inputActivity.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };
    console.log("data", data);
    onAddActivity(data);
    event.target.reset();
    formElements.inputActivity.focus();
  }

  return (
    <>
      <form className="form-activity" onSubmit={handleSubmit}>
        <h1>✨Add a new activity✨</h1>
        <label htmlFor="input-activity">Name of the activity:</label>
        <input name="inputActivity" id="input-activity" type="text" required />
        <label htmlFor="input-weather">
          🌞 Is it an activity for good weather?
          <input name="isForGoodWeather" id="input-weather" type="checkbox" />
        </label>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
}

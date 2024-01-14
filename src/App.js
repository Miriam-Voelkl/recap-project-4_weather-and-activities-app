import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }
  console.log(activities);

  return <Form onAddActivity={handleAddActivity}></Form>;
}

export default App;

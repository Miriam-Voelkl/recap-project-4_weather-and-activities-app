import "./App.css";
import Form from "./components/Form/Form.js";
import { uid } from "uid";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }
  console.log("app activities", activities);

  return (
    <div className="app">
      <List activities={activities}></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </div>
  );
}

export default App;

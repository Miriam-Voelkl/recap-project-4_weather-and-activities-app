import "./List.css";

export default function List({ activities }) {
  console.log("list of activities", activities);
  return (
    <ul className="list-activities">
      {activities?.map((activity) => (
        <li className="item-activity">{activity.name}</li>
      ))}
    </ul>
  );
}

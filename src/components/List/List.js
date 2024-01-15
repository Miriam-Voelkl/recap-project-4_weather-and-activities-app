import "./List.css";

export default function List({ activities, isGoodWeather }) {
  console.log("list of activities", activities);
  return (
    <>
      <h1>
        {isGoodWeather
          ? "The weather outside is great! You can do one of these activities:"
          : "Bad weather outside! Here's what you can do instead:"}
      </h1>
      <ul className="list-activities">
        {activities?.map((activity) => (
          <li className="item-activity">
            {activity.name}{" "}
            <span className="weather-icon">
              {activity.isForGoodWeather ? "🌞" : "🌧️"}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

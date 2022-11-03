import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={`https://joeschmoe.io/api/v1/${item.first}`}></img>
      <h1>
        {item.first} {item.last}
      </h1>

      <h1>{item.email}</h1>
      <h1>{item.balance}</h1>
    </div>
  );
};

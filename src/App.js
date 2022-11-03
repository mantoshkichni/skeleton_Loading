import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./styles.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkleleton } from "./CardSkeleton";

export default function App() {
  const [isloading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      getData();
    }, 2000);
  }, []);
  const getData = async () => {
    const data = await axios.get(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    );
    console.log(data.data);
    setUserData(data.data);
  };
  return (
    <div className="App">
      {isloading ? (
        <div className="container">
          <CardSkleleton /> <CardSkleleton /> <CardSkleleton />{" "}
          <CardSkleleton /> <CardSkleleton /> <CardSkleleton />{" "}
          <CardSkleleton /> <CardSkleleton /> <CardSkleleton />
        </div>
      ) : (
        <div className="container">
          {userData &&
            userData.map((item) => {
              return <Card item={item} />;
            })}
        </div>
      )}
    </div>
  );
}

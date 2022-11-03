import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSkleleton = ({ item }) => {
  return (
    <div className="container">
      <div className="card">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton circle={true} height={100} width={100} />
          <h1>
            <Skeleton />
          </h1>

          <h1>
            <Skeleton />
          </h1>
          <h1>
            <Skeleton />
          </h1>
        </SkeletonTheme>
      </div>
    </div>
  );
};

import { usePromiseTracker } from "react-promise-tracker";
import { TailSpin } from "react-loader-spinner";
import "../styles/LoadingIndicator.css";

export const LoadingIndicator = (): JSX.Element => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <>
      {promiseInProgress && (
        <div className="loading-indicator">
          <TailSpin color="#000" height={80} width={80} />
        </div>
      )}
    </>
  );
};

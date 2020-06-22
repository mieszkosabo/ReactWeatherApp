import Loader from "react-loader-spinner";

export const MyLoader = () => (
  <Loader
    type="ThreeDots"
    color="#00BFFF"
    height={100}
    width={100}
    visible={data === "fetching!"}
  />
);

import { LoaderWrapper } from "./Loader.styled";
import { ThreeDots } from "react-loader-spinner";


const Loader = () => (
  <LoaderWrapper>
    <ThreeDots color="#00BFFF" height={80} width={80} />
  </LoaderWrapper>
);

export default Loader;
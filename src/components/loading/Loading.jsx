import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <ThreeDots
        height="700"
        width="100"
        radius="0"
        color="orange"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;

import Oops from "../../icons/oops.png";
import { useNavigate } from "react-router-dom";

export default function EmptySavedItems() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center md:pt-0">
      <div className="flex flex-col gap-8 justify-center items-center">
        <img
          className="w-44 h-44 md:w-72 md:h-72 rounded-full"
          src={Oops}
          alt="oops"
        />
        <div className="font-bold text-xl md:text-3xl">
          Seems like you did not save anything
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="w-fit focus:outline-none text-white text-base py-2 px-6 bg-orange rounded-lg focus:ring-4 focus:ring-pale-orange"
        >
          <span className="font-semibold">Go back to shopping</span>
        </button>
      </div>
    </div>
  );
}

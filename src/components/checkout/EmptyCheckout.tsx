import { useNavigate } from "react-router-dom";

export default function EmptyCheckout() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center text-center pt-20 md:pt-0">
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="font-bold text-3xl">
          Looks like you haven&apos;t make your chose yet...
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

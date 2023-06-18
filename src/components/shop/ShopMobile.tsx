import { useNavigate } from "react-router-dom";
import { SHOP_DATA } from "../../shop-data";

export default function ShopMobile() {
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <div className="flex flex-col gap-5">
        {SHOP_DATA.map((category) => {
          return (
            <>
              <button
                onClick={() =>
                  navigate(`/shop/${category.title.toLowerCase()}`)
                }
                className="col-start-1 col-span-2 border-2 border-gray-800 relative"
              >
                <img alt="jackets" src={category.mainImg} />
                <div className="absolute inset-1/3 opacity-70 aspect-video bg-white border-2 border-black shadow hover:bg-gray-300">
                  <div className="flex flex-col h-full justify-center">
                    <div className="text-center">{category.title}</div>
                    <div className="text-xs text-center">SHOP NOW</div>
                  </div>
                </div>
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

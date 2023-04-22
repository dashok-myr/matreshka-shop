import {SHOP_DATA} from "../shop-data";
import {useParams} from "react-router-dom";

export default function ShopItems() {
    const {collection} = useParams();

    const category = SHOP_DATA.find(category => {
        return category.title.toLowerCase() === collection
    })

    return (
        <div className='p-10'>
            <div className='flex justify-center item-center text-4xl py-10'>{collection?.toUpperCase()}</div>
            <div className='grid grid-cols-4 gap-6'>
                {
                    category.items.map(({id, name, imageUrl, price}) => {
                        return <div className='flex flex-col'>
                            <div key={id} className='group flex relative'>
                                <img className='h-96 w-full h-full object-cover flex-grow' src={imageUrl} alt='hat'/>
                                <button
                                    className="transition delay-150 hover:delay-300 duration-300 ease-in-out hidden group-hover:block absolute inset-1/3 opacity-70 aspect-video bg-white border-2 border-black shadow hover:bg-gray-300">
                                    <div className="flex justify-center text-center">ADD TO CART</div>
                                </button>
                            </div>
                            <div className='flex justify-between pb-4 text-gray-500'>
                                <div>{name}</div>
                                <div>{price}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

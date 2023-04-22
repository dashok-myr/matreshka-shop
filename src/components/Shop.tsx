import {useNavigate} from "react-router-dom";

export default function Shop() {
    const navigate = useNavigate()

    return (
        <div className="py-10 px-10">
            <div className="grid grid-cols-6 gap-4 w-full">
                <div className="col-start-1 col-span-2 border-2 border-gray-800 relative">
                    <img alt="jackets"
                         src="https://images.unsplash.com/photo-1474031317822-f51f48735ddd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"/>
                    <button
                        className="absolute inset-1/3 opacity-70 aspect-video bg-white border-2 border-black shadow hover:bg-gray-300"
                        onClick={() => navigate('/shop/jackets')}
                    >
                        <div className="flex flex-col h-full justify-center">
                            <div className="text-center">JACKETS</div>
                            <div className="text-xs text-center">SHOP NOW</div>
                        </div>
                    </button>
                </div>
                <div className="col-start-3 col-span-2 border-2 border-gray-800 relative">
                    <img alt="hats"
                         src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
                    <button
                        className="absolute inset-1/3 opacity-70 aspect-video bg-white border-2 border-black shadow hover:bg-gray-300"
                        onClick={() => navigate('/shop/hats')}
                    >
                        <div className="flex flex-col h-full justify-center">
                            <div className="text-center">HATS</div>
                            <div className="text-xs text-center">SHOP NOW</div>
                        </div>
                    </button>
                </div>
                <div className="col-start-5 col-span-2 border-2 border-gray-800 relative"
                     onClick={() => navigate('/shop/sneakers')}
                >
                    <img alt="sneakers"
                         src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
                    <button
                        className="absolute inset-1/3 opacity-70 aspect-video bg-white border-2 border-black shadow hover:bg-gray-300">
                        <div className="flex flex-col h-full justify-center">
                            <div className="text-center">SNEAKERS</div>
                            <div className="text-xs text-center">SHOP NOW</div>
                        </div>
                    </button>
                </div>
                <div className="col-start-1 col-span-3 border-2 border-gray-800 relative"
                     onClick={() => navigate('/shop/womens')}
                >
                    <img alt="woman"
                         src="https://images.unsplash.com/photo-1507074928371-bb8a24e0cf8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
                    <button
                        className="absolute inset-1/3 opacity-70 aspect-video bg-white border-2 border-black shadow hover:bg-gray-300">
                        <div className="flex flex-col h-full justify-center">
                            <div className="text-center">WOMAN</div>
                            <div className="text-xs text-center">SHOP NOW</div>
                        </div>
                    </button>
                </div>
                <div className="col-start-4 col-span-3 border-2 border-gray-800 relative"
                     onClick={() => navigate('/shop/mens')}
                >
                    <img alt="man"
                         src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
                    <button
                        className="absolute inset-1/3 opacity-70 aspect-video bg-white border-2 border-black shadow hover:bg-gray-300">
                        <div className="flex flex-col h-full justify-center">
                            <div className="text-center">MAN</div>
                            <div className="text-xs text-center">SHOP NOW</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
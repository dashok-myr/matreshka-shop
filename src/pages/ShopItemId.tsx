import useIsMobile from "../utils/useIsMobile";
import ShopItemDesktop from "../components/ShopItem/ShopItemDesktop";
import ShopItemMobile from "../components/ShopItem/ShopItemMobile";
import { useParams } from "react-router-dom";

interface CollectionProps {
  itemId: string | string[];
}

function Collection({ itemId }: CollectionProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <ShopItemMobile itemId={itemId} />;
  }

  return <ShopItemDesktop itemId={itemId} />;
}

export default function CollectionWrapper() {
  const { itemId } = useParams();

  if (!itemId) return null;

  return <Collection itemId={itemId} />;
}

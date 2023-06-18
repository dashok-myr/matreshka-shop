import clsx from "clsx";

interface IncrementDecreaseButtonsProps {
  onDecrease: () => void;
  onIncrement: () => void;
  amount: number;
}
export default function IncrementDecreaseButtons({
  onDecrease,
  onIncrement,
  amount,
}: IncrementDecreaseButtonsProps) {
  return (
    <div
      className="flex inline-flex self-center pb-4 md:pb-0 md:pr-4"
      role="group"
      aria-label="Button group"
    >
      <button
        onClick={onDecrease}
        className={clsx(
          { "text-gray-400": amount === 1, "text-orange": amount > 1 },
          "font-bold text-xl px-16 md:px-4 py-2 bg-light-grayish-blue rounded-l-lg"
        )}
        disabled={amount === 1}
      >
        -
      </button>
      <div className="py-2 px-8 md:px-4 font-semibold text-xl self-center bg-light-grayish-blue">
        {amount}
      </div>
      <button
        onClick={onIncrement}
        className="text-orange font-bold text-xl px-16 md:px-4 py-2 bg-light-grayish-blue rounded-r-lg"
      >
        +
      </button>
    </div>
  );
}

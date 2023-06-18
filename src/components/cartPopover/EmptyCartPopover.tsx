export default function EmptyCartPopover() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="text-xl text-dark-grayish-blue">Cart Is Empty</div>
      <span className="hidden sm:block h-0.5 w-full bg-gray-200"></span>
      <div className="text-base text-orange text-center">
        Looks like you haven&apos;t made your chose yet...
      </div>
    </div>
  );
}

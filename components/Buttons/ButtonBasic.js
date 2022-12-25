export default function ButtonBlack({
  children,
  className,
  onClick,
  onSubmit,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      onSubmit={onSubmit}
      className="text-white bg-black items-center  rounded-lg "
    >
      {children}
    </button>
  );
}

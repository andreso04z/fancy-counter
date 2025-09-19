import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";


export default function CountButtons({ setCount }) {
  const handleDecrease = () => {
    setCount((count) => count - 1);
  };

  const handleIncrease = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="button-container">
      <button onClick={handleDecrease} className="count-btn count-btn--minus">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button onClick={handleIncrease} className="count-btn count-btn--plus">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
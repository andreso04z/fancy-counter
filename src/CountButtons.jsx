import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";


export default function CountButtons({ setCount }) {
  return (
    <div className="button-container">
      <button onClick={() => {
        setCount((count) => count - 1);
      }} className="count-btn count-btn--minus">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button onClick={() => {
        setCount((count) => count + 1);
      }} className="count-btn count-btn--plus">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
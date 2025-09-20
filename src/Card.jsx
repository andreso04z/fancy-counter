import React from 'react'
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
  const [count, setCount] = React.useState(0);

  return (
    <div className='card'>
        <Title />
        <Count count={count} />
        <ResetButton setCount={setCount} />
        <ButtonContainer setCount={setCount} />
      </div>
  )
}
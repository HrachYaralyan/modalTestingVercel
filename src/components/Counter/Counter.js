import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../app/slices/counterSlice'

export default function Counter() {
  // const count = useSelector((state) => state.counter.value)
  const count = useSelector((state)=>{
    return state.counter.value
  })
  const dispatch = useDispatch()

const IncrementBtn = ()=>{
    dispatch(increment())
}

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={IncrementBtn}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.4176013303645!2d44.488831975026834!3d40.1997727688171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6bbf260be5%3A0xfcd60dca516cdb29!2z1YTVpdaA1aPVpdWs1bXVodW2INWr1bbVvdW_1avVv9W41oLVvw!5e0!3m2!1shy!2sam!4v1686670793983!5m2!1shy!2sam" 
      width="600" 
      height="450" 
      style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
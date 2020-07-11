import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring'
import './parallax.scss'
import Moon from '../images/parallax/moon.png'
import CloudsBack from '../images/parallax/cBack.png'
import CloudsFront from '../images/parallax/cFront.png'
import Sea from '../images/parallax/sea.png'
import Island from '../images/parallax/island.png'

const calc = x => x - (window ? window.innerHeight : 0) / 2
const trans1 = x => `translate3d(0, ${-x / 35}px, 0)`
const trans2 = x => `translate3d(0, ${-x / 30}px, 0)`
const trans3 = x => `translate3d(0, ${-x / 25}px, 0)`
const trans4 = x => `translate3d(0, ${-x / 20}px, 0)`
const trans5 = x => `translate3d(0, ${-x / 15}px, 0)`

function Parallax() {
  const [props, set] = useSpring(() => ({ x: 0, config: { mass: 5, tension: 400, friction: 100 } }))

  const ref = useRef()
  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ x: calc(offset) });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })

  return (
    <div ref={ref} className="heroImage" >
      <animated.div className="layer" style={{ transform: props.x.interpolate(trans1) }}>
        <img src={Moon} alt="parallax" />
      </animated.div>
      <animated.div className="layer" style={{ transform: props.x.interpolate(trans2) }}>
        <img src={CloudsBack} alt="parallax" />
      </animated.div>
      <animated.div className="layer" style={{ transform: props.x.interpolate(trans3) }}>
        <img src={CloudsFront} alt="parallax" />
      </animated.div>
      <animated.div className="layer" style={{ transform: props.x.interpolate(trans4) }}>
        <img src={Sea} alt="parallax" />
      </animated.div>
      <animated.div className="layer" style={{ transform: props.x.interpolate(trans5) }}>
        <img src={Island} alt="parallax" />
      </animated.div>
    </div>
  )
}

export default Parallax;
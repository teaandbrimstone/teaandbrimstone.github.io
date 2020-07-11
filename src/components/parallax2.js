import React from 'react';
import { useSpring, animated } from 'react-spring'
import './parallax.scss'

import Face from '../images/parallax/face.png'
import Hand from '../images/parallax/hand.png'
import Dragon from '../images/parallax/dragon.png'

const calc = (x, y) => [x - (window ? window.innerWidth / 2 : 0), (window ? y - window.innerHeight / 2 : 0)]
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans3 = (x, y) => `translate3d(${x / 13}px,${y / 13}px,0)`

function Parallax2() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <div className="heroImage2" role="presentation" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x - (window ? window.innerWidth : 0) / 20, y + (window ? window.innerHeight : 0) / 8) })}>
      <animated.div className="staticLayer" style={{ transform: props.xy.interpolate(trans1) }}>
        <img src={Face} alt="parallax" height="500px" width="500px" />
      </animated.div>
      <animated.div className="staticLayer" style={{ transform: props.xy.interpolate(trans2) }}>
        <img src={Hand} alt="parallax" height="500px" width="500px" />
      </animated.div>
      <animated.div className="staticLayer" style={{ transform: props.xy.interpolate(trans3) }}>
        <img src={Dragon} alt="parallax" height="500px" width="500px" />
      </animated.div>
    </div>
  )
}

export default Parallax2;
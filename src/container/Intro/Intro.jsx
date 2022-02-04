import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.scss';

const Intro = () => {
  const vidRef = React.useRef();

  return (
    <div className="intro">
      <video ref={vidRef} src={meal} type="video/mp4" loop controls={false} autoPlay={true} muted />
      <div className="intro__overlay flex__center"></div>
    </div>
  );
};

export default Intro;

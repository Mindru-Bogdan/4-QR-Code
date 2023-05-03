import Img from '../../src/image-qr-code.png';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.card}>
      <img src={Img}></img>
      <div className={classes.text}>
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
};

export default Card;

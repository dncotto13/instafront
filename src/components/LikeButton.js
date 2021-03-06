import React, { useState } from 'react';

const particleList = Array.from(Array(10));

const LikeButton = () => {
  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setLiked(!liked);
        setClicked(true);
      }}
      onAnimationEnd={() => setClicked(false)}
      className={('like-button-wrapper', {
        liked,
        clicked,
      })}
    >
      {liked && (
        <div className='particles'>
          {particleList.map((_, index) => (
            <div
              className='particle-rotate'
              style={{
                transform: `rotate(${
                  (360 / particleList.length) * index + 1
                }deg)`,
              }}
            >
              <div className='particle-tick' />
            </div>
          ))}
        </div>
      )}
      <div className='like-button'>
        <span>Me gusta</span>
        <span className={('suffix', { liked })}></span>
      </div>
    </button>
  );
};

export default LikeButton;

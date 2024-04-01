import React, { useEffect } from 'react';

const AboutMe = () => {
  useEffect(() => {
    const animatedImage = document.querySelector('.animated-image');
    let isMovingUp = true;

    const moveImage = () => {
      const translateYValue = isMovingUp ? '-5px' : '5px';
      animatedImage.style.transform = `translateY(${translateYValue})`;
      isMovingUp = !isMovingUp;
    };

    const intervalId = setInterval(moveImage, 1000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return (
    <section id="about-me" style={{ backgroundColor: '#f7e6ff', color: '#da89ff' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut justo vitae sapien finibus dapibus. Nulla facilisi. Duis ultricies metus eu ligula mollis, sit amet feugiat odio rutrum. Nulla facilisi.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="animated-image-wrapper" style={{ marginTop: '-30px' }}>
              <img src="./images/logo.png" alt="About Me" className="img-fluid animated-image" style={{ maxWidth: '50%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

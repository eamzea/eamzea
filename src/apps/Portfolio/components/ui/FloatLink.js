import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const FloatLink = () => {
  const [show, toggleShow] = useState(false);

  const history = useHistory();

  const handleLink = () => {
    if (show) {
      history.push('/');
    } else {
      toggleShow(true);
    }
  };

  return (
    <div
      className={show ? 'float-link-show' : 'float-link'}
      onClick={handleLink}
    >
      {show ? (
        <Fade left wait={1000}>
          <div onClick={() => {}}>
            <span>
              <i className="fas fa-chevron-left"></i>
            </span>
            Return to Portfolio
          </div>
        </Fade>
      ) : (
        <Fade right>
          <div onClick={() => {}}>
            <span>
              <i className="fas fa-chevron-left"></i>
            </span>
            Return to Portfolio
          </div>
        </Fade>
      )}
    </div>
    // <
    //   className="float-link"
    //   onMouseEnter={handleShow}
    //   onMouseLeave={() => toggleShow(false)}>
    //   {show ? (
    //     <Fade right when={show}>
    //       <div onClick={() => {}}>
    //         <span>
    //           <i className="fas fa-chevron-left"></i>
    //         </span>
    //         Return to Portfolio
    //       </div>
    //     </Fade>
    //   ) : (
    //     <Fade right>
    //       <div onClick={() => {}}>
    //         <span>
    //           <i className="fas fa-chevron-left"></i>
    //         </span>
    //         Return to Portfolio
    //       </div>
    //     </Fade>
    //   )}
    // </>
  );
};

export default FloatLink;

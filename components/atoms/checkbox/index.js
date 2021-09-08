import React from 'react'
import Style from './checkbox.module.css';
const Checkbox = () => {
    return (
            <div className={Style.size}>
                  <input type="checkbox" name="r" id="r" className={Style.inputSize} />
                  <label htmlFor="r" className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                    R
                  </label>
                  <input type="checkbox" name="l" id="l" className={Style.inputSize} />
                  <label htmlFor="l" className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                    L
                  </label>
                  <input type="checkbox" name="xl" id="xl" className={Style.inputSize} />
                  <label htmlFor="xl" className={`fs-30 fw-700 fc-black ${Style.sizeButton}`}>
                    XL
                  </label>
                </div>
        
    )
}

export default Checkbox

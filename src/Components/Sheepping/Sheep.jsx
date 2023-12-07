import React from 'react'
import "./Sheep.css"
import customer from "../IMG/customer.jpg"

function Sheeping() {
  return (
    <div>
      <h2 className='help'>Custommer Help</h2>
        <div className="shiping-flexbox">
        <div className="shiping-box ">
          <i class="fa-sharp fa-solid fa-truck-fast" id="truck"></i>
          <h2>Sheeping</h2>
          <h5>
            Logos communicate all of that through color, shape and other design
            elements. Learn how to make your shipping logo tell your brand’s
            story.
          </h5>
        </div>

        <div className="shiping-box  boxs ">
          <img src={customer} width={70} height={50} alt="loading"></img>
          <h2>Help&Support 24/7</h2>
          <h5>
            Logos communicate all of that through color, shape and other design
            elements. Learn how to make your shipping logo tell your brand’s
            story.
          </h5>
        </div>
        <div className="shiping-box  boxs">
          <i class="fa-solid fa-gift" id="refund"></i>
          <h2>Refund 100%</h2>
          <h5>
            Logos communicate all of that through color, shape and other design
            elements. Learn how to make your shipping logo tell your brand’s
            story.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Sheeping
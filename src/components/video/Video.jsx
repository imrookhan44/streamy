import React from 'react'
import './video.css'
import videoPic from '../../assets/photo_2023-05-16_18-01-45 2.png'
import microphone from '../../assets/SVGRepo_iconCarrier.png'
import video from '../../assets/SVGRepo_iconCarrier (1).png'
import emoji from '../../assets/happy-face-svgrepo-com 1.png'
import send from '../../assets/icons8-paper-plane-90 1.png'
import eth from '../../assets/1027 7.png'
import arrow from '../../assets/Arrow 2.png'
function Video() {
  return (
    <>
      <div className="video-div">
        <div className="video-image-div">
          <img src={videoPic} alt="video" className="video-image" />
        </div>
        <div className='video-image-button'>
          <p>My Cam View</p>
        </div>

        <div className='microphone-button'>
          <img src={microphone} alt="microphone" className="microphone-image" />
        </div>
        <div className='video-button'>
          <img src={video} alt="video" className="video-image" />
        </div>


        <div className="connect-button">
          <p>Connect</p>
        </div>
      </div>
      <div className='right-video-div'>
        <div className='right-video-div-main'>
          <div className='right-video-div-1'>
            <div className='right-video-div-1-1'>
              <h2>Stranger</h2>
              <p>Male</p>
              <p>United States</p>
            </div>
            <div className='line'></div>

          </div>
          <div className='right-video-div-1'>
            <div className='right-video-div-1-1'>
              <h2>Wallet: 0x6932869....C5571F7Cf676F1e7</h2>
              <div className='d-flex'>
                <div>
                  <div className='btn-eth'>
                    <img src={eth} alt="eth" className="eth-image" />
                    <p>ETH</p>
                    {/* <select name="currency" id="currency">
                      <option value="USD" selected>USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select> */}
                  </div>

                </div>&nbsp;
                <div className='btn-input'>
                  <input type="text" placeholder='0.00' />

                </div>&nbsp;
                <div className='btn-arrow'>
                  <p>TIP</p>
                  <img src={arrow} alt="eth" className="eth-image" />

                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='messages'>
          <div className='messages-1'>
            <p>Hey what’s up!!? I am from USA! Where are you from? I just came here to meet some new cool people!! <br />  Btw I like your room!! Looks really cool!</p>
          </div>


        </div>
        <div className='messages-2'>
          <div className='messages-2-1'>
            <p>Hey what’s up!!? I am from London! Nice to meet you!!!   <br /> THANK YOUU!! </p>
          </div>
        </div>
        <div className='input__div'>
          <div className='input__div-1'></div>

          <div className='input__div-2'>
            <input type="text" placeholder='| Write a message' />
            <div className='send-div'>
              <img src={emoji} alt="emoji" className="emoji-image" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={send} alt="send" className="send-image" />
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Video
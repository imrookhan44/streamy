import React from 'react'
import logo from '../assets/Group 25.png'
import firstimage from '../assets/Group.png'
import secondimage from '../assets/dark-mode-toggle-icon 2.png'
import './header.css'
function Header() {
  return (
    <>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            {/* <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div> */}
            <div class="modal-body">
              <div className="modal__main-div">
                <div className='modal_text'>
                  <h2>Bio</h2>
                </div>
                <div className="modal_line"></div>
                <br />
                <div className='modal_name'>
                  <h2>Name</h2>
                  <input type="text" className='input_text' />

                </div>
                <div className='modal_name'>
                  <h2>Country</h2>
                  <select name="country" id="country">
                    <option value="United States" selected>United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                <div className='modal_name'>
                  <h2>Sex</h2>
                  <select name="sex" id="sex">
                    <option value="United States" selected>Male</option>
                    <option value="United Kingdom">Female</option>
                    <option value="Australia">Others</option>
                  </select>

                </div>
                <br />
                <div className='modal_text1'>
                  <h3>Match Preference (Premium)</h3>
                </div>
                <div className='modal_name'>
                  <h2>Sex</h2>
                  <div className='one'>
                    <p>Random</p>
                  </div>&nbsp;
                  <div className='two'>
                    <p>Male</p>
                  </div>&nbsp;
                  <div className='three'>
                    <p>Female</p>
                  </div>


                </div>
                <div className='modal_name'>
                  <h2>Country</h2>
                  <select name="country" id="country1">
                    <option value="United States" selected>United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
              </div>

            </div>
            {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="header__main-div">
        <div className="image-div">
          <div>

            <img src={logo} alt="avatar" />
          </div>
          <div>
            <p className="header__title">Streamy  </p>
          </div>
        </div>
        <div className="center-div">
          <h1 className='first_text'>1-on-1 stream</h1>
          <div>
            <h1 className='second_text'>Public stream (coming soon)</h1>
          </div>
        </div>
        <div className="end_div">
          <div data-toggle="modal" data-target="#exampleModal">
            <img src={firstimage} alt="avatar" />
          </div>
          <div>
            <img src={secondimage} alt="avatar" />
          </div>
          <div>
            <button className="button">Connect Wallet</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header
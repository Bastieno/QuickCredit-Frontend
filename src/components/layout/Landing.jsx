import React from 'react';
import logo from '../../assets/images/woman-at-desk.svg';
import one from '../../assets/images/one.png';
import two from '../../assets/images/two.png';
import three from '../../assets/images/three.png';
import four from '../../assets/images/four.png';

export default function Landing() {
  return (
    <div className="main" style={{ marginTop: '43px' }} >
      <div className="panel1" id="landing">
        <div className="row-padding">
          <div className="half" style={{ padding: '2em' }}>
            <div id="landing-text">
              <div id="landing-text-inner">
                <h1>GET INSTANT LOANS</h1>
                <h2>Never Run Out Of Cash</h2>
                <a href="#" className="btn1">APPLY NOW</a>
              </div>
            </div>
          </div>
          <div className="half">
            <div id="landing-image" className="image-container">
              <img className="header-image" src={logo} alt="description"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}/>
            </div>
          </div>
        </div>
      </div>

      <div id="section2" className="card-4 white">
        <div className="container">
            <h1 className="center">How It Works</h1>
            <div className="row">
                <div className="col m10 margin padding">
                    <table>
                        <tbody>
                          <tr>
                              <th valign="top">
                                  <img src={one} alt="one" />
                              </th>
                              <td>
                                  <h6><strong>Create an Account and Verify Your Details</strong></h6>
                                  <p>Get started by creating an account with us.</p>
                              </td>
                          </tr>
                          <tr className="tr_spacer"></tr>
                          <tr>
                              <th valign="top">
                                  <img src={two} alt="two" />
                              </th>
                              <td>
                                  <h6><strong>Choose a Loan Tenor</strong></h6>
                                  <p>Get a fixed term for 3, 6 or 12 months as well as your interest rates.</p>
                              </td>
                          </tr>
                          <tr className="tr_spacer"></tr>
                          <tr>
                              <th valign="top">
                                  <img src={three} alt="three" />
                              </th>
                              <td>
                                  <h6><strong>Upload Documents, Be Verified and Get a Loan</strong></h6>
                                  <p>We carry out some verification checks on your information. </p>
                                  <p> Once you upload the required documents, the loan approval process begins.</p>
                              </td>
                          </tr>
                          <tr className="tr_spacer"></tr>
                          <tr>
                              <th valign="top">
                                  <img src={four} alt="four" />
                              </th>
                              <td>
                                  <h6><strong>Disburse Your Loan</strong></h6>
                                  <p>After the completion of the verification checks, if approved, your loan will be sent to your bank account.</p>
                              </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
              </div>
          </div>
      </div>

      <div id="purposes_section">
        <div className="purp_title">Loan Class</div>
        <div className="purpose_block">
            <div className="purpose_block_img" id="buss_opp"></div>
            <div className="purpose_block_text">Business Opportunity</div>
        </div>
        <div className="purpose_block">
            <div className="purpose_block_img" id="health"></div>
            <div className="purpose_block_text">Medical Expenses</div>
        </div>
        <div className="purpose_block">
            <div className="purpose_block_img" id="household"></div>
            <div className="purpose_block_text">Rent</div>
        </div>
        <div className="purpose_block">
            <div className="purpose_block_img" id="car_fin"></div>
            <div className="purpose_block_text">Automobile Financing</div>
        </div>
        <div className="purpose_block">
            <div className="purpose_block_img" id="vacation"></div>
            <div className="purpose_block_text">Vacation</div>
        </div>
        <div className="purpose_block">
            <div className="purpose_block_img" id="edu"></div>
            <div className="purpose_block_text">Education</div>
        </div>
      </div>
    </div>
  );
}

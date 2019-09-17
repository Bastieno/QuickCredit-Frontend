import React from 'react';
import { Link } from 'react-router-dom';
import avatarImg from '../../assets/images/person-face-2.png';

export default function UserDashboard() {
  return (
    <>
      <nav className="sidebar collapse teal animate-left" style={{ zIndex: '3', width: '250px' }} id="mySidebar"><br></br>
        <div className="container row">
          <div className="col s4">
            <img src={avatarImg} className="circle margin-right" style={{ width: '46px' }}/>
          </div>
          <div className="col s8 bar" style={{ marginTop: '10px' }}>
            <span>Welcome, <strong>Francis</strong></span><br></br>
          </div>
        </div>
        <hr></hr>
        <div className="container">
          <h5>Dashboard</h5>
        </div>
        <div className="bar-block">
          <Link to="#" className="bar-item button padding-16 hide-large dark-grey hover-black"
             title="Close menu"><i className="fa fa-remove fa-fw"></i>  Close Menu</Link>
          <Link to="./user-dashboard" className="bar-item button padding blue"><i className="fa fa-eye fa-fw"></i>  Overview</Link>
          <Link to="./loan-apply" className="bar-item button padding"><i className="fa fa-globe fa-fw"></i>  Apply for loan</Link>
          <Link to="./user-repayment-history" className="bar-item button padding"><i className="fa fa-history fa-fw"></i>  Repayment History</Link>
        </div>
      </nav>

      <div className="main" style={{ marginTop: '43px', marginLeft: '250px' }}>
        <header className="container text-blue" style={{ paddingTop: '10px' }}>
          <div className="container m12 light-grey round-medium">
              <h5><Link to="./user-dashboard.html"> <span className="text-green">Dashboard</span></Link></h5>
          </div>
        </header>
        <div className="card mb-3 margin-top border margin-left margin-right">
            <div className="card-header">
              <i className="fa fa-table"></i> Repayment History
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table-all hoverable" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr className="teal">
                      <th>Loan ID</th>
                      <th>Loan Amount</th>
                      <th>Interest</th>
                      <th>Total Payment Due</th>
                      <th>Loan Status</th>
                      <th>Create On</th>
                      <th>Tenor</th>
                      <th>Repaid Amount</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Link to="#" className="text-blue underline" title="Click for more info">101</Link></td>
                      <td>$20,000</td>
                      <td>0.05</td>
                      <td>$32,000</td>
                      <td><span className="text-blue">Current</span> </td>
                      <td>2019/04/25</td>
                      <td>12 months</td>
                      <td>$25,000</td>
                      <td>$7,000</td>
                    </tr>
                    <tr>
                      <td><Link to="#" className="text-blue underline" title="Click for more info">103</Link></td>
                      <td>$20,000</td>
                      <td>0.05</td>
                      <td>$28,000</td>
                      <td><span className="text-green">Repaid</span></td>
                      <td>2019/04/25</td>
                      <td>6 months</td>
                      <td>$28,000</td>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <td><Link to="#" className="text-blue underline" title="Click for more info">107</Link></td>
                      <td>$15,000</td>
                      <td>0.05</td>
                      <td>$18,000</td>
                      <td><span className="text-green">Repaid</span></td>
                      <td>2019/04/25</td>
                      <td>3 months</td>
                      <td>$18,000</td>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <td><Link to="#" className="text-blue underline" title="Click for more info">111</Link></td>
                      <td>$37,000</td>
                      <td>0.05</td>
                      <td>$41,000</td>
                      <td><span className="text-green">Repaid</span></td>
                      <td>2019/04/25</td>
                      <td>6 months</td>
                      <td>$41,000</td>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <td><Link to="#" className="text-blue underline" title="Click for more info">116</Link></td>
                      <td>$29,000</td>
                      <td>0.05</td>
                      <td>$36,000</td>
                      <td><span className="text-green">Repaid</span></td>
                      <td>2019/04/25</td>
                      <td>12 months</td>
                      <td>$36,000</td>
                      <td>$0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted">Last viewed, yesterday at 11:59 PM</div>
          </div>
      </div>
    </>
  );
}

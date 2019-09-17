import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import avatarImg from '../../assets/images/person-face-2.png';

const Sidenav = ({ user }) => {
  const { firstName, isAdmin } = user;
  return isAdmin ? (
    <nav className="sidebar collapse teal animate-left" style={{ zIndex: '3', width: '250px' }} id="mySidebar"><br></br>
      <div className="container row">
        <div className="col s4">
          <img src={avatarImg} className="circle margin-right" style={{ width: '46px' }}/>
        </div>
        <div className="col s8 bar" style={{ marginTop: '10px' }}>
          <span>Welcome, <strong>{firstName}</strong></span><br></br>
        </div>
      </div>
      <hr></hr>
      <div className="container">
        <h5>Dashboard</h5>
      </div>
      <div className="bar-block">
        <Link to="#" className="bar-item button padding-16 hide-large dark-grey hover-black"
            title="Close menu"><i className="fa fa-remove fa-fw"></i>  Close Menu</Link>
        <a to="./admin-dashboard" className="bar-item button padding"><i className="fa fa-eye fa-fw"></i>  Overview</a>
        <a to="./users" className="bar-item button padding"><i className="fa fa-users fa-fw"></i>  All Clients</a>
        <a to="./loans" className="bar-item button padding"><i className="fa fa-bank fa-fw"></i>  All Loans</a>
        <a to="./current-loans" className="bar-item button padding"><i className="fa fa-money fa-fw"></i>  Current Loans</a>
        <a to="./repaid-loans" className="bar-item button padding"><i className="fa fa-suitcase fa-fw"></i>  Repaid Loans</a>
        <a to="./pending-loans" className="bar-item button padding"><i className="fa fa-bell fa-fw"></i>  Pending Loans</a>
        <a to="./repayment-record" className="bar-item button padding"><i className="fa fa-money fa-fw"></i> Create Repayment Record</a>
      </div>
    </nav>
  )
    : (
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
    );
};

Sidenav.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Sidenav;

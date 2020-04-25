import React, { Component } from 'react'
import HeadNavFoot from "../../components/HeadNavFoot";
import { Link } from "react-router-dom";

export default class AtmList extends Component {
   
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       atmTestList: [
          { atmName: 'ATMNAME', atmId: 'SBC001', atmLocation: 'Gandhi Bazar', availableCash: 2000, networkStatus: '0', atmStatus:'0' },
          { atmName: 'ATMNAME', atmId: 'SBC001', atmLocation: 'Gandhi Bazar', availableCash: 2000, networkStatus: '1', atmStatus:'0' },
          { atmName: 'ATMNAME', atmId: 'SBC001', atmLocation: 'Gandhi Bazar', availableCash: 2000, networkStatus: '1', atmStatus:'0' },
          { atmName: 'ATMNAME', atmId: 'SBC001', atmLocation: 'Gandhi Bazar', availableCash: 2000, networkStatus: '1', atmStatus:'0' },
          { atmName: 'ATMNAME', atmId: 'SBC001', atmLocation: 'Gandhi Bazar', availableCash: 2000, networkStatus: '1', atmStatus:'0' },
          { atmName: 'ATMNAME', atmId: 'SBC001', atmLocation: 'Gandhi Bazar', availableCash: 2000, networkStatus: '1', atmStatus:'0' },
          { atmName: 'ATMNAME', atmId: 'SBC001', atmLocation: 'Gandhi Bazar', availableCash: 2000, networkStatus: '0', atmStatus:'0' },
         
       ]
    }
 }

 renderTableData() {
  return this.state.atmTestList.map((atmValue, atmIndex) => {
     const { atmName, atmId, atmLocation, availableCash,networkStatus,atmStatus } = atmValue //destructuring
     return (
     
        <tr key={atmName}>
           <td> <Link to="/">{atmName}</Link></td>
           <td>{atmId}</td>
           <td>{atmLocation}</td>
           <td>{availableCash}</td>
           
           <td>
            {networkStatus !=0 ? <span className="approve">In-service</span> : <span className="reject">Out-of-Service</span>}
            
          </td>
          <td>
            {atmStatus !=0 ? <span className="approve">Active</span> : <span className="reject">InActive</span>}
            
          </td>
           <td><a href="#" className="viewbtn"><img src="../images/icon/view.png" alt="view" /></a></td>
           
        </tr>
       
     )
  })
}
   componentDidMount() {

    const script = document.createElement("script");

    script.src = `js/contentDatatable.js`;
    script.async = true;

    document.body.appendChild(script);


}
  
    render() {
        return (
           
            <div className="page-wrapper">
<HeadNavFoot />
         
<main className="main-container">
        <div className="in-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 px-0">
                {/*============================== Right Main Column Starts ==================================*/}
                {/* ***************************************************************************************** */}
                <div className="right-main-column">
                  <div className="right-col-container">
                    {/*================================ Body code starts Here ===================================*/}
                    <div className="main-content">
                      <div className="in-mcontainer">
                        {/*=============================== breadcrumb starts ===============================*/}
                        <div className="breadcrumb">
                          <ul className="lst-breadcrumb">
                            <li>
                              <a href="/">Banks</a>
                            </li>
                            <li>
                              <a href="/">Indian Banks</a>
                            </li>
                            <li>
                              Indian Banks ATM List
                            </li>
                          </ul>
                          {/*.lst-breadcrumb*/}
                        </div>
                        {/* .breadcrumb */}
                        {/*=============================== breadcrumb ends ===============================*/}
                        {/*============================ grid container starts ============================*/}
                        <div className="grid-container">
                          {/*================ Department Master Datattables list starts ================*/}
                          <div className="grid-header">
                            <div className="dt-header">
                              <div className="row">
                                <div className="col-sm-12 col-md-5">
                                  <h2>Indian Banks ATM List</h2>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                  <div className="dt-container">
                                    <ul className="dt-buttons">
                                      <li>
                                        <a href="add-atm.html" className="dt-add button" data-toggle="tooltip" title="add">
                                          <em>New ATM</em>
                                        </a>
                                      </li>
                                      
                                      <li>
                                        <a href="/" className="expand-cont button" data-toggle="tooltip" title="expand"> </a>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* dt-buttons */}
                                </div>
                              </div>
                            </div>
                            {/* .dt-header */}
                          </div>
                          <div className="datatable-box custom-table">
                            <div>
                              <div className="table-responsivebox">
                                <table id="dt-sample" className="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>ATM Name</th>
                                      <th>ATM ID</th>
                                      <th>Location</th>
                                      <th>Available Cash</th>
                                      <th>Network Status</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>{this.renderTableData()}</tbody>
                                </table>
                              </div>
                              {/*.table-responsivebox*/}
                            </div>
                            {/* content loader starts */}
                            <div className="placeholder-content" style={{display: 'none'}}>
                              <div className="placeholder-content_item" />
                              <div className="placeholder-content_item" />
                              <div className="placeholder-content_item" />
                              <div className="placeholder-content_item" />
                              <div className="placeholder-content_item" />
                              <div className="placeholder-content_item" />
                            </div>
                            {/* placeholder-content */}
                            {/* content loader ends */}
                          </div>
                          {/*.datatable-box*/}
                          {/*================ Department Master Datattables list ends ================*/}
                        </div>
                        {/* .grid-container */}
                        <div className="vspacer50" />
                        {/*============================ grid container ends ============================*/}
                        {/*================================ Footer code starts Here ================================*/}
                        <div className="global-footer">
                          <div className="in-glfooter">
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-3 col-lg-2 col-md-2 col-sm-3 px-0">
                                  <div className="glfooter-content">
                                    <div className="glfooter-box">
                                      <div className="logo-left">
                                        <img src="../images/logo/kiya-logo.png" alt="kiy-logo" /> 
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                                <div className="col-6 col-lg-8 col-md-8 col-sm-6">
                                  <div className="glfooter-content">
                                    <div className="glfooter-box">
                                      <div className="glcopyright-text1">
                                        <em>Powered by Kiya.ai ATM Monitoring System © 2020 Infrasoft Technologies Ltd - All rights reserved</em>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-3 col-lg-2 col-md-2 col-sm-3 px-0">
                                  <div className="glfooter-content">
                                    <div className="glfooter-box">
                                      <div className="logo-right">
                                        <img src="../images/logo/infrasoft-logo.png" alt="infrasoft-logo" /> 
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </div>
                            </div>
                            {/*.container-fluid*/}
                          </div>
                          {/*.in-glfooter*/}
                        </div>
                        {/*.global-footer*/}
                        {/*================================ Footer code starts Ends ================================*/}
                        {/* ***************************************************************************************** */}
                      </div>
                      {/* .in-mcontainer */}
                    </div>
                    {/* .main-content */}
                    {/*================================ Body code starts Ends ===================================*/}
                    {/* ***************************************************************************************** */}
                  </div>
                  {/* .right-col-container */}
                </div>
                {/*  .right-main-column */}
                {/*============================== Right Main Column Ends ==========================================*/}
                {/* *********************************************************************************************** */}
              </div>
              {/*  col-12 */}
            </div>
            {/* row */}
          </div>
          {/* .container-fluid  */}
        </div>
        {/* .in-main */}
      </main>
      {/* .main-container */}
      {/* ============================================== Main Page Content - End ===============================================*/}
     
            </div>       
            
            )
    }
}

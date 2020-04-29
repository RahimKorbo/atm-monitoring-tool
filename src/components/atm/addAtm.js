import React, { Component } from 'react'

import HeadNavFoot from "../HeadNavFoot";

export default class addAtm extends Component {
    constructor(props){
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            data: '',
            tenantId: 11011
          }

    }

    componentDidMount() {
        // if (!this.props.load) {
        //   this.props.getBanks();
        // }
    
        const script = document.createElement("script");
        script.src = `js/effectScripts.js`;
        script.async = true;
        document.body.appendChild(script);
      }

      processAtm(e) {
       // e.preventDefault();
        //this.setState({atmId: e.target.value});

        if(e) e.preventDefault();



    const newAtm = {
        
        // step 1
        tenantId: this.state.tenantId,
        atmId: this.refs.atmId.value,
        encryptedTerminalPinKey: this.refs.encryptedTerminalPinKey.value,
        machineIp: this.refs.machineIp.value,

        atmName: this.refs.atmName.value,
        atmLocation: this.refs.atmLocation.value,
        atmZipCode: this.refs.atmZipCode.value,
        posAdditionalMerchantAddress: this.refs.posAdditionalMerchantAddress.value,
        atmStatus: this.refs.atmStatus.value,
        atmType: this.refs.atmType.value,
        atmDipCard: this.refs.atmDipCard.value,
        atmDynamicKeyEx: this.refs.atmDynamicKeyEx.value,
        isATMBNA: this.refs.isATMBNA.value,
        isATMEMV: this.refs.isATMEMV.value,
        atmType:this.refs.atmType.value,

        atmState:this.refs.atmState.value,

        atmCountry:this.refs.atmCountry.value,


        // step 2
        dukptSessionKey: this.refs.dukptSessionKey.value,
        lastDukptSessionKey : this.refs.lastDukptSessionKey.value,
        luno: this.refs.luno.value,
        dukptKeyExchangeDate: this.refs.dukptKeyExchangeDate.value,
        dukptKeyExchangeTime: this.refs.dukptKeyExchangeTime.value,
        dukptKeyExchangeDurationinMin: this.refs.dukptKeyExchangeDurationinMin.value,
        tmk: this.refs.tmk.value,
        tmkPart1: this.refs.tmkPart1.value,
        tmkPart2: this.refs.tmkPart2.value,
        lastTxnNumber: this.refs.lastTxnNumber.value,

        // step 3
        currency1: this.refs.currency1.value,
        currency2: this.refs.currency2.value,
        currency3: this.refs.currency3.value,
        currency4: this.refs.currency4.value,
        customizationFileName: this.refs.customizationFileName.value,
        currency1Value_denom: this.refs.currency1Value_denom.value,
        currency2Value_denom:this.refs.currency2Value_denom.value,
        currency3Value_denom: this.refs.currency3Value_denom.value,
        currency4Value_denom: this.refs.currency4Value_denom.value,
        vas: this.refs.vas.value,
        cardHolderAuthCap: this.refs.cardHolderAuthCap.value,
        cardCaptureCap: this.refs.cardCaptureCap.value,
        termOpEnv: this.refs.termOpEnv.value,
        cardHolderPresentData: this.refs.cardHolderPresentData.value,
        cardPresentData: this.refs.cardPresentData.value,
        cardDataInputMode: this.refs.cardDataInputMode.value,
        cardHoldAuthMode:this.refs.cardHoldAuthMode.value,
        cardHoldAuthEntry:this.refs.cardHoldAuthEntry.value,
        
        cardDataOutputCap:this.refs.cardDataOutputCap.value,
        termDataOpCap:this.refs.termDataOpCap.value,

        pinCap:this.refs.pinCap.value,

        cardDataInCap:this.refs.cardDataInCap.value,





      };

    console.log('data-->', newAtm);

        this.setState({data:newAtm});
      }

     

    render() {

        console.log("State Values....",this.state);

        return (
            <div>
                <HeadNavFoot />
                  {/* ================================= Main Page Content - Start ===============================*/}
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
                              <a href="javascript:;">Banks List</a>
                            </li>
                            <li>
                              <a href="javascript:;">Bank</a>
                            </li>
                            <li>
                              <a href="javascript:;">ATM List</a>
                            </li>
                            <li>
                              Add ATM  
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
                                <div className="col-sm-12 col-md-12">
                                  <h2>Add ATM</h2>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                </div>
                              </div>
                            </div>
                            {/* .dt-header */}
                          </div>
                          <div className="role-container">
                            <div className="role-menus overflow-h"> 
                              {/*.stepwizard*/}
                              <div className="stepwizard">
                                <div className="stepwizard-row setup-panel">
                                  <div className="stepwizard-step">
                                    <a href="#step-1" className="btn btn-primary btn-circle">1</a>
                                    <span>Step 1</span>
                                  </div>
                                  <div className="stepwizard-step">
                                    <a href="#step-2" className="btn btn-default btn-circle" disabled="disabled">2</a>
                                    <span>Step 2</span>
                                  </div>
                                  <div className="stepwizard-step">
                                    <a href="#step-3" className="btn btn-default btn-circle" disabled="disabled">3</a>
                                    <span>Step 3</span>
                                  </div>
                                </div>
                              </div>
                              {/*.stepwizard*/}
                            </div>
                            <div className="role-content ">
                              <div className="col-12">
                                {/*#step-1*/}
                                <div className="row setup-content" id="step-1"  >
                                  <div className="col-md-12 col-xs-12 px-0">
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>ATM Details</h4>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>ATM ID</label>
                                          <input type="text" id="atmId"
                                            ref = "atmId"
                                          required /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>ATM Status</label>
                                          <select ref="atmStatus" id="atmStatus">
                                            <option value="Select">Select</option>
                                            <option value="Online" >Online</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>ATM Type</label>
                                          <select ref="atmType" id="atmType">
                                            <option value="Select" >Select</option>
                                            <option value="NDC">NDC</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div class="ux-component ux-edit">
										<label class="field-active" for="FName4">ATM TenantID</label>
										<input id="tenantId" type="text" value={this.state.tenantId} disabled />
									</div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>ATM Dipcard Card Reader</label>
                                          <select ref="atmDipCard" id="atmDipCard">
                                            <option value="Select">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No" >No</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>ATM Dyanamic Key Exchange</label>
                                          <select ref="atmDynamicKeyEx" id="atmDynamicKeyEx">
                                            <option value="Select">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Encrypted Terminal Pin Key</label>
                                          <input type="text" required 
                                          id = "encryptedTerminalPinKey" 
                                          ref = "encryptedTerminalPinKey"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>ATM is BNA</label>
                                          <select   id = "isATMBNA" 
                                          ref = "isATMBNA" >
                                            <option value="Select">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>ATM Machine IP</label>
                                          <input type="text" required 
                                          id="machineIp"
                                          ref="machineIp"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>ATM is EMV Enable ?</label>
                                          <select  ref="isATMEMV" id="isATMEMV">
                                            <option value="Select">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="vspacer20" />
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>ATM Address Details</h4>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>ATM Type</label>
                                          <select ref="atmType" id="atmType">
                                            <option value="Select">Select</option>
                                            <option value="NDC">NDC</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>ATM Name</label>
                                          <input type="text" required 
                                          ref="atmName"
                                          id="atmName"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>ATM Location</label>
                                          <input type="text" required 
                                          ref="atmLocation"
                                          id="atmLocation"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>ATM State</label>
                                          <select id="atmState" ref="atmState">
                                            <option value="Select">Select</option>
                                            <option value="MH">MH</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>ATM Country</label>
                                          <select id="atmCountry" ref="atmCountry">
                                            <option value="Select">Select</option>
                                            <option value="In">In</option>
                                          </select>
                                          <u /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>ATM Zip Code</label>
                                          <input type="text" required 
                                          id="atmZipCode" ref="atmZipCode"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>POS Additional Merchant Address</label>
                                          <input type="text" required 
                                          id="posAdditionalMerchantAddress"
                                          ref="posAdditionalMerchantAddress"
                                          />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid-footer mar20 pb-0 mt-4">
                                      <button className="button float-right nextBtn next1"   onClick={this.processAtm.bind(this)}  >Next</button>
                                      <button className="button secondary" >Cancel</button>
                                    </div>
                                  </div>
                                </div>
                                {/*#step-1*/}
                                {/*#step-2*/}
                                <div className="row setup-content" id="step-2">
                                  <div className="col-md-12 col-xs-12 px-0">
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>DUKPT Details</h4>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>DUKPT Session Key</label>
                                          <input type="text" required 
                                          ref="dukptSessionKey"
                                          id="dukptSessionKey"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Last DUKPT Session Key</label>
                                          <input type="text" required 
                                          ref="lastDukptSessionKey"
                                          id="lastDukptSessionKey"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Logical Unit No (LUNO)</label>
                                          <input type="text" required 
                                          id="luno"
                                          ref = "luno"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-6 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top">DUKPT Key Exchange Date</label>
                                          <input className="datepicker1" type="text" placeholder="DD/MM/YYYY" 
                                          
                                          id="dukptKeyExchangeDate"
                                          ref="dukptKeyExchangeDate"
                                          />
                                          <a className="calendar" />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-6 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>DUKPT Key Exchange Time</label>
                                          <input type="text" required 
                                          id="dukptKeyExchangeTime"
                                          ref="dukptKeyExchangeTime"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-4 col-lg-6 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>DUKPT Key Exchange Duration in Min</label>
                                          <input type="text" required 
                                          id="dukptKeyExchangeDurationinMin"
                                          ref="dukptKeyExchangeDurationinMin"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="vspacer20" />
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>TMK Details</h4>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Terminal Master Key (TMK)</label>
                                          <input type="text" required 
                                          id="tmk"
                                          ref="tmk"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>TMK Part-1</label>
                                          <input type="text" required 
                                          id="tmkPart1"
                                          ref="tmkPart1"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>TMK Part-2</label>
                                          <input type="text" required 
                                          id="tmkPart2"
                                          ref="tmkPart2"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Last Tranaction Number</label>
                                          <input type="text" required 
                                          id="lastTxnNumber"
                                          ref="lastTxnNumber"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid-footer mar20 pb-0 mt-4">
                                      <button className="button nextBtn next1 float-right" onClick={this.processAtm.bind(this)}  >Next</button>
                                      <button className="button secondary ">Cancel</button>
                                      <button className="button secondary prevBtn float-left">Previous</button>
                                    </div>
                                  </div>
                                </div>
                                {/*#step-2*/}     
                                {/*#step-3*/}
                                <div className="row setup-content" id="step-3">
                                  <div className="col-md-12 col-xs-12 px-0">
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>Currency Details</h4>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Currency 1</label>
                                          <input type="text" required 
                                          
                                          id="currency1"
                                          ref="currency1"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Currency 1 Value/Denom</label>
                                          <select id="currency1Value_denom" ref="currency1Value_denom">
                                            <option value="Select">Select</option>
                                            <option value="1-50">1-50</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Currency 2</label>
                                          <input type="text" required 
                                          ref="currency2"
                                          id="currency2"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Currency 2 Value/Denom</label>
                                          <select id="currency2Value_denom" ref="currency2Value_denom">
                                            <option value="Select">Select</option>
                                            <option value="1-50">1-50</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Currency 3</label>
                                          <input type="text" required 
                                          ref="currency3"
                                          id="currency3"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Currency 3 Value/Denom</label>
                                          <select ref="currency3Value_denom" value="currency3Value_denom">
                                            <option value="Select">Select</option>
                                            <option value="1-50">1-50</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Currency 4</label>
                                          <input type="text" required 
                                          id="currency4"
                                          ref="currency4"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Currency 4 Value/Denom</label>
                                          <select id="currency4Value_denom" ref="currency4Value_denom">
                                            <option value="Select">Select</option>
                                            <option value="1-50">1-50</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label><em>*</em>Customization File Name</label>
                                          <input type="text" required 
                                          id="customizationFileName"
                                          ref="customizationFileName"
                                          /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Value Addition Service(VAS)</label>
                                          <select id="vas" ref="vas">
                                            <option value="Select">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="vspacer20" />
                                    <div className="row">
                                      <div className="col-12">
                                        <h4>ATM Address Details</h4>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Card Holder Authentication Capability</label>
                                          <select id="cardHolderAuthCap" ref="cardHolderAuthCap">
                                            <option value="Select">Select</option>
                                            <option value="PIN Entry">PIN Entry</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Card Capture Capability</label>
                                          <select id="cardCaptureCap" ref="cardCaptureCap">
                                            <option value="Select">Select</option>
                                            <option value="Capture Capability">Capture Capability</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Terminal Operational Environment</label>
                                          <select id="termOpEnv" ref="termOpEnv">
                                            <option value="Select">Select</option>
                                            <option value="No Terminal Used">No Terminal Used</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Card Holder Present Data</label>
                                          <select id="cardHolderPresentData" ref="cardHolderPresentData">
                                            <option value="Select">Select</option>
                                            <option value="Cardholder Present">Cardholder Present</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Card Present Data</label>
                                          <select id="cardPresentData" ref="cardPresentData">
                                            <option value="Select">Select</option>
                                            <option value="Card Present Data">Card Present Data</option>
                                          </select>
                                          <u /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Card Data Input Mode</label>
                                          <select ref="cardDataInputMode" id="cardDataInputMode">
                                            <option value="Select">Select</option>
                                            <option value="E-Commerce">E-Commerce</option>
                                          </select>
                                          <u /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Card Holder Authentication Method</label>
                                          <select ref="cardHoldAuthMode" id="cardHoldAuthMode">
                                            <option value="Select">Select</option>
                                            <option value="Not Authenticate">Not Authenticated</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Card Holder Authentication Entry</label>
                                          <select ref="cardHoldAuthEntry" id="cardHoldAuthEntry">
                                            <option value="Select">Select</option>
                                            <option value="ICC">ICC</option>
                                          </select>
                                          <u /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Card Data Output Capability</label>
                                          <select ref="cardDataOutputCap" id="cardDataOutputCap">
                                            <option value="Select">Select</option>
                                            <option value="ICC Write">ICC Write</option>
                                          </select>
                                          <u /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Terminal Data Output Capability</label>
                                          <select ref="termDataOpCap" id="termDataOpCap">
                                            <option value="Select">Select</option>
                                            <option value="Print Capability">Print Capability</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>PIN Capture Capability</label>
                                          <select ref="pinCap" id="pinCap">
                                            <option value="Select">Select</option>
                                            <option value="1-4 Chars Maximum">1-4 Chars Maximum</option>
                                          </select>
                                          <u /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component">
                                          <label className="label-top"><em>*</em>Card Data Input Capability</label>
                                          <select ref="cardDataInCap" id="cardDataInCap">
                                            <option value="Select">Select</option>
                                            <option value="Key Entered">Key Entered</option>
                                          </select>
                                          <u /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid-footer mar20 pb-0 mt-4">
                                      <button className="button nextBtn next1 float-right" onClick={this.processAtm.bind(this)}  >Submit</button>
                                      <button className="button secondary ">Cancel</button>
                                      <button className="button secondary prevBtn float-left">Previous</button>
                                    </div>
                                  </div>
                                </div>
                                {/*#step-3*/}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .grid-container */}
                        <div className="vspacer50" />
                        
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

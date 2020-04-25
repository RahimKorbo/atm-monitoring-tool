import React, { Component } from 'react'

import { Link } from "react-router-dom";
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Dashfooter from '../common/Dashfooter';


export default class BankList extends Component {

    componentDidMount() {

        const script = document.createElement("script");

        script.src = `js/contentDatatable.js`;
        script.async = true;

        document.body.appendChild(script);


    }
    render() {
        return (

            <div className="main-container" >
                <Header />
                <Sidebar />
                <main >
                    <div className="in-main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 px-0">

                                    <div className="right-main-column">
                                        <div className="right-col-container">
                                            <div className="main-content">
                                                <div className="in-mcontainer">
                                                    <div className="breadcrumb">
                                                        <ul className="lst-breadcrumb">
                                                            <li>
                                                                <Link to="/">Banks</Link>
                                                            </li>
                                                            <li>
                                                                Banks
                                                     </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-wrapper">
                                                        <section className="content-header">
                                                            <div className="container-fluid">
                                                                <div className="row mb-2">
                                                                    <div className="col-sm-6">
                                                                        <h1>Banks</h1>
                                                                        

                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                    <ol className="float-sm-right">
                                                                            <li>
                                                                                <a href="#" className="dt-add button" data-toggle="tooltip" title="add">
                                                                                    <em>New Bank</em>
                                                                                </a>
                                                                            </li>
                                                                        </ol>
                                                                        </div> 
                                                                    {/* <div class="col-sm-6">
                                                                        <ol class="breadcrumb float-sm-right">
                                                                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                                                                            <li class="breadcrumb-item active">DataTables</li>
                                                                        </ol>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </section>

                                                        <section className="content">
                                                            <div className="row">
                                                                <div className="col-12">






                                                                    <div className="card">

                                                                        <div className="card-body">

                                                                            <table id="example1" className="table table-bordered table-striped">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Bank Name</th>
                                                                                        <th>Active ATM List</th>
                                                                                        <th>Inactive ATM List</th>
                                                                                        <th>Status</th>
                                                                                        <th>Action</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>Indian Bank</td>
                                                                                        <td>290</td>
                                                                                        <td>60</td>
                                                                                        <td><span className="approve">Active</span></td>
                                                                                        <td>
                                                                                            <a href="#" className="viewbtn"> <img src="../images/icon/view.png" alt="view" /></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Bank of Maharashtra</td>
                                                                                        <td>22</td>
                                                                                        <td>12</td>
                                                                                        <td><span className="approve">Active</span></td>
                                                                                        <td>
                                                                                            <a href="#" className="viewbtn"> <img src="../images/icon/view.png" alt="view" /></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Union Bank</td>
                                                                                        <td>390</td>
                                                                                        <td>54</td>
                                                                                        <td><span className="approve">Active</span></td>
                                                                                        <td>
                                                                                            <a href="#" className="viewbtn"> <img src="../images/icon/view.png" alt="view" /></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Union Bank</td>
                                                                                        <td>390</td>
                                                                                        <td>54</td>
                                                                                        <td><span className="approve">Active</span></td>
                                                                                        <td>
                                                                                            <a href="#" className="viewbtn"> <img src="../images/icon/view.png" alt="view" /></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Union Bank</td>
                                                                                        <td>390</td>
                                                                                        <td>54</td>
                                                                                        <td><span className="approve">Active</span></td>
                                                                                        <td>
                                                                                            <a href="#" className="viewbtn"> <img src="../images/icon/view.png" alt="view" /></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Union Bank</td>
                                                                                        <td>390</td>
                                                                                        <td>54</td>
                                                                                        <td><span className="approve">Active</span></td>
                                                                                        <td>
                                                                                            <a href="#" className="viewbtn"> <img src="../images/icon/view.png" alt="view" /></a>
                                                                                        </td>
                                                                                    </tr>


                                                                                </tbody>

                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                    <div className="vspacer100"></div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Dashfooter />
            </div>
            


        )
    }
}

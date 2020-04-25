import React, { Component } from 'react'
import Header from '../common/Header'
import Sidebar from '../common/Sidebar'
import Dashfooter from '../common/Dashfooter';
import Admincontent from '../admin/Admincontent';
import BankList from './BankList';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
             <Header /> 
             <Sidebar />
             <Admincontent />
             <Dashfooter />
             
            </div>
        )
    }
}

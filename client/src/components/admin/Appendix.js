import React, { Component, Fragment } from 'react'
import axios from 'axios'

import TextFieldGroup from '../common/TextFieldGroup'
import '../appendix/Appendix.css'
import SpinnerLoader from '../common/Spinner'
import { Link } from 'react-router-dom'
import Pagination from '../common/Pagination'

//Creating appendix class
class AppendixList extends Component {
   constructor(props) {
       super(props);
       this.state = {
            appendixlist: [],
            spinner:      true,
            pageOfItems:  [],
            srNo:         ''
    }
    this.onChange               =   this.onChange.bind(this)
    this.onChangePage           =   this.onChangePage.bind(this)
   }

    componentDidMount() {
        axios
            .get('/api/contactus/list') //geting API data
            .then(thread => {
                this.setState({
                    threadlist: thread.data,
                    spinner: false
                })                  
            })
    }
    onChangePage(pageOfItems, page) {
        this.setState({
            pageOfItems: pageOfItems,
            srNo:        (page * 5) - 4

        })
    }
   
    
   // filter method
    onChange(e) {        
        let currentList = [];
        let newList = [];        
            if (e.target.value !== "") {
                currentList = this.state.threadlist;            
                newList = currentList.filter(itemData => {
                            let item = JSON.stringify(itemData)
                            const lc = item.toLowerCase();
                            const filter = e.target.value.toLowerCase();
                    return lc.includes(filter);
                })
            } else {
                newList = this.state.threadlist;
            }
            console.log(newList) // testing log for filter
            this.setState({
                threadlist  : newList
            });                
    }
    
    render() {    
        let dataList = ''   
        if(this.state.spinner === true){
            dataList = <SpinnerLoader />
        }
        else {
            dataList = this.state.pageOfItems.map((appendix, key) => (
                <tr key={key} >
                    <td>{this.state.srNo++}</td>
                    <td >{appendix.name}</td>
                    <td>{appendix.address}</td>
                    <td>{appendix.mobileno}</td>
                    <td>{appendix.appendix}</td>
                </tr>                       
            ))
        }

        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                        <h4>Search By Keyword</h4>
                        </div>
                        <div className="col-md-6">                        
                            <div className="form-group has-search">  
                                <TextFieldGroup type="text" 
                                    className="input search" 
                                    onChange={this.onChange}
                                    placeholder="Search..." 
                                />                                  
                                <span className="fa fa-search form-control-feedback"></span>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col-md-2"></div>
                        <div className="col-md-9">
                            <div className="table-responsive">
                                <table className="table-bordered table">
                                    <thead>
                                        <tr className="table-info">
                                            <th>Sr no.</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Mobileno</th>
                                            <th>Appendix</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataList}                           
                                    </tbody>
                                </table>
                                <div className="float-right">
                                <Pagination 
                                    items = {this.state.threadlist}
                                    onChangePage={this.onChangePage}
                                />
                            </div>
                            </div>
                           
                        </div>
                    </div>                    
                </div>
            </Fragment>
        )
    }
}

export default AppendixList;
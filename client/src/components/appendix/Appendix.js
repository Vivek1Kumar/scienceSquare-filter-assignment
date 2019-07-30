import React, { Component, Fragment } from 'react'
import axios from 'axios'

import TextFieldGroup from '../common/TextFieldGroup'
import './Appendix.css'
import SpinnerLoader from '../common/Spinner'
import { Link } from 'react-router-dom'

//Creating appendix class
class AppendixList extends Component {
   constructor(props) {
       super(props);
       this.state = {
            appendixlist: [],
            spinner:    true,
    }
    this.onChange               =   this.onChange.bind(this)
    this.sectorOnClick          =   this.sectorOnClick.bind(this)
    this.industryOnClick        =   this.industryOnClick.bind(this)
    this.availabilityOnClick    =   this.availabilityOnClick.bind(this)
    this.countryOnClick         =   this.countryOnClick.bind(this)
   }

    componentDidMount() {
        axios
            .get('/api/appendix/list') //geting API data
            .then(thread => {
                this.setState({
                    threadlist: thread.data,
                    spinner: false
                })                  
            })
    }
   
    sectorOnClick() {
        axios
        .get(`/api/appendix/sector/search`) //geting API data
        .then(name => {
            this.setState({
                threadlist: name.data,
                spinner: false
            })                  
        })
    }
    industryOnClick() {
        axios
        .get(`/api/appendix/industry/search`) //geting API data
        .then(name => {
            this.setState({
                threadlist: name.data,
                spinner: false
            })                  
        })
    }
    availabilityOnClick() {
        axios
        .get(`/api/appendix/availability/search`) //geting API data
        .then(name => {
            this.setState({
                threadlist: name.data,
                spinner: false
            })                  
        })
    }
    countryOnClick() {
        axios
        .get(`/api/appendix/country/search`) //geting API data
        .then(name => {
            this.setState({
                threadlist: name.data,
                spinner: false
            })                  
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
            dataList = this.state.threadlist.map((appendix, key) => (
                <tr key={key} >
                    <td >{appendix.name}</td>
                    <td>{appendix.sector}</td>
                    <td>{appendix.industry}</td>
                    <td>{appendix.availability}</td>
                    <td>{appendix.country}</td>
                    <td><Link className="btn btn-info" to="/contact-book">Book</Link></td>
                </tr>                       
            ))
        }

        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
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
                        <div className="col-md-3">
                            <div className="card">
                                <div className="ml-4 mt-3">
                                    <input type="checkbox" 
                                         onClick={this.sectorOnClick}
                                    />
                                    <label className="ml-2">Sector</label><br/>
                                    <input type="checkbox" 
                                        onClick= {this.industryOnClick}
                                    />
                                    <label className="ml-2">Industry / Academia</label><br/>
                                    <input type="checkbox" 
                                        onClick= {this.availabilityOnClick}
                                    
                                    />
                                    <label className="ml-2">Availability</label><br/>
                                    <input type="checkbox" 
                                        onClick= {this.countryOnClick}                                    
                                    />
                                    <label className="ml-2">Country</label>
                                </div>
                            </div>
                        </div><br/>     
                        <div className="col-md-9">
                            <div className="table-responsive">
                                <table className="table-bordered table">
                                    <thead>
                                        <tr className="table-info">
                                            <th>Name</th>
                                            <th>Sector</th>
                                            <th>industry</th>
                                            <th>Availability</th>
                                            <th>Country</th>
                                            <th>Contact us</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataList}                           
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>                    
                </div>
            </Fragment>
        )
    }
}

export default AppendixList;
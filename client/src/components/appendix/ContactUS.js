import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

//resuable component
import TextFieldGroup from '../common/TextFieldGroup'
import { postContactUs } from '../../actions/contactUsAction'

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:       '',
            address:    '',
            mobileno:   '',
            appendix:   '',
            errors:     {}
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
          this.setState({errors: nextProps.errors})
        }
    }
   
    onSubmit(e) {
        e.preventDefault()              
        const contactus = {
            name:       this.state.name,
            address:    this.state.address,
            mobileno:   this.state.mobileno,
            appendix:   this.state.appendix
        }
        // console.log(contactus)
        this.props.postContactUs(contactus, this.props.history)
    }
     
    //dynamic change state
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});        
    }
   
    render() {      
        const { errors } = this.state;
        console.log(errors)
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <h3 className="display-8">Contact Details</h3>
                        <hr/> <br/>
                            <form noValidate onSubmit= {this.onSubmit}>
                                <TextFieldGroup 
                                    placeholder="Name"
                                    type="text"
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    erorr={errors.name}                                    
                                />
                                <TextFieldGroup 
                                    placeholder="Address"
                                    type="text"
                                    name='address'
                                    value={this.state.address}
                                    onChange={this.onChange} 
                                    erorr={errors.address}                                   
                                />
                                 <TextFieldGroup 
                                    placeholder="Mobile no"
                                    type="text"
                                    name='mobileno'
                                    value={this.state.mobileno}
                                    onChange={this.onChange} 
                                    erorr={errors.mobileno}                                    

                                />
                                 <TextFieldGroup 
                                    placeholder="Appendix"
                                    type="text"
                                    name='appendix'
                                    value={this.state.appendix}
                                    onChange={this.onChange} 
                                    erorr={errors.appendix}                                   
                                />
                                <input type="submit" value="Send" className="btn btn-info float-right mt-4 text-center" />
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
ContactUs.propTypes = {
    postContactUs: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  })
export default connect(mapStateToProps, { postContactUs })(withRouter(ContactUs));
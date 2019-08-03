import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

//resuable component
import TextFieldGroup from '../common/TextFieldGroup'
import { postAppendix } from '../../actions/appendixAction'

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:         '',
            sector:       '',
            industry:     '',
            availability: '',
            country:      '', 
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
        const appendix = {
            name:         this.state.name,
            sector:       this.state.sector,
            industry:     this.state.industry,
            availability: this.state.availability,
            country:      this.state.country,
        }
        console.log(appendix)
        this.props.postAppendix(appendix, this.props.history)
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
                        <h3 className="display-8">Create Appendix Records</h3>
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
                                    placeholder="sector"
                                    type="text"
                                    name='sector'
                                    value={this.state.sector}
                                    onChange={this.onChange} 
                                    erorr={errors.sector}                                   
                                />
                                 <TextFieldGroup 
                                    placeholder="Industry"
                                    type="text"
                                    name='industry'
                                    value={this.state.industry}
                                    onChange={this.onChange} 
                                    erorr={errors.industry}                                    

                                />
                                <TextFieldGroup 
                                    placeholder="Availability"
                                    type="text"
                                    name='availability'
                                    value={this.state.availability}
                                    onChange={this.onChange} 
                                    erorr={errors.availability}                                   
                                />
                                 <TextFieldGroup 
                                    placeholder="Country"
                                    type="text"
                                    name='country'
                                    value={this.state.country}
                                    onChange={this.onChange} 
                                    erorr={errors.country}                                   
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
    postAppendix: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  })
export default connect(mapStateToProps, { postAppendix })(withRouter(ContactUs));
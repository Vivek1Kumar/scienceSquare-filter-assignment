const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateContactUsInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.mobileno = !isEmpty(data.mobileno) ? data.mobileno : '';
  data.appendix = !isEmpty(data.appendix) ? data.appendix : '';

  if(Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required';
  }
 
  if (Validator.isEmpty(data.mobileno)) {
    errors.mobileno = 'Mobile field is required';
  }

  if (Validator.isEmpty(data.appendix)) {
    errors.appendix = 'Appenix field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

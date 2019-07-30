const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateAppendixInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.sector = !isEmpty(data.sector) ? data.sector : '';
  data.industry = !isEmpty(data.industry) ? data.industry : '';
  data.availability = !isEmpty(data.availability) ? data.availability : '';
  data.country = !isEmpty(data.country) ? data.country : '';

  if(Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.sector)) {
    errors.sector = 'Sector field is required';
  }
 
  if (Validator.isEmpty(data.industry)) {
    errors.industry = 'Industry field is required';
  }

  if (Validator.isEmpty(data.availability)) {
    errors.availability = 'Availability field is required';
  }

  if (Validator.isEmpty(data.country)) {
    errors.country = 'Country field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

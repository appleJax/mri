import {
  validatePresence,
  validateLength,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  name: validatePresence({ presence: true, message: 'Please provide your name.' })
 ,email: validateFormat({ type: 'email', message: 'Please provide your email.' })
 ,phone: validateFormat({ type: 'phone', allowBlank: true, message: 'Please Provide a Valid Phone Number'})
 ,location: validatePresence({ presence: true, message: 'Please provide a location.'})
 ,startDate: validatePresence({ presence: true, message: 'Please provide a Start Date.'})
};

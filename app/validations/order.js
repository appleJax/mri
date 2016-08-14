import {
  validatePresence,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  name: validatePresence(true)
 ,email: validateFormat({ type: 'email' })
 ,phone: validateFormat({ type: 'phone', allowBlank: true })
 ,location: validatePresence(true)
 ,startDate: validatePresence(true)
};

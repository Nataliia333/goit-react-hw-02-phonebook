import { Component } from 'react';
import { v4 as uuid } from 'uulid';

const INIITAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  state = { INIITAL_STATE };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();
    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, phone });
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;

    if (!name || !phone) {
      alert('Some filed is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(INIITAL_STATE);

  render() {
    const { name, phone } = this.state;
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange
        />
      </form>
    );
  }
}

export default ContactForm;

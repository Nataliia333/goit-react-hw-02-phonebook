import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

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

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();
    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, phone });
    this.resetForm();
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
      <form className={styles.ContactForm} onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handleChangeForm}
        />
        <button className={styles.ContactButton} type="submit">
          AddContact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactForm;

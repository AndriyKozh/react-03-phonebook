import { Component } from 'react';

import PropTypes from 'prop-types';

import shortid from 'shortid';

import { FormContact, FormLable, FormBtn, FormInput } from './Form.style';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = ev => {
    const { name, value } = ev.currentTarget;
    this.setState({ [name]: value });
  };

  handleSabmit = ev => {
    ev.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: shortid.generate(),
    });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContact>
        <form onSubmit={this.handleSabmit}>
          <FormLable>
            Name
            <FormInput
              id={this.nameInputId}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLable>
          <FormLable>
            Number
            <FormInput
              id={this.numberInputId}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLable>
          <FormBtn type="submit">Add contact</FormBtn>
        </form>
      </FormContact>
    );
  }
}
Form.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

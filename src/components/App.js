import { Component } from 'react';

import Form from './Form/Form';

import Contacts from './Contacts/Contacts';

import Filter from './Filter/Filter';

import { AppBlock } from './App.style';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addCont = data => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return alert(`${data.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((_, ind) => ind !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');

    const parsContacts = JSON.parse(contacts);
    if (parsContacts) {
      this.setState({ contacts: parsContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  render() {
    const { filter } = this.state;

    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <AppBlock>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addCont} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <Contacts contacts={filterContact} listDel={this.deleteContact} />
      </AppBlock>
    );
  }
}
export default App;

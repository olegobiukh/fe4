import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, name, message } = this.state;
    console.log(`name: ${name},\nemail: ${email},\nmessage: ${message}`);
    this.setState({ name: "", email: "", message: "" });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <form className="contact__form container" onSubmit={this.handleSubmit}>
        <input
          className="contact__item"
          type="text"
          placeholder="Name"
          value={name}
          onChange={this.handleNameChange}
          required
        />
        <input
          className="contact__item"
          type="email"
          placeholder="Email"
          value={email}
          onChange={this.handleEmailChange}
          required
        />
        <textarea
          className="contact__item contact__message"
          rows="3"
          placeholder="Send a message"
          value={message}
          onChange={this.handleMessageChange}
        />
        <button className="contact__item contact__btn">Send</button>
      </form>
    );
  }
}

export default Form;

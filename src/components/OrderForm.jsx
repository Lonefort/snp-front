import React, { Component } from 'react'
import NavBar from './NavBar.jsx'
import { handleAddressValidation, postShippingOrder } from '../api/apiRequests'

class OrderForm extends Component {
  constructor (props) {
      super(props)

      this.state = {
        phoneNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        zip: ''
      }
      this.submitHandler = this.submitHandler.bind(this)
      this.changeHandler = this.changeHandler.bind(this)
    }

    submitHandler (e) {
      e.preventDefault();
      e.target.className.includes('was-validated') ? '' : e.target.className += ' was-validated';
      handleAddressValidation(this.state.address, this.state.city, this.state.zip).then(data => this.sendDataToAPI(data))
    }

    sendDataToAPI (data) {
      if (data.ErrorCode > 0) {
        alert(data.ErrorMessage)
      } else {
        const data = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phoneNumber: this.state.phoneNumber,
          address: this.state.address,
          city: this.state.city,
          zip: this.state.zip,
        }
        if (!Object.values(data).some(val => !val)) {
          // Put the API call here
          postShippingOrder(data)
        } else {
          alert('Fill up all fields please')
        }
      }
    }

    filterPhoneNumberInput (input) {
      const allowNumbers = /^[0-9\b]+$/ // Regexp to allow just numbers in phoneNumber input
      return allowNumbers.test(input)
    }

    changeHandler (e) {
      const inputValue = e.target.value
      if (e.target.name === 'phoneNumber') {
        if ( this.filterPhoneNumberInput(inputValue) || inputValue == ''){
          this.setState({ phoneNumber: inputValue })
        }
      } else {
        this.setState({ ...this.state, [e.target.name]: inputValue })
      }
    }

    render() {
      return (
        <div className="app-wrapper">
          <NavBar />
          <form className="needs-validation" onSubmit={this.submitHandler} noValidate>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="userName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={this.state.firstName}
                  onChange={this.changeHandler}
                  required/>
                  <div className="invalid-feedback">Please provide a valid first name.</div>
                  <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="userSurname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userSurname"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={this.state.lastName}
                  onChange={this.changeHandler}
                  required/>
                  <div className="invalid-feedback">Please provide a valid last name.</div>
                  <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="userEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  required/>
                  <div className="invalid-feedback">Please provide a valid email.</div>
                  <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="userNumber">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="userNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={this.state.phoneNumber}
                  onChange={this.changeHandler}
                  maxLength="10"
                  required/>
                  <div className="invalid-feedback">Please provide a valid phone number.</div>
                  <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="userAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="userAddress"
                name="address"
                placeholder="1234 Main St"
                ref={e => { this.address = e }}
                value={this.state.address}
                onChange={this.changeHandler}
                required/>
                <div className="invalid-feedback">Please provide a valid street name.</div>
                <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="city"
                  placeholder="New York etc."
                  ref={e => { this.city = e }}
                  value={this.state.city}
                  onChange={this.changeHandler}
                  required/>
                <div className="invalid-feedback">Please provide a valid city.</div>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  name="zip"
                  placeholder="123456"
                  ref={e => { this.zip = e }}
                  value={this.state.inputZip}
                  onChange={this.changeHandler}
                  required/>
                <div className="invalid-feedback">Please provide a valid zip code.</div>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialNotes">Special Notes</label>
              <textarea
                className="form-control"
                id="specialNotes"
                name="specialNotes"
                rows="3"
                maxLength="500"
                value={this.state.specialNotes}
                onChange={this.changeHandler}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    }
  }

export default OrderForm;
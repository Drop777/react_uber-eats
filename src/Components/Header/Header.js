import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input';
import './Header.scss';

export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
  };

  handleChange = ({ target }) => {
    this.setState(
      {
        [target.name]: target.value,
      }
    );
  };

  render() {
    console.log(this.state);

    const {
      address,
      time,
      search,
    } = this.state;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img src="./images/logo.svg" alt="logo" />
            <div className="header__delivery-info">
              <Input
                iconUrl="./images/place.svg"
                name="address"
                value={address}
                onChange={this.handleChange}
                placeholder="Address"
              />
              <Input
                name="time"
                value={time}
                onChange={this.handleChange}
                placeholder="Time"
                type="time"
              />
            </div>
            <Input
              name="search"
              value={search}
              onChange={this.handleChange}
              placeholder="Search"
              iconUrl="./images/search.svg"
              className="header__search"
            />
            <a
              className="header__link"
              href="/sign-in"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {

};

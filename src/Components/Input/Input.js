import React, { PureComponent, createRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Input.scss';

export class Input extends PureComponent {
  state = {
    isFocused: false,
  };

  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true });

  handleBlure = () => this.setState({ isFocused: false });

  focus = () => this.inputRef.current.focus();

  render() {
    const {
      iconUrl,
      value,
      onChange,
      type,
      placeholder,
      name,
      className,
    } = this.props;

    const { isFocused } = this.state;

    const rootClass = cx('control', {
      'control--focused': isFocused,
      [className]: !!className,
    });

    return (
      <div
        className={rootClass}
        onClick={this.focus}
        role="presentation"
      >
        {!!iconUrl && (
          <img
            src={iconUrl}
            alt={placeholder}
            className="control__icon"
          />
        )
        }
        <input
          red={this.createRef}
          type={type}
          value={value}
          onFocus={this.handleFocus}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={this.handleBlure}
          name={name}
          className="control__input"
        />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  iconUrl: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  iconUrl: '',
  className: '',
};

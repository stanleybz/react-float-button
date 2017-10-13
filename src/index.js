import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Index component
class FloatAnimate extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showUpdate = this.showUpdate.bind(this);
  }

  showUpdate() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.props.children.map((item, i) => {
          if (i === 0) {
            return (
              <div
                tabIndex={0}
                role="button"
                style={{ zIndex: 2 }}
                onClick={this.showUpdate}
              >
                {item}
              </div>
            );
          }

          return (
            <div
              tabIndex={-1}
              role="button"
              style={{
                zIndex: 1,
                position: 'absolute',
                bottom: this.state.show ? this.props.margin * i : 0,
                opacity: this.state.show ? 1 : 0,
                visibility: this.state.show ? 'visible' : 'hidden',

                MsTransition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                WebkitTransition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

                MsTransitionDelay: `${i * 0.03}s`,
                WebkitTransitionDelay: `${i * 0.03}s`,
                transitionDelay: `${i * 0.03}s`,

                MsTransform: `scale(${this.state.show ? 1 : 0}, ${this.state.show ? 1 : 0})`,
                WebkitTransform: `scale(${this.state.show ? 1 : 0}, ${this.state.show ? 1 : 0})`,
                transform: `scale(${this.state.show ? 1 : 0}, ${this.state.show ? 1 : 0})`,
              }}
              onClick={this.showUpdate}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}

FloatAnimate.propTypes = {
  margin: PropTypes.number,
  children: PropTypes.array, // eslint-disable-line
  style: PropTypes.obj,
};

FloatAnimate.defaultProps = {
  margin: 50,
  children: [],
  style: {},
};

export default FloatAnimate;

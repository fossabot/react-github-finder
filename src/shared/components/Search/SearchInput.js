import React, { Component } from 'react';
import { Icon, Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

export default class SearchInput extends Component {

  static defaultProps = {
    placeholder: "GitHub @username"
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
  };

  onSubmit = (value, event) => {
    event.preventDefault();
    this.props.onSubmit(value);
  };

  render() {
    return (
      <Row justify='center' align='middle' style={{marginTop:15}}>
        <Col offset={8} span={8}>
          <Input.Search
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
            enterButton
            allowClear
            placeholder={this.props.placeholder}
            onSearch={this.onSubmit}
          />
        </Col>
      </Row>
    )
  }
};
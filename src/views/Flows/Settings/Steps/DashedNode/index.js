import React, { Component } from 'react'
import PropTypes from 'prop-types'

import IconButton from 'components/IconButton'
import Node from '../Node'
import classes from './dashed.scss'

export default class FlowDottedNode extends Component {
  static propTypes = {
    remove: PropTypes.func.isRequired,
  }

  handleClick = (e) => {
    e.stopPropagation()
  }

  render () {
    const { remove } = this.props
    return <Node>
      <span className={classes.dashed} onClick={this.handleClick}>
        <IconButton className={classes.close} onClick={remove}>
          <i className='icon icon-cross' />
        </IconButton>
      </span>
    </Node>
  }
}

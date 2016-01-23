import React, {Component} from 'react';

class Accordion extends Component {
  static propTypes = {
    liveKey: React.PropTypes.string,
    auto: React.PropTypes.bool,
    prefixName: React.PropTypes.string,
    onSelect: React.PropTypes.func
  }

  static defaultProps = {
    liveKey: '',
    auto: false,
    prefixName: 'cat'
  }

  _createLiveKey(props) {
    return props.auto ? props.liveKey : [props.liveKey];
  }

  state = {
    liveKey: this._createLiveKey(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.liveKey !== nextProps.liveKey) {
      this.setState({
        liveKey: this.createLiveKey(nextProps)
      });
    }
  }

  handleClick(value){
    let { liveKey } = this.state;

    if (this.props.auto) {
      liveKey = value;
    } else {
      let index = liveKey.indexOf(value);
      if (index > -1) {
        liveKey.splice(index, 1);
      } else {
        liveKey.push(value);
      }
    }

    this.setState({
      liveKey: liveKey
    });

    this.props.onSelect && this.props.onSelect(value, liveKey);
  }

  render() {
    let { auto, prefixName } = this.props;
    let { liveKey } = this.state;
    let self = this;

    return (
      <div className="panel-group">
        {
          React.Children.map(this.props.children, (child, index) => {
            let { eventKey=index } = child.props;
            return React.cloneElement(child, {
              show: Array.isArray(liveKey) ?
                liveKey.indexOf(eventKey) > -1 :
                liveKey === eventKey,
              prefixName: prefixName,
              onClick: self.handleClick.bind(self, eventKey)
            });
          })
        }
      </div>
    )
  }
}

export default Accordion;

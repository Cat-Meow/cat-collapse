import React, {Component} from 'react';
import Panel from 'rs-panel'

class Collapse extends Component {
    static propTypes = {
        show: React.PropTypes.bool,
        prefixName: React.PropTypes.string
    }
    
    static defaultProps = {
        show: false,
        prefixName: 'salt'
    }

    render() {
        let { componentClass, show } = this.props;
        let Node = componentClass ? 'div' : Panel;
        let divStyle = {
                display: this.props.show ? 'block' : 'none'
            };

        return (
            <Node {...this.props}>
                <div style={divStyle}>
                    {this.props.children}
                </div>
            </Node>
        );

    }
}

export default Collapse;

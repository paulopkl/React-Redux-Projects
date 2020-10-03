import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import If from '../operator/If';
import { selectTab } from './tabActions';

class TabHeader extends React.Component {

    render() {
        const selected = this.props.tab.selected === this.props.target;
        const visible = this.props.tab.visible[this.props.target];

        return (
            <If test={visible}>
                <li className={selected ? 'active' : ''}>
                    <a href="javascript:;" data-toggle="tab" 
                        onClick={() => this.props.selectTab(this.props.target)}
                        data-target={this.props.target}>
                            <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
        );
    }
}

const mapStateToProps = state => {
    return { tab: state.tab }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ selectTab }, dispatch);
}

const tabheader = connect(mapStateToProps, mapDispatchToProps)(TabHeader);

export default tabheader;
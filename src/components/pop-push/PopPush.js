import React from 'react';
import { connect } from 'react-redux';
import { locateAction } from '../../actions';
import Template from '../template/Template';


class PopPush extends React.Component {

    componentDidMount() {
        this.props.locateAction('popPush');
    }

    render() {
        return <div><Template translate={this.props.translate} classLP="popPush" formType='register'/></div>
    }
}

const mapStateToProps = state => {
    return {translate: state.translate}
}

export default connect(mapStateToProps, { locateAction })(PopPush);
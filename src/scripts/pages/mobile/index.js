import React from 'react';
import { PropTypes } from 'react-router';
import { connect } from 'react-redux';

//UI component
import { NavBar, Icon } from 'antd-mobile';

class index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            supportedBanks: null,
            fail: false,
            render: false,
        };
    }
    componentDidMount() {
    }
    render() {        
        return (
            <div>
                <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[<Icon key="0" type="search" />, <Icon key="1" type="ellipsis" />]}
                    >NavBar</NavBar>
            </div>
        );
    }
}

index.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(index);




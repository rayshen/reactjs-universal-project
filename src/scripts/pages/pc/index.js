import React from 'react';
import { PropTypes,withRouter} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import appActions from '../../actions/app';

//UI component
import {Button} from 'antd';

import {themeColor} from '../../constants/ui';

class index extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
 
        };
    }
    componentDidMount() {

    }

    render() {        
        return (
            <div className='container'>
                <div className="mx-title-bar" style={{backgroundColor:this.props.darkMode?themeColor.dark:themeColor.light}}>
                    <h1 className="mx-title-bar-title">首页</h1>
                    <div className="mx-title-bar-right">
                        <Button onClick={()=>{
                            this.props.router.push('/detail')
                        }}>
                            下一页
                        </Button>
                    </div>
                </div>
                <div className='content'>
                    <Button className='switch-button' onClick={()=>{
                        this.props.setDarkMode(!this.props.darkMode)
                    }}>
                        {
                            this.props.darkMode?
                            '关闭夜间模式':'开启夜间模式'
                        }
                    </Button>
                    <img src={require('../../../assets/logo.jpg')}  className='main-img'/>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        darkMode:state.app.darkMode
    }),
    (dispatch) => ({
        setDarkMode:bindActionCreators(appActions.setDarkMode,dispatch)
    })
)(withRouter(index));




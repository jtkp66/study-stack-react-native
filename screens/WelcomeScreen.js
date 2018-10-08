import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Study Stack', color: '#03A9F4' },
    { text: 'An App that helps you Study for Job Interviews', color: '#009688' },
    { text: 'Study anywhere! Give it a try!', color: '#03A9F4' }
];

class WelcomeScreen extends Component {

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        // if (_.isNull(this.state.token)) {
        //     return <AppLoading />;
        // }

        return (
           <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;

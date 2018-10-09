const React = require('react');
const Expand = require('react-native-simple-expand');

const {
    StyleSheet,
    Animated,
    TouchableOpacity,
    Text,
    View,
} = require('react-native');

const { Component } = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    toggle: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#403'
    },
    arrow: {
        color: '#fff'
    }
});

module.exports = class Basic extends Component {
    constructor (props) {
        super(props);
        this.state = { animatedValue: new Animated.Value(40) }
    }

    getMaxHeight = () => {
        if (!this.refs || !this.refs.expand)
            return 9999;

        return this.refs.expand.state.maxHeight;
    };

    render () {
        const { animatedValue } = this.state;
        const maxHeight = this.getMaxHeight();

        const opacity = this.state.animatedValue.interpolate({
            inputRange: [0, 40, maxHeight*.5, maxHeight],
            outputRange: [1, 1, 0.5,  1],
        });

        const height = this.state.animatedValue.interpolate({
            inputRange: [0, maxHeight * .3, maxHeight],
            outputRange: [0, 0, 100],
        });

        return (
            <View style={{ flex: 1, paddingTop: 50 }}>
                <Expand
                    minHeight={40}
                    containerStyle={{ flexGrow: 1 }}
                    ref="expand"
                    value={this.state.open}
                    animatedValue={animatedValue}>
                    <Animated.Text style={[styles.welcome, { opacity }]}>
                        {this.state.open ? 'Tap to Close' : 'Tap to Open'}
                    </Animated.Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ height: 100 }}>
                            <Animated.View style={{ height, justifyContent: 'center', backgroundColor: '#f1f1f1' }}>
                                <Text style={{ textAlign: 'center' }}>
                                    react-native-simple-expand
                                </Text>
                            </Animated.View>
                        </View>
                    </View>
                </Expand>
                <View>
                    <TouchableOpacity style={styles.toggle} onPress={()=>this.setState({ open: !this.state.open })}>
                        <Text style={styles.arrow}>{this.state.open ? '▲' : '▼'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

// import React, {
//     Component,
//     StyleSheet,
//     Text,
//     View,
//     TouchableHighlight,
//     Animated
//   } from "react-native"; //Step 1
//   import { Icon } from 'react-native-elements';
  
//   class Panel extends Component {
//     constructor(props) {
//       super(props);
  
//       this.icons = {
//         //Step 2
//         up: {icon: 'rowing'}, 
//         down: {icon: 'heartbeat'}
//       };
  
//       this.state = {
//         title: props.title,
//         expanded: true,
//         animation: new Animated.Value()
//       };
//     }
  
//     _setMaxHeight(event) {
//       this.setState({
//         maxHeight: event.nativeEvent.layout.height
//       });
//     }
  
//     _setMinHeight(event) {
//       this.setState({
//         minHeight: event.nativeEvent.layout.height
//       });
//     }
  
//     toggle() {
//       //Step 1
//       let initialValue = this.state.expanded
//           ? this.state.maxHeight + this.state.minHeight
//           : this.state.minHeight,
//         finalValue = this.state.expanded
//           ? this.state.minHeight
//           : this.state.maxHeight + this.state.minHeight;
  
//       this.setState({
//         expanded: !this.state.expanded //Step 2
//       });
  
//       this.state.animation.setValue(initialValue); //Step 3
//       Animated.spring(
//         //Step 4
//         this.state.animation,
//         {
//           toValue: finalValue
//         }
//       ).start(); //Step 5
//     }
  
//     render() {
//       let icon = this.icons["rowing"];
  
//       if (this.state.expanded) {
//         icon = this.icons["heartbeat"]; //Step 4
//       }
  
//       //Step 5
//       return (
//           <Animated.View 
//           style={[styles.container,{height: this.state.animation}]}>
//           <View
//             style={styles.titleContainer}
//             onLayout={this._setMinHeight.bind(this)}
//           >
//             <Text style={styles.title}>{this.state.title}</Text>
//             <TouchableHighlight
//               style={styles.button}
//               onPress={this.toggle.bind(this)}
//               underlayColor="#f1f1f1"
//             >
//               <Image style={styles.buttonImage} source={icon} />
//             </TouchableHighlight>
//           </View>
  
//           <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
//             {this.props.children}
//           </View>
//         </Animated.View>
//       );
//     }
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       backgroundColor: "#fff",
//       margin: 10,
//       overflow: "hidden"
//     },
//     titleContainer: {
//       flexDirection: "row"
//     },
//     title: {
//       flex: 1,
//       padding: 10,
//       color: "#2a2f43",
//       fontWeight: "bold"
//     },
//     button: {},
//     buttonImage: {
//       width: 30,
//       height: 25
//     },
//     body: {
//       padding: 10,
//       paddingTop: 0
//     }
//   });
  
//   export default Panel;
  
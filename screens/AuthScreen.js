import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <Card>
          <Text style={{ flex: 1 }}>
            hello
            {/* {library.description} */}
          </Text>
        </Card>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    //const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
            
        }}
      >
        <View>
          <Card>
            {/* <Text style={titleStyle}>
              {title}
            </Text> */}
            <Text style={titleStyle}>
             hey
            </Text>
          </Card>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

// const mapStateToProps = (state, ownProps) => {
//   const expanded = state.selectedLibraryId === ownProps.library.id;

//   return { expanded };
// };

export default ListItem;
//export default connect(mapStateToProps, actions)(ListItem);

// import React, { Component } from 'react';
// import { 
//     Text, 
//     TouchableWithoutFeedback,
//     View,
//     LayoutAnimation
// } from 'react-native';
// import { connect } from 'react-redux'; // the window that connects react to redux
// import { CardSection } from './common';
// import * as actions from '../actions'; // all available action creators and assign to actions

// class ListItem extends Component {
//     componentWillUpdate() { // with lifecycle methods all you have to do is define them and they will automatically get called for us
//         // called when component is about to rerender
//         LayoutAnimation.spring();
//     }

//     renderDescription() {
//         const { library, expanded } = this.props;

//         if (expanded) {
//             return (
//                 <CardSection>
//                     <Text style={{ flex: 1 }}>
//                     {library.description}
//                     </Text>
//                 </CardSection>
//             );
//         }
//         //or
//         // const { library, selectedLibraryId } = this.props;
//         // if (librar.id === selectedLibraryId) {
//         //     return (
//         //         <Text>{library.description}</Text>
//         //     );
//         // }
//     }
//     render() {
//         const { titleStyle } = styles;
//         const { id, title } = this.props.library;
//         console.log(props);

//         return (
//             <TouchableWithoutFeedback
//                 onPress={() => this.props.selectLibrary(id)}>
//                 <View>
//                     <CardSection>
//                         <Text style={titleStyle}>
//                             {this.props.library.title}
//                         </Text>
//                     </CardSection>
//                     {this.renderDescription()}
//                 </View>
//             </TouchableWithoutFeedback>
//         );
//     }
// }

// const styles = {
//     titleStyle: {
//         fontSize: 18,
//         paddingLeft: 15
//     }
// }

// const mapStateToProps = (state, ownProps) => { // ownProps refer to props passes with listItems
//     const expanded = state.selectedLibraryId === ownProps.library.id;

//     return { expanded };
// };

// export default connect(mapStateToProps, actions)(ListItem); // first argument is mapStateToProps
// // 2nd argument is all action creators and passes to component as props
// // connect handles dispatch


// import React, { Component } from "react";
// import { View, Text } from "react-native";
// //import Header from '../components/common/Header';
// import { ListItem, Header } from "react-native-elements";
// import { connect } from 'react-redux';
// import * as actions from '../actions';

// const list = [
//     {
//       title: 'Javascipt Basics',
//       icon: 'computer'
//     },
//     {
//       title: 'Functions',
//       icon: 'flight-takeoff'
//     },
//     {
//         title: 'Functions',
//         icon: 'flight-takeoff'
//       },
//       {
//         title: 'Functions',
//         icon: 'flight-takeoff'
//       },
//       {
//         title: 'Functions',
//         icon: 'flight-takeoff'
//       },
//       {
//         title: 'Functions',
//         icon: 'flight-takeoff'
//       }
//   ];

// class AuthScreen extends Component {
//   render() {
//     return (
//       <View>
//           <Header
//   leftComponent={{ icon: 'menu', color: '#fff' }}
//   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//   rightComponent={{ icon: 'home', color: '#fff' }}
// />
//         {list.map((item, i) => (
//           <ListItem key={i} title={item.title} leftIcon={{ name: item.icon }} />
//         ))}
//       </View>
//     );
//   }
// }

// function mapStateToProps({ auth }) {
//     return { props };
// }

// export default connect(null, actions)(AuthScreen);

// //export default AuthScreen;

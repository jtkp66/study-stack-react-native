import React from 'react';
import { View } from 'react-native';
import { List, ListItem } from "react-native-elements";

const list = [
    {
        title: 'Appointments',
        icon: 'av-timer'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff'
      },
]

const ListItems = ({list}) => {
  return (
    <View>
        <List>
          {list.map(item => (
            <ListItem
              key={item.title}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))}
        </List>
      </View>
  );
}

export default ListItems;
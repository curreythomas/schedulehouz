import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Welcome extends React.Component {
    render() {
      return (
        <View style={styles.container}>
         <h1>ScheduleHouz</h1>
          <h4>Find your dream home today.</h4>
          <View style={styles.buttons}>
          <Button 
            title="Buyer"
            color="fff"
          />
          <Button 
            title="Agent"
            color="fff"
          />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#16ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    }
  });
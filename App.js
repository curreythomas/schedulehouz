import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {Button, Header, Container, Content, Grid, Col, Row, Text, H1, H3} from 'native-base'

var {height, width} = Dimensions.get('window');

export default class Welcome extends React.Component {
    render() {
      return (
        <Container style={{backgroundColor: '#a02021'}}>
        <Content contentContainerStyle={{paddingTop: 300}}>
          <Grid style={{alignItems: 'center'}}>
            <Row>
              <Text style={{color: '#fff', fontSize: 42, fontFamily: 'Avenir-Book'}}>ScheduleHouz</Text>
            </Row>
            <View style={styles.headerSpacing} />
            <Row>
              <Text style={{color: '#fff', fontSize: 24, fontFamily: 'Avenir-Book'}}>Find your dream home today.</Text>
            </Row>
            <Row style={styles.buttonHeaderSpacing}>
              <Button bordered large light>  
                <Text style={{fontFamily: 'Avenir-Book'}}>Buyer</Text>
              </Button>
              <View style={styles.buttonSpacing} />
              <Button bordered large light> 
                <Text style={{fontFamily: 'Avenir-Book'}}>Agent</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
        </Container>
      );
    }
  }

  const handleOnPress = () => console.log('click') 

  const styles = StyleSheet.create({
    buttonSpacing: {
      paddingRight: 10,
      paddingLeft: 10,
    },
    headerSpacing: {
      padding: 5
    },
    buttonHeaderSpacing: {
      paddingTop: 50
    }
  });
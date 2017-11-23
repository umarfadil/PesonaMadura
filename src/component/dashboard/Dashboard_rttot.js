/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
import {
  Container,
  Content,
  Card,
  Col,
  Row,
  Grid,
  CardItem,
  Text,
  Body,
  Left,
  Thumbnail,
  Right,
  Button,
  Icon
} from 'native-base';
const {width, height} = Dimensions.get('window')
import styles from '../';

export default class LoginScreen extends Component < {} > {

  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      interval: null
    };
  }

  componentWillMount() {
    this.setState({interval: setInterval(() => {
        this.setState({
          position: this.state.position === 4
            ? 0
            : this.state.position + 1
        });
      }, 2000)});
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  showAlert = () => {
    Alert.alert('You need to...')
  }

  render() {
    return (
      <Container>
        <Content style={[styles.content]}>
          <ImageSlider
            images={[
              'https://3.bp.blogspot.com/-rOm9v6C8rHo/VrfLGaGyS_I/AAAAAAAAAGU/UnAlrsQvn9k/s1600/Lokasi%2BAir%2BTerjun%2BToroan%2BSampang.jpg', 
              'https://i.ytimg.com/vi/EJQv5uxfF7A/maxresdefault.jpg', 
              'https://3.bp.blogspot.com/_B013p0iM1bI/TSgdpqDSHOI/AAAAAAAAAD0/QvQBP1GUHk0/s1600/arek_lancur.jpg', 
              'https://1.bp.blogspot.com/-G4Vefc7_cnY/WBkjr6uBqmI/AAAAAAAAAws/bABRRYyN4HITIZrkkRfbi3RBxrfC4TP1gCLcB/s1600/karapan-sapi.jpg', 
              'https://resephariini.com/wp-content/uploads/2015/08/sate-kambing-madura.jpg']}
            position={this.state.position}
            onPositionChanged={position => this.setState({position})}/>
          <Grid >
            <Row>
              <Col>
                <View style={[styles.view]}>
                  <Card >
                    <CardItem cardBody style={[styles.cardView]}>
                      <Image source={require('../assets/bangkalan.png')} style={[styles.logo]}/>
                    </CardItem>
                    <CardItem style={[styles.text]}>
                      <Text >Bangkalan</Text>
                    </CardItem>
                  </Card>
                </View>
              </Col>

              <Col>
                <View style={[styles.view]}>
                  <Card >
                    <CardItem cardBody style={[styles.cardView]}>
                      <Image source={require('../assets/sampang.png')} style={[styles.logo]}/>
                    </CardItem>
                    <CardItem style={[styles.text]}>
                      <Text >Sampang</Text>
                    </CardItem>
                  </Card>
                </View>
              </Col>
            </Row>

            <Row>
              <Col>
                <View style={[styles.view]}>
                  <Card >
                    <CardItem cardBody style={[styles.cardView]}>
                      <Image source={require('../assets/pamekasan.png')} style={[styles.logo]}/>
                    </CardItem>
                    <CardItem style={[styles.text]}>
                      <Text >Pamekasan</Text>
                    </CardItem>
                  </Card>
                </View>
              </Col>

              <Col>
                <View style={[styles.view]}>
                  <Card >
                    <CardItem cardBody style={[styles.cardView]}>
                      <Image source={require('../assets/sumenep.png')} style={[styles.logo]}/>
                    </CardItem>
                    <CardItem style={[styles.text]}>
                      <Text >Sumenep</Text>
                    </CardItem>
                  </Card>
                </View>
              </Col>
            </Row>
          </Grid>
          <Button
            full
            style={{
            marginLeft: 8,
            marginRight: 8
          }}>
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  };
}
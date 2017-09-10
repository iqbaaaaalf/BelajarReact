import React, { Component } from 'react';
import {Alert, FlatList, Button, StyleSheet, Text, form, TextInput, View, AppRegistry, Image, ScrollView } from 'react-native';

class SpamImage extends Component{
  render(){
    return (
      <Image source={this.props.imageName} style={{width: 200, height:200}}/>
    );
  }
}

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText : true};

    // Toggle the state every second

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
     });
    }, 1000);
  }

  render(){
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.font}>{display}</Text>
    )
  }
}


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
    
  }

  _onPressButton(){
    Alert.alert('kyaa! , you poke me senpai!')
  }



  render() {

    let name = "iqbal";

    let pic = {
      uri: 'https://img10.deviantart.net/6692/i/2016/027/a/2/kaori_miyazono_by_yytru-d9pifs9.jpg'
    };

    let pic1 = {
      uri: 'https://68.media.tumblr.com/6d8ca3eb1c1c15a6de7a835827c8da60/tumblr_our08uReFq1racurco3_1280.png'
    };
    
    let requiredMessage = "kaori!";

    return (
      <ScrollView contentContainerStyle={styles.background}>

        <Blink text={'Hello ' + name + '-sama'}/>

        <TextInput type="text" placeholder={"type "+ requiredMessage} onChangeText={(text) => this.setState({text})}/>
        {this.state.text === requiredMessage ? alert("nanni desuka ? " +name+ "-sama"): null}

        <Button
          onPress={this._onPressButton}
          title="poke me!"/>
        
        <SpamImage imageName={pic}/>
        <SpamImage imageName={pic1}/>

        <Text> Chara list of Shigatsu Kimi no uso Anime </Text>

        <FlatList
          data={[
            {key: 'Arima'},
            {key: 'Kaori'},
            {key: 'dipsi'},
            {key: 'lala'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

        {/* <View style={styles.backgroundText}>
          <Blink text='Hello Iqbal!'/>
        </View>
        <View style={styles.backgroundImage}>
          <SpamImage imageName={pic}/>
          <SpamImage imageName={pic1}/>
        </View> */}
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  ButtonContainer: {
    margin: 20,
  },
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  backgroundImage: {
    justifyContent: 'space-between',
    backgroundColor: '#ffa',
  },
  backgroundText: {
    backgroundColor: '#ff5',
  },
  item: {
  fontSize: 18,
  height: 44,
  },
});

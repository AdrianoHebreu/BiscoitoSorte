import React, { useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg]  = useState(require('./src/biscoito.png'));
  return (
    <View style={style.container}>
      <Image
        source={img}
        style={style.img}
      />
      <Text style={style.textofrase} >'Essa é a minha primeira frase no aplicativo'</Text>

      <TouchableOpacity style={style.btn}>
        <View style={style.btnArea}>
          <Text style={style.btnText}>Quebar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[style.btn, {marginTop: 15, borderColor: '#121212'} ]}>
        <View style={style.btnArea}>
          <Text style={[style.btnText, {color: '#121212'}]}>Quebar biscoito</Text>
        </View>
      </TouchableOpacity>
  
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 230,
    height: 230
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})
import React, { useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg]  = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let textos = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'Deixe de lado  as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ];

  function quebraBiscoito(){
    setImg(require('./src/biscoitoAberto.png'));
    let numeroAleatorio = Math.floor(Math.random() * textos.length);
    setTextoFrase('"' + textos[numeroAleatorio] +'"');
  }

  function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={style.container}>
      <Image
        source={img}
        style={style.img}
      />
      <Text style={style.textofrase} >{textoFrase}</Text>

      <TouchableOpacity style={style.btn} onPress={quebraBiscoito}>
        <View style={style.btnArea}>
          <Text style={style.btnText}>Quebar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[style.btn, {marginTop: 15, borderColor: '#121212'} ]} onPress={reiniciarBiscoito}>
        <View style={style.btnArea}>
          <Text style={[style.btnText, {color: '#121212'}]}>Reiniciar biscoito</Text>
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
    width: 220,
    height: 220
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
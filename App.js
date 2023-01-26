import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [phrase, setPhrase] = useState('')
  const [image, setImage] = useState(require('./assets/biscoito.png'))

  const phrases = [
    'Siga os bons e aprenda com eles.',
    'O bom senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'Testando'
  ]

  const handleCookie = () => {
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
    console.log(randomPhrase)
    setPhrase(randomPhrase)
    setImage(require('./assets/biscoitoAberto.png'))
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image}/>
      <Text style={styles.luckText}>"{phrase}"</Text>
      <TouchableOpacity style={styles.button} onPress={handleCookie}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito da Sorte</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250
  },
  luckText: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  button: {
    width: 270,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 18,
    color: '#dd7b22',
    fontWeight: '600'
  }
});

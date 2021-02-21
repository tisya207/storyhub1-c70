import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class writestoryscreen extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'munkey chunkey',
            style: { color: 'black', fontSize: 20 },
          }}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={'enter story name'}
        
        />
                <TextInput
          style={styles.inputBox}
          placeholder={"enter the author's name"}
        
        />
                <TextInput
          style={styles.inputBox}
          placeholder={"enter the story"}
        
        />
        <TouchableOpacity
          style={styles.goButton}
        >
          <Text style={styles.buttonText}>submit</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '30%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    multiline:true,
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold' },
});

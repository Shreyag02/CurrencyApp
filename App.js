/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const wallet = require('./assets/wallet.png');

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const convertInput = currency => {
    if (!inputValue || isNaN(inputValue)) {
      return Snackbar.show({
        text: 'Please enter a numeric value',
        backgroundColor: '#EA7773',
        textColor: '#FFFFFF',
      });
    }
    console.log(isNaN(inputValue));
    let res = parseFloat(inputValue) * currencyPerRupee[currency];

    setResultValue(res.toFixed(2));
  };

  return (
    <ScrollView
      backgroundColor="#bae6fd"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <Image source={wallet} style={styles.walletImg} />
        <View style={{padding: 20}}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>Result:{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputValue}
              keyboardType=""
              // keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#0369a1b3"
              value={inputValue}
              onChangeText={inputValue =>
                setInputValue(inputValue)
              }></TextInput>
          </View>
          <View style={styles.convertBtnContainer}>
            {Object.keys(currencyPerRupee).map((currency, index) => (
              <TouchableOpacity
                key={index}
                style={styles.convertBtn}
                onPress={() => convertInput(currency)}>
                <Text style={styles.convertBtnValue}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  resultContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    borderColor: '#075985',
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 100,
  },
  resultValue: {
    fontSize: 30,
    color: '#075985',
    fontWeight: '700',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderColor: '#075985',
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 100,
  },
  inputValue: {
    fontSize: 30,
    color: '#075985',
    fontWeight: '700',
  },
  convertBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  convertBtn: {
    width: '30%',
    height: 70,
    borderWidth: 1,
    borderColor: '#075985',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 100,
    backgroundColor: '#075985',
  },
  convertBtnValue: {
    fontWeight: '700',
    color: 'white',
  },
  walletImg: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    margin: 40,
  },
});

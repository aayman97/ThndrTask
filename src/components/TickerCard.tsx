import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { TickerInfo } from '../types/TickerInfo';

const { width, height } = Dimensions.get('screen');

type props = {
  item: TickerInfo;
};
export const TickerCard = ({ item }: props) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.tickerContainer}>
          <Text>{item.ticker}</Text>
        </View>

        <Text style={styles.name} ellipsizeMode="clip">
          {item.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    height: 170,
    // backgroundColor: 'blue',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickerContainer: {
    width: '80%',
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    width: '100%',
    height: 50,
  },
});

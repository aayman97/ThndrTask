import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Alert,
} from 'react-native';
import { SearchInput } from '../components/SearchInput';
import { getTickers } from '../api/getTickers';
import { TickerInfo } from '../types/TickerInfo';
import { TickerCard } from '../components/TickerCard';

export const Home = () => {
  const [limit, setLimit] = useState(100);
  const [keyword, setKeyword] = useState('');
  const [tickers, setTickers] = useState<TickerInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const prevLengthRef = useRef(0);

  const fetchTickers = useCallback(async (q: string, l: number) => {
    try {
      setLoading(true);
      setError(null);

      const res = await getTickers(q, l);
      if (res?.length) {
        setTickers(res as TickerInfo[]);
        prevLengthRef.current = res.length;
      } else {
        Alert.alert(res?.response?.data.error);
        setError('Failed to fetch tickers');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Search effect
  useEffect(() => {
    if (keyword) {
      fetchTickers(keyword, 100);
    } else {
      setTickers([]);
    }
  }, [keyword, fetchTickers]);

  // Limit effect
  useEffect(() => {
    if (limit > 100) {
      fetchTickers(keyword, limit);
    }
  }, [limit, fetchTickers]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <SearchInput
          placeholder="Search for keyword..."
          showResult={false}
          onChangeText={val => {
            setKeyword(val);
            setLimit(100); // reset limit
            setTickers([]);
          }}
        />

        {loading && tickers.length === 0 && (
          <ActivityIndicator
            testID="loader"
            size="large"
            color="black"
            style={styles.loader}
          />
        )}

        {keyword.length > 0 && (
          <FlatList
            data={tickers}
            numColumns={2}
            testID="ticker-list"
            keyExtractor={(item, index) => item.ticker + '_' + index}
            renderItem={({ item }) => (
              <View testID="ticker-card">
                <TickerCard item={item} />
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            columnWrapperStyle={styles.columnWrapper}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            ListFooterComponent={
              loading && tickers.length > 0 ? (
                <ActivityIndicator
                  testID="end-loader"
                  size="large"
                  color="black"
                />
              ) : null
            }
            onEndReached={() => {
              // console.log('📜 Reached end of list!');
              setLimit(prev => prev + 100);
            }}
            removeClippedSubviews
            showsVerticalScrollIndicator={false}
            initialNumToRender={100}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 10,
  },
  loader: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  separator: {
    height: 20,
  },
  columnWrapper: {
    gap: 10,
  },
});

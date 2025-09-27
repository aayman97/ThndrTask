import React, { useCallback, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import debounce from 'lodash/debounce';
import { mapKeyValues } from '../helpers/mapKeyValues';
const { height, width } = Dimensions.get('window');

type SearchInputProps = {
  placeholder: string;
  showResult: boolean;
  onChangeText: (val: string) => void;
  result?: [];
  keysToMapResult?: string[];
  loading?: boolean;
  onPressOnResult?: (val: {}) => void;
};

export const SearchInput = ({
  placeholder,
  showResult,
  onChangeText,
  result,
  keysToMapResult,
  loading,
  onPressOnResult,
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');

  const inputRef = useRef<TextInput>(null);

  const handleSearch = useCallback(
    debounce(text => {
      if (onChangeText) {
        setSearchValue(text);
        onChangeText(text);
      }
    }, 500), // 500ms delay
    [],
  );

  const setValue = (value: string) => {
    inputRef.current?.setNativeProps({ text: value }); // Set value directly
  };

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'rgba(1,1,1,0.2)'}
        style={styles.searchInput}
        onChangeText={text => {
          handleSearch(text);
        }}
        ref={inputRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 50,
    width: width * 0.8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(1,1,1,0.1)',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchResultContainer: {
    width: width * 0.8,
    height: 150,
    borderWidth: 1,
    borderColor: 'rgba(1,1,1,0.1)',
    borderRadius: 10,
    marginTop: 5,
  },
  searchResult: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomColor: 'rgba(1,1,1,0.1)',
  },
});

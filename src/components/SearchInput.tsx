import React, { useEffect, useState } from 'react'
import { View, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounced } from '../hooks/useDebounced';

interface Props{
    onDebounced: (value: string) => void;
    style?: StyleProp<ViewStyle>
}

const SearchInput = ({ style, onDebounced }:Props) => {

    const [input, setInput] = useState('')
    const inputDebounced = useDebounced(input)

    useEffect(() => {
        onDebounced(inputDebounced)
    }, [inputDebounced])
    

  return (
    <View style={{
        ...style as any
    }}>
        <View style={
            styles.textBackground
        }>
            <TextInput  
                placeholder='Search Pokemon'
                value={input}
                onChangeText={setInput}

                autoCapitalize="none"
                autoCorrect={ false }
                style={
                    styles.textInput
                }
            />

            <Icon 
                name="search-outline"
                color="grey"
                size={ 30 }
            />
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    }
})

export default SearchInput
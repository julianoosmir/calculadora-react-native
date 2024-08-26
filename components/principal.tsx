// src/components/Calculator.tsx

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonNumbers from './ButtonNumbers';
import ButtonOperation from "./ButtonOperation";

const Principal: React.FC = () => {
    const [input, setInput] = useState<string>('');

    const handlePress = (value: string) => {
        resultExpession(value);
        clearExpression(value);

        if (value !== '=' && value !== 'C') {
            setInput(input + value);
        }
    };

    const resultExpession = (value: string) => {
        if (value === '=') {
           const expression = input.replaceAll("×", "*").replaceAll('÷', '/');
            try {
                setInput(eval(expression).toString());
            } catch {
                setInput('Error: ' + expression);
            }
        }
    }

    const clearExpression = (value: string) => {
        if (value === 'C') {
            setInput('');
        }
    }

    const buttonsNumbers = [
        '7', '8', '9',
        '4', '5', '6',
        '1', '2', '3',
        '0',
    ];
    const buttonsOperations = [
        'C', '÷', '×', '-', '+', '.', '(',')','=',
    ]

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{input}</Text>
            </View>

            <View style={styles.buttonContainer}>
                {buttonsNumbers.map((btn, index) => (
                    <ButtonNumbers
                        key={index}
                        title={btn}
                        onPress={() => handlePress(btn)}
                    />
                ))}
            </View>
            <View style={styles.buttonContainer}>
                {buttonsOperations.map((btn, index) => (
                    <ButtonOperation
                        key={index}
                        title={btn}
                        onPress={() => handlePress(btn)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    display: {

        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
        height: 200,
    },
    displayText: {
        fontSize: 36,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default Principal;

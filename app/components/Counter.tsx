import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (value: number) => void;
  label?: string;
  min?: number;
  max?: number;
}

export function Counter({ 
  value, 
  onIncrement, 
  onDecrement, 
  onChange,
  label,
  min = 2,
  max = 8 
}: CounterProps) {
  const [localValue, setLocalValue] = React.useState(value.toString());
  const [isFocused, setIsFocused] = React.useState(false);

  // Update local value when prop changes
  React.useEffect(() => {
    setLocalValue(value.toString());
  }, [value]);

  const handleChangeText = (text: string) => {
    setLocalValue(text);
    const num = parseInt(text);
    if (!isNaN(num) && num >= min && num <= max) {
      onChange(num);
    }
  };

  const handleBlur = () => {
    const num = parseInt(localValue);
    if (isNaN(num) || num < min) {
      setLocalValue(min.toString());
      onChange(min);
    } else if (num > max) {
      setLocalValue(max.toString());
      onChange(max);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Pressable 
          onPress={onDecrement}
          style={styles.button}>
          <Text style={styles.buttonText}>−</Text>
        </Pressable>
        <View style={styles.valueContainer}>
          <TextInput
            style={[
              styles.valueText,
              isFocused && styles.valueTextFocused
            ]}
            value={localValue}
            onChangeText={handleChangeText}
            onBlur={() => {
              setIsFocused(false);
              handleBlur();
            }}
            onFocus={() => setIsFocused(true)}
            keyboardType="number-pad"
            maxLength={2}
            selectTextOnFocus
            textAlign="center"
          />
        </View>
        <Pressable 
          onPress={onIncrement}
          style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 4,
    height: 48,
  },
  button: {
    backgroundColor: '#2962FF',
    width: 40,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 24,
  },
  valueContainer: {
    minWidth: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  valueText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    padding: 0,  // Remove default TextInput padding
    minWidth: 30,
  },
  valueTextFocused: {
    textDecorationLine: 'underline',
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});

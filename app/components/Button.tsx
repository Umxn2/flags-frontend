import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: any;
}

export function Button({ title, onPress, variant = 'primary', style }: ButtonProps) {
  return (
    <Pressable 
      style={[
        styles.button, 
        variant === 'secondary' && styles.buttonSecondary,
        style
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.text,
        variant === 'secondary' && styles.textSecondary
      ]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2962FF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  buttonSecondary: {
    backgroundColor: '#E3F2FD',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  textSecondary: {
    color: '#1976D2',
  },
});

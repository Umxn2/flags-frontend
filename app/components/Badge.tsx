import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BadgeProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  style?: any;
}

export function Badge({ 
  text, 
  backgroundColor = '#E8F0FE',
  textColor = '#1A73E8',
  style
}: BadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor }, style]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});

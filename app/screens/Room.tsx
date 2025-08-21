import * as Clipboard from 'expo-clipboard';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { commonStyles } from '../styles/common';

export default function Room() {
  const { token } = useLocalSearchParams();
  const [copied, setCopied] = React.useState(false);

  const handleCopyToken = async () => {
    await Clipboard.setStringAsync(token as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={commonStyles.container}>
     
       

      <View style={styles.tokenSection}>
        <Text style={styles.label}>Room Code:</Text>
        <View style={styles.tokenWrapper}>
          <Text style={styles.tokenText}>{token}</Text>
          {!copied ? (
            <Button 
              style={styles.copyButton}
              onPress={handleCopyToken}
              title="Share Code"
              variant="secondary"
            />
          ) : (
            <Text style={styles.copiedText}>Copied!</Text>
          )}
        </View>
      </View>

      <View style={styles.footer}>
        <Button 
          title="Start Game"
          onPress={() => {}}
          style={styles.startButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  badge: {
    height: 40,
    justifyContent: 'center',
  },
  tokenSection: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  tokenWrapper: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  tokenText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    letterSpacing: 2,
    marginBottom: 8,
  },
  copyButton: {
    marginTop: 8,
  },
  copiedText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
    marginTop: 8,
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    padding: 20,
  },
  startButton: {
    width: '100%',
  },
});

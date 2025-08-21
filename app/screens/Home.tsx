import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from '../components/Button';
import { commonStyles } from '../styles/common';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [roomId, setRoomId] = React.useState('');
  
  const handleCreateRoom = () => {
    router.push({
      pathname: './CreateRoom',
      params: { userName: name }
    });
  };

  const handleJoinRoom = () => {
    if (!name.trim() || !roomId.trim()) return; // Don't proceed if either field is empty
    console.log('Joining room:', roomId);
  };
  
  return (
    <View style={commonStyles.container}>
      <View style={styles.inputSection}>
        <TextInput 
          value={name}
          onChangeText={setName}
          style={[commonStyles.input, styles.input]}
          placeholder="Your Name"
          placeholderTextColor="#666"
          autoCapitalize="words"
        />

        <View style={styles.joinSection}>
          <TextInput 
            value={roomId}
            onChangeText={setRoomId}
            style={[commonStyles.input, styles.input]}
            placeholder="Room ID"
            placeholderTextColor="#666"
            autoCapitalize="characters"
          />
          <Button 
            title="Join Room"
            onPress={handleJoinRoom}
            style={styles.joinButton}
          />
        </View>
      </View>

      <Button 
        title="Create New Room"
        onPress={handleCreateRoom}
        variant="secondary"
        style={styles.createButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputSection: {
    width: '100%',
    gap: 20,
  },
  input: {
    marginBottom: 0,
  },
  joinSection: {
    width: '100%',
    gap: 12,
  },
  joinButton: {
    width: '100%',
  },
  createButton: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 20,
  },
});

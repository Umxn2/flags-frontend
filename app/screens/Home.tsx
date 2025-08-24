import { Router, useRouter } from "expo-router";
import React from "react";
import {  TextInput, View } from "react-native";
import { Button } from "../components/Button";
import { usePlayerToken } from "../hooks/usePlayerToken";
import { commonStyles } from "../styles/common";
import { joinRoomRequest } from "../Requests/JoinRoomRequest";
import { styles } from "../styles/ScreenStyles/HomeScreenStyle";

const handleJoinRoom = (
  roomId: string,
  token: string,
  router: Router,
  name: string
) => {
  if (!name.trim() || !roomId.trim()) return;

  joinRoomRequest(roomId, token, name).then((data) => {
    if (!data) {
      console.error("No data received from joinRoom");
      return;
    }
    
    router.push({
      pathname: "./Room",
      params: { token: roomId.trim().toUpperCase() },
    });
  });
};

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [roomId, setRoomId] = React.useState("");
  const token = usePlayerToken();
  const handleCreateRoom = () => {
    router.push({
      pathname: "./CreateRoom",
      params: { userName: name },
    });
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
            onPress={() =>
              handleJoinRoom(roomId, token ? token : "", router, name)
            }
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

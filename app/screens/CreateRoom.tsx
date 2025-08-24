import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Counter } from "../components/Counter";
import { usePlayerToken } from "../hooks/usePlayerToken";
import { getToken } from "../Requests/getTokenRequest";
import { createRoom } from "../Requests/createRoomRequest";
import { commonStyles } from "../styles/common";
import { styles } from "../styles/ScreenStyles/CreateRoomStyle";
export default function CreateRoom() {
  const router = useRouter();
  const { userName } = useLocalSearchParams();
  const userToken = usePlayerToken();
  const [rounds, setRounds] = React.useState(2);
  const [duration, setDuration] = React.useState(10);
  const maxRounds = 150;
  const maxDuration = 60;
  const minRounds = 2;
  const minDuration = 5;

  const handleCreateRoom = async () => {
    if (!userToken) return;

    const token = await getToken("api/getRoomToken", "GET");
    await createRoom(token, userName as string, userToken, rounds, duration);

    router.push({
      pathname: "./Room",
      params: {
        userName,
        token,
        userToken,
        rounds,
        duration,
      },
    });
  };

  return (
    <View style={commonStyles.container}>
      <Badge
        text={`Welcome, ${userName}!`}
        backgroundColor="#E3F2FD"
        textColor="#1976D2"
      />

      <View style={styles.row}>
        <Badge
          text="Max Rounds"
          backgroundColor="#F3E5F5"
          textColor="#6A1B9A"
          style={styles.badge}
        />
        <Counter
          value={rounds}
          onIncrement={() => setRounds((prev) => Math.min(prev + 1, maxRounds))}
          onDecrement={() => setRounds((prev) => Math.max(prev - 1, minRounds))}
          onChange={(value) => setRounds(value)}
          min={minRounds}
          max={8}
        />
      </View>

      <View style={styles.row}>
        <Badge
          text="Round Duration"
          backgroundColor="#F3E5F5"
          textColor="#6A1B9A"
          style={styles.badge}
        />
        <Counter
          value={duration}
          onIncrement={() =>
            setDuration((prev) => Math.min(prev + 5, maxDuration))
          }
          onDecrement={() =>
            setDuration((prev) => Math.max(prev - 5, minDuration))
          }
          onChange={(value) => setDuration(value)}
          min={minDuration}
          max={maxDuration}
        />
      </View>

      <View style={styles.footer}>
        <Button
          title="Create Room"
          onPress={handleCreateRoom}
          style={styles.createButton}
        />
      </View>
    </View>
  );
}

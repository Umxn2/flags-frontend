import * as Clipboard from "expo-clipboard";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import EventSource, { EventSourceEvent } from "react-native-sse";
import { Button } from "../components/Button";
import { baseUrl } from "../Constants";
import { commonStyles } from "../styles/common";
import { styles } from "../styles/ScreenStyles/Room";
import { getRoomDetails } from "../Requests/RoomDetailsRequest";
import { PlayerScore } from "../Models/PlayerScore";

export default function Room() {
  const { token: token, userToken: userToken } = useLocalSearchParams();
  const [players, setPlayers] = React.useState<PlayerScore[]>([]);
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    if (!token) return;
    const fetchData = async () => {
      try {
        const playersResponse = await getRoomDetails(token as string);
        setPlayers(playersResponse);
      } catch (err) {
        console.error("Error fetching room details", err);
      }
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    const eventSource = new EventSource(
      `${baseUrl}/api/roomEvents?roomToken=${token}&userToken=${userToken}`,
    );
    const handleMessage = (event: EventSourceEvent<any>) => {
      const parsed: PlayerScore[] = JSON.parse(event.data);
      setPlayers(parsed);
    };
    return () => {
      eventSource.removeEventListener("message", handleMessage);
      eventSource.close();
    };
  }, []);

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
        <FlatList
          data={players}
          renderItem={({ item }) => (
            <View>
              <Text> {item.playerName}</Text>
              <Text> {item.score}</Text>
            </View>
          )}
        />
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

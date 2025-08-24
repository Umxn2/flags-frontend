import { baseUrl } from "../Constants";
import { PlayerScore } from "../Models/PlayerScore";

export const getRoomDetails = async (
  roomToken: string,
): Promise<PlayerScore[]> => {
  const endpoint = "api/getScores";
  const url = `${baseUrl}/${endpoint}?roomToken=${roomToken}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: PlayerScore[] = await response.json();
  return data;
};

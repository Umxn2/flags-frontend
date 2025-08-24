import { baseUrl } from "../Constants";

export const joinRoomRequest = async (roomId: string, token: string, name: string) =>  {
  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomToken: roomId.trim().toUpperCase(),
        playerToken: token,
        playerName: name.trim(),
      }),
    };
    const endpoint = "api/joinRoom";
    const url = `${baseUrl}/${endpoint}`;
    const response = await fetch(url, options);


    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.text();
    console.log("Join room result:", result);

    return result;
  } catch (error) {
    console.error("Error joining room:", error);
  }
};

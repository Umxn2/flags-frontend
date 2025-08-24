import { baseUrl } from "../Constants";

export async function createRoom(roomToken: string, hostName: string, hostToken: string, maxNumberOfRounds: number, roundDuration: number) : Promise<string> {
    const endpoint = "api/createRoom";
    const url = `${baseUrl}/${endpoint}`;
    
    const body = {
        roomToken: roomToken.trim().toUpperCase(),
        hostName: hostName.trim(),
        hostToken: hostToken,
        maxNumberOfRounds: maxNumberOfRounds,
        roundDuration: roundDuration
    };

    const options: RequestInit = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
    
    
    return await fetch(url, options)
        .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text()
        })
        .catch(error => {
        console.error('API request failed:', error);
        throw error;
        });
}
import { baseUrl } from "../Constants";

export async function getToken(endpoint: string, method: string = 'GET') : Promise<string> {
    const url = `${baseUrl}/${endpoint}`;
    
    const options: RequestInit = {
        method,
        headers: {
        'Content-Type': 'application/json',
        },
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
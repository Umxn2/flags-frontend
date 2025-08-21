import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const USER_TOKEN_KEY = '@flags:userToken';

export const usePlayerToken = () => {
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const initUserToken = async () => {
      try {
        let token = await AsyncStorage.getItem(USER_TOKEN_KEY);

        if (!token) {
          token = uuidv4();
          await AsyncStorage.setItem(USER_TOKEN_KEY, token);
        }

        setUserToken(token);
      } catch (error) {
        console.warn('Failed to get/set user token:', error);
        // Fallback to memory-only token if storage fails
        setUserToken(uuidv4());
      }
    };

    initUserToken();
  }, []);

  return userToken;
};

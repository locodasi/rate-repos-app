import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const token = await AsyncStorage.getItem(`${this.namespace}:token`);
    return JSON.parse(token);
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:token`, JSON.stringify(accessToken));
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;

/* Ejemplo de uso:
import AuthStorage from '../../utils/authStorage';

const ingresar = async (token) => {
  const authStorageA = new AuthStorage("authStorageA");
  await authStorageA.setAccessToken(token);
  const tok = await authStorageA.getAccessToken();
  console.log(tok);
  await authStorageA.removeAccessToken();
}
*/
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hashUserPassword } from './hp_crypto';

export const storeData = async (value) => {
    try {
        console.log("value => ", value.password, typeof value)
        const hashPassword = hashUserPassword(JSON.stringify(value.password))
        console.log("Hash Password => ", hashPassword)
        value.password = hashPassword;
        const jsonValue = JSON.stringify(value)
        console.log("jsonValue => ", jsonValue)
        await AsyncStorage.setItem('@userInfoStorage', jsonValue)
    } catch (e) {
        // saving error
        console.log("Error storeData => ", e)
    }
}

export const getData = async () => {
    console.log("getData function called!!!")
    try {
      const jsonValue = await AsyncStorage.getItem('@userInfoStorage')
      console.log("Data hasil getData => ",jsonValue)
      return jsonValue != null ? setUserInfo(JSON.parse(jsonValue)) : null;
    } catch(e) {
      // error reading value
      console.log("Errog getData => ", e)
    }
}
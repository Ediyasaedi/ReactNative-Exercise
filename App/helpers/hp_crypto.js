import CryptoJS from 'crypto-js';
import { SECRET_KEY} from '@env';

const secretKey = SECRET_KEY;

export const hashUserPassword = (input) => {
    const hash = CryptoJS.HmacSHA256(input, secretKey);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    return hashInBase64;
}

export const decryptUserPassword = (ciphertext) => {
    // const bytes  = CryptoJS.HmacSHA256.decrypt(ciphertext, secretKey);
    // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    // return decryptedData;
}
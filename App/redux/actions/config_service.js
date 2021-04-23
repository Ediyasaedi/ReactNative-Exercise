import moment from 'moment';
import { API_KEY, SECRET_KEY, BASE_URL } from '@env';
import CryptoJS from 'crypto-js';

function getPath(url) {
    var pathRegex = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
    var result = url.match(pathRegex);
    return result && result.length > 1 ? result[1] : ''; 
}

function getQueryString(url) {
    var arrSplit = url.split('?');
    return arrSplit.length > 1 ? url.substring(url.indexOf('?')+1) : ''; 
}

export function getTimestamp() {
    return moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
}

export function generateSignature() {
    const apiKey = API_KEY;
    const secretKey = SECRET_KEY;
    const queryString = getQueryString(`${BASE_URL}/Keyword`);
    const fromUrl = queryString.length == 0 ? getPath(`${BASE_URL}/Keyword`) : `${getPath(`${BASE_URL}/Keyword`)}?${queryString}`;
    const timestamp = getTimestamp();

    let input = `GET:${fromUrl}:${apiKey}:${timestamp}`;
    console.log('input => ', input)

    // if (request['method'] == 'POST') {
    //     const requestData = JSON.stringify(JSON.parse(request['data']));

    //     postman.setEnvironmentVariable("TEST_REQUEST", requestData);
    //     input = `${input}:${requestData}`;
    // }

    const hash = CryptoJS.HmacSHA256(input, secretKey);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    return hashInBase64;
}
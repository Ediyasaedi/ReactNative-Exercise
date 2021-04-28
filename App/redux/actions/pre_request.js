import moment from 'moment';
import CryptoJS from 'crypto-js';
import { BASE_URL, API_KEY, SECRET_KEY} from '@env'; 


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
    
    // postman.setEnvironmentVariable("BTPN_TIMESTAMP", timestamp);
    
    let input = `GET:${fromUrl}:${apiKey}:${timestamp}`;
    console.log("input => ", input);
    console.log("relative url => ", getPath(`${BASE_URL}/Keyword`))

    // postman.setEnvironmentVariable("TEST_REQUEST", input);
    
    // if (request['method'] == 'POST') {
    //     const requestData = JSON.stringify(JSON.parse(request['data']));

    //     postman.setEnvironmentVariable("TEST_REQUEST", requestData);
    //     input = `${input}:${requestData}`;
    // }

    // postman.setEnvironmentVariable("BTPN_TEST", input); 

    const hash = CryptoJS.HmacSHA256(input, secretKey);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    return hashInBase64;
}
 
// postman.setEnvironmentVariable("BTPN_SIGNATURE", generateSignature());

import moment from 'moment';
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
    const apiKey = '1eb7f84b-d733-43ef-8afa-9445615c0de2';
    const secretKey = 'ab052233-ea70-4f8e-b042-1503de0f9c4d';
    const queryString = getQueryString('https://apidev.btpn.com/cq01/Keyword');
    const fromUrl = queryString.length == 0 ? getPath('https://apidev.btpn.com/cq01/Keyword') : `${getPath('https://apidev.btpn.com/cq01/Keyword')}?${queryString}`;
    const timestamp = getTimestamp();
    
    // postman.setEnvironmentVariable("BTPN_TIMESTAMP", timestamp);
    
    let input = `GET:${fromUrl}:${apiKey}:${timestamp}`;

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

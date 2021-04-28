import axios from 'axios';
import { GET_KEYWORD_LIST } from '../constants';
import { BASE_URL, API_KEY } from '@env';
import { getTimestamp, generateSignature } from './pre_request';

export const setKeywordList = (keywordList) => {
    return {
        type: GET_KEYWORD_LIST,
        payload: keywordList
    };
}

export const getKeywordList = () => {
    let signature = generateSignature()
    let timestamp = getTimestamp()
    console.log('signature => ', signature)
    console.log('timestamp => ', timestamp)
    return (dispatch) => {
        console.log(`${BASE_URL}/Keyword`)
        axios.get(`${BASE_URL}/Keyword`, {
            headers: {
                // 'BTPN-Signature' : 'f5KiM3Bk5x3GX70ppJ+WMEc+NU4lk2+oKjjBi361pY0=', // generate by postman
                'BTPN-Signature' : signature,
                // 'BTPN-Timestamp': '2021-04-26T08:55:33.599+07:00', // generate by postman
                'BTPN-Timestamp': timestamp,
                'BTPN-ApiKey': API_KEY
            }
        })
            .then(({ data }) => {
                console.log(data)
                dispatch(setKeywordList(data.keywordData))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
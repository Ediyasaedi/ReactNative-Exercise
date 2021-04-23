import axios from 'axios';
import { GET_KEYWORD_LIST } from '../constants';
import { BASE_URL, API_KEY } from '@env';
// import { getTimestamp, generateSignature } from './config_service';
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
                'BTPN-Signature' : 'xaGDrApBdvq7T2fPqBgec6zfoLH2d270ipatoibxwMM=', // generate by postman
                // 'BTPN-Signature' : signature,
                'BTPN-Timestamp': '2021-04-23T18:34:13.234+07:00', // generate by postman
                // 'BTPN-Timestamp': timestamp,
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
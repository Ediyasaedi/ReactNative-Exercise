import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getKeywordList } from '../../redux/actions/keyword_list';
import Cardkeyword from './components/card_keyword';
// import { getTimestamp, generateSignature } from '../../redux/actions/config_service';

export default KeywordPage = () => {
    const [keywordList, setKeywordlist] = useSelector((state) => state.keywordList.keywordList);
    const dispatch = useDispatch();

    // console.log("selector result => ", keywordList);
    // console.log("signature => ", generateSignature());
    // console.log("timestamp => ", getTimestamp());

    return (
        <ScrollView>
            <View style={{ padding: 20}}>
                <Button icon="download" mode="contained" onPress={() => dispatch(getKeywordList())}>
                    GET KEYWORD LIST
                </Button>
            </View>
            <View style={{ padding: 20 }}>
                {
                    keywordList?.map((keyword) => {
                        return (
                            <Cardkeyword keyword={keyword} key={keyword.id}/>
                        );
                    })
                }
            </View>
        </ScrollView>
    )
}
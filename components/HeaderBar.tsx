import React from 'react'
import { View, Text } from 'react-native';
import {
    Header
} from 'react-native-elements';

const HeaderBar = (props: any) => {
    const { title } = props;
    return (
        <Header
            placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={{ icon: 'search', color: '#fff' }}
        />
    )
}

export default HeaderBar;

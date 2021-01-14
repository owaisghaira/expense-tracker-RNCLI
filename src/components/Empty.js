import React from 'react'
import {View,Text} from 'react-native'

const Empty = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: '#ff4500', fontWeight: '700' }}>No Transaction Yet</Text>
        </View>
    )
}

export default Empty

import React from 'react'
import {View, ActivityIndicator} from 'react-native'

export const Busy = () => {
    return (
        <View style={{
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 99999,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000040'
        }}>
            <ActivityIndicator
                size={"large"}
                color='#3a3c40'
                animating={true} />
        </View>
    )
}
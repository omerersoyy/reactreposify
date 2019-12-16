import React from 'react'
import { View, Text, Image } from 'react-native'
import Styles from './Styles/GenericListItemStyles'

export const GenericListItem = (props) => {
    return (
        <View  style={Styles.item}>
            <Text>{props.title}</Text>
            <Text>{props.user}</Text>
            {/*<Image source={{uri: props.avatar}} />*/}
        </View>
    )
}
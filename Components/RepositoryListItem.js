import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import Styles from './Styles/RepositoryListItem'

export const RepositoryListItem  = (props) => {
    return (
        <TouchableOpacity
            style={Styles.row}
            onPress={props.onPress}>
            <Text style={Styles.text}>{props.name}</Text>
        </TouchableOpacity>
    )
} 
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from './Styles/RepositoryDetailStyles'

const RepositoryDetail = (props) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headerText}>{props.name}</Text>
                <Text style={Styles.description}>{props.description}</Text>
            </View>
            <View style={Styles.row}>
                <Text>{'forks'}</Text>
                <Text>{props.forks}</Text>
            </View>
            <View style={Styles.row}>
                <Text>{'open issues'}</Text>
                <Text>{props.openIssues}</Text>
            </View>
            <View style={Styles.row}>
                <Text>{'watchers'}</Text>
                <Text>{props.watchers}</Text>
            </View>

            <View style={Styles.row}>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={props.onPressIssues}
                >
                    <Text style={Styles.buttonText}>{'See Issues'}</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.row}>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={props.onPressPRs}
                >
                    <Text style={Styles.buttonText}>{'See Pull Requests'}</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    )
}

export default RepositoryDetail
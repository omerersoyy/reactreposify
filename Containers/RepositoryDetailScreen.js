import React from 'react'
import { View } from 'react-native'
import RepositoryDetail from '../Components/RepositoryDetail'

export default class RepositoryDetailScreen extends React.Component {

    static navigationOptions = {
        title: 'Detail',
    };

    constructor(props) {
        super(props)
        this.state = {
            detail: null
        }
    }

    componentDidMount() {
        const repoDetail = this.props.navigation.state.params
        const { name, full_name, description, open_issues, forks, watchers } = repoDetail

        this.setState({
            detail: {
                name,
                description,
                openIssues: open_issues,
                forks,
                watchers,
                repo: full_name
            }
        })

    }

    render() {
        if (!this.state.detail) return null
        return (
            <View style={{flex: 1}}>
                <RepositoryDetail {...this.state.detail}
                    onPressIssues={() => this.props.navigation.navigate('Issues', {
                        repo: this.state.detail.repo
                    })}
                    onPressPRs={() => this.props.navigation.navigate('Pulls', {
                        repo: this.state.detail.repo
                    })} />
            </View>
        )
    }
}
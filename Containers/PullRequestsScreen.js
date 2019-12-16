import React from 'react'
import { connect } from 'react-redux'
import { FlatList, View } from 'react-native'
import PRActions from '../Redux/PullRequests'
import { GenericListItem } from '../Components/GenericListItem'
import Styles from './Styles/PullRequestsScreenStyles'

class PullRequestsScreen extends React.Component {

  static navigationOptions = {
    title: 'Pull Requests',
  };

  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      pulls: [],
      fetching: true
    }
  }

  componentDidMount() {
    const {repo} = this.props.navigation.state.params
    this.setState({
        repo
    })
    this.props.getPullRequests(repo, this.state.page)
  }

  componentWillReceiveProps(nextProps) {
    const { pulls, hasNext, nextPage, fetching } = nextProps
    const previosPulls = this.state.pulls


    if (fetching || !this.state.repo) return;

    this.setState({
      pulls: previosPulls.concat(pulls),
      hasNext,
      page: nextPage,
      fetching
    })
  }

  handleEndReached = () => {
    const { repo, page, hasNext } = this.state

    if (hasNext) {
      this.props.getPullRequests(repo, page)
    }
  }

  render() {
    if (this.state.pulls.length < 1) {
      return null
    }
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.state.pulls}
          renderItem={({ item }) => this._renderRow(item)}
          keyExtractor={item => item.number}
          onEndReached={this.handleEndReached.bind(this)}
          onEndReachedThreshold={0.1}
        />
      </View>
    )
  }

  _renderRow = (item) => {
    const {user, title} = item
    return (
      <GenericListItem  title={title} user={user.login} avatar={user.avatar_url}/>
    )
  }

}


const mapStateToProps = state => {
  return {
    pulls: state.prs.pullRequests,
    hasNext: state.prs.hasNext,
    nextPage: state.prs.nextPage,
    fetching: state.prs.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPullRequests: (repo, page) => dispatch(PRActions.prRequest(repo, page)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestsScreen)



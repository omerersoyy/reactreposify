import React from 'react'
import { connect } from 'react-redux'
import { FlatList, View } from 'react-native'
import IssuesActions from '../Redux/Issues'
import { GenericListItem } from '../Components/GenericListItem'
import Styles from './Styles/IssuesScreenStyles'
import Busy from '../Components/Busy'

class IssuesScreen extends React.Component {

  static navigationOptions = {
    title: 'Issues',
  };

  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      issues: [],
      fetching: true
    }
  }

  componentDidMount() {
    const {repo} = this.props.navigation.state.params
    this.setState({
        repo
    })
    this.props.getIssues(repo, this.state.page)
  }

  componentWillReceiveProps(nextProps) {
    const { issues, hasNext, nextPage, fetching } = nextProps
    const previosIssues = this.state.issues


    if (fetching || !this.state.repo) {
      this.setState({
        fetching
      })
      return
    }

    this.setState({
      issues: previosIssues.concat(issues),
      hasNext,
      page: nextPage,
      fetching
    })
  }

  handleEndReached = () => {
    const { repo, page, hasNext } = this.state

    if (hasNext) {
      this.props.getIssues(repo, page)
    }
  }

  render() {
    if (this.state.issues.length < 1) {
      return null
    }
    if(this.state.fetching) {
      <Busy />
    }
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.state.issues}
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
    issues: state.issues.issues,
    hasNext: state.issues.hasNext,
    nextPage: state.issues.nextPage,
    fetching: state.issues.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIssues: (repo, page) => dispatch(IssuesActions.issuesRequest(repo, page)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesScreen)



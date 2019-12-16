import React from 'react'
import { connect } from 'react-redux'
import { FlatList, View } from 'react-native'
import ReposActions from '../Redux/Repos'
import { RepositoryListItem } from '../Components/RepositoryListItem'
import Styles from './Styles/RepositoriesScreenStyles'

class RepositoriesScreen extends React.Component {

  static navigationOptions = {
    title: 'Reactjs Repositories',
  };

  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      repos: [],
      fetching: true
    }
  }

  componentDidMount() {
    this.props.getRepos(this.state.page)
  }

  componentWillReceiveProps(nextProps) {
    const { repos, hasNext, nextPage, fetching } = nextProps
    const previousRepos = this.state.repos


    if (fetching) return;

    this.setState({
      repos: previousRepos.concat(repos),
      hasNext,
      page: nextPage,
      fetching
    })
  }

  handleEndReached = () => {
    const { page, hasNext } = this.state

    if (hasNext) {
      this.props.getRepos(page)
    }
  }

  render() {
    if (this.state.repos.length < 1) {
      return null
    }
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.state.repos}
          renderItem={({ item }) => this._renderRow(item)}
          keyExtractor={item => item.name}
          onEndReached={this.handleEndReached.bind(this)}
          onEndReachedThreshold={0.5}
        />
      </View>
    )
  }

  _renderRow = (item) => {
    return (
      <RepositoryListItem name={item.name} onPress={() => this.props.navigation.navigate('Detail', item)} />
    )
  }

}


const mapStateToProps = state => {
  return {
    repos: state.repos.repos,
    hasNext: state.repos.hasNext,
    nextPage: state.repos.nextPage,
    fetching: state.repos.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepos: (page) => dispatch(ReposActions.reposRequest(page)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesScreen)



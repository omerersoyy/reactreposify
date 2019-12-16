
import React from 'react'
import { Provider } from 'react-redux'
import createStore from './Redux'
import RepositoriesScreen from './Containers/RepositoriesScreen'
import RepositoryDetailScreen from './Containers/RepositoryDetailScreen'
import IssuesScreen from './Containers/IssuesScreen'
import PullRequestsScreen from './Containers/PullRequestsScreen'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'


const store = createStore()

const MainNavigator = createStackNavigator({
  Home: { screen: RepositoriesScreen },
  Detail: { screen: RepositoryDetailScreen },
  Issues: {screen: IssuesScreen},
  Pulls: {screen: PullRequestsScreen}
}, {
  nitialRouteName: 'Home',
  headerLayoutPreset: 'center'
});

const App = createAppContainer(MainNavigator);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


/*class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <RepositoriesScreen/>
      </Provider>
    )
  }
}*/

// allow reactotron overlay for fast design in dev mode
export default Root

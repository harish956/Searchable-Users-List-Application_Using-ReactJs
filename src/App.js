import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetails: userDetailsList}

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  onDeleteUser = uniqueNo => {
    const {userDetails} = this.state
    const filteredData = userDetails.filter(
      eachItem => eachItem.uniqueNo !== uniqueNo,
    )
    this.setState({userDetails: filteredData})
  }

  render() {
    const {searchInput, userDetails} = this.state
    const upatedList = userDetails.filter(echItem =>
      echItem.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          value={searchInput}
          type="search"
          onChange={this.onChangeSearchInput}
        />
        <ul className="list-container">
          {upatedList.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              onDeleteUser={this.onDeleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App

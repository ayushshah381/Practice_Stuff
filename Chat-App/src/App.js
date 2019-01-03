import React, { Component } from 'react';
import './App.css';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import SendMessageForm from './components/SendMessageForm';

const tokenUrl = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/59e944a7-7fa1-4550-810e-46be83c42c14/token";
const instanceLocator = "v1:us1:59e944a7-7fa1-4550-810e-46be83c42c14";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: []  
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getRooms.bind(this);  
    this.createRoom = this.createRoom.bind(this);  
  }

  componentDidMount(){
    const chatManager = new ChatManager({
      instanceLocator,
      userId: 'Ayush',
      tokenProvider: new TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser;
      //.catch(err => console.log('Error occured while joining rooms'))
      this.getRooms()
      //this.subscribeToRoom()
    })
  
  }

  getRooms(){
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
  }

  subscribeToRoom(roomId){
    this.setState({
      messages: []
    })
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
    .then(room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms()
    })
    .catch(err => console.log('Error in subscribing'))
  }

  sendMessage(text){
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  createRoom(name){
    this.currentUser.createRoom({
      name
    })
    .then(room => this.subscribeToRoom(room.id))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="rl">
          <RoomList
            roomId={this.state.roomId}
            subscribeToRoom={this.subscribeToRoom}
            rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
          <NewRoomForm createRoom={this.createRoom}/>
          </div> 
          <div className="ml">
            <MessageList
              roomId={this.state.roomId}
              messages={this.state.messages} />
            <SendMessageForm
              disabled={!this.state.roomId}
              sendMessage={this.sendMessage}/>
          </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../App.css';
class RoomList extends Component {
    render() {
        //console.log(this.props.rooms);
        const orderedRooms = [...this.props.rooms].sort((a,b) => a.id-b.id)
        return (
            <div className="rooms-list">
                <ul>
                <h3>Your Rooms</h3>
                    {orderedRooms.map(room => {
                        const active = this.props.roomId === room.id ? "active" : "";
                        return(
                            <li key={room.id} className={"room" + active}>
                                <p 
                                    className="rn"
                                    onClick = {() => this.props.subscribeToRoom(room.id)}
                                    href="#">
                                    {room.name}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default RoomList;
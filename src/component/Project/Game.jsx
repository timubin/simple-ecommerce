import Board from './Board';
import React, { Component } from 'react'

 class Game extends Component {
    render() {
        return (
            <div>
                <h1>Game Component</h1>
                <Board />
            </div>
        )
    }
}
export default Game;
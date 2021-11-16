import React from 'react'
import Square from './Square';

 function Board(props) {
     const renderSquare = i =><Square
     value={props.Square[i]}
     onClick={()=>props.onClick(i)} />
    return (
        <div>
       <div>
           {renderSquare(1)}
           {renderSquare(2)}
           {renderSquare(3)}
            
        </div>
        <div>
             {renderSquare(4)}
           {renderSquare(5)}
           {renderSquare(6)}
        </div>
        <div>
           {renderSquare(7)}
           {renderSquare(8)}
           {renderSquare(9)}
        </div>

        </div>
 

       
        
    )
}
export default Board;
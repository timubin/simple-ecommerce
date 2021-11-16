import React, { Component } from 'react'

export class Class18 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             comment:""
        }
        this.commentChangeHeldler = this.commentChangeHeldler.bind(this);
        this.nameChangeHeldler = this.nameChangeHeldler.bind(this);
        this.submitHendaler=this.submitHendaler.bind(this)
    }
    
    nameChangeHeldler(event){
        this.setState({
            name: event.terget.value
        })
    }

    commentChangeHeldler(event){
        this.setState({
        comment: event.terget.value
        })
    }
    
    submitHendaler(){
        alert(`$(this.state.name) $(this.state.comment)`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHendaler}>
                    <div>
                        <label>Name :</label>
                        <input type="text" value={this.state.name} onChange={this.nameChangeHeldler}/>
                    </div>
                    <div>
                        <label>Commentes :</label>
                        <textarea value={this.state.comment} onChange={this.commentChangeHeldler}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Class18;

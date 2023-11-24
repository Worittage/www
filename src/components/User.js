import React from "react";
import AddUser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
        user = this.props.user
    
    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.props.user.id)} className="delete-icon" />
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icon" />
                <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
                <img src={ this.user.avatar} alt="avatar"/>
                <p>{this.props.user.email }</p>
                <b>{this.props.user.isHappy ? 'счастлив' : 'не особо (**)'}</b>

                {this.state.editForm && <AddUser user={this.user } onAdd={this.props.onEdit} />}
            </div>
        );
    } 
}

export default User;

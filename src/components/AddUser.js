import React from "react";

class AddUser extends React.Component {
    userAdd = {};
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            bio: "",
            age: 1,
            isHappy: false
        };
    }

    render() {
        const { first_name, last_name, bio, age, isHappy } = this.state;

        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({ first_name: e.target.value })} />
                <input placeholder="Фамилия" onChange={(e) => this.setState({ last_name: e.target.value })} />
                <textarea placeholder="Биография" onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder="Возраст" type="number" onChange={(e) => this.setState({ age: parseInt(e.target.value, 10) })} />
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
                <button type="button" onClick={() => {
                    this.myForm.reset();
                    this.userAdd = {
                        first_name,
                        last_name,
                        bio,
                        age,
                        isHappy
                    };
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id;
                    this.props.onAdd(this.userAdd);
                }}>Добавить</button>
            </form>
        );
    }
}

export default AddUser;

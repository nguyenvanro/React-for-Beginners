import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends React.Component {
    handleDeleteUser = (user) => {
        console.log('delete user: ', user);

        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        console.log('create user: ');

        this.props.addUserRedux()
    }

    render() {
        console.log('check props: ', this.props);
        let listUsers = this.props.dataRedux;
        return (
            <div>
                <h3>
                    Hello
                </h3>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>

                                    {index + 1} - {item.name}
                                    &nbsp;
                                    &nbsp;
                                    <span onClick={() => this.handleDeleteUser(item)}>
                                        x
                                    </span>

                                </div>

                            )
                        })
                    }
                </div>

                <button onClick={() => this.handleCreateUser()}>
                    Add
                </button>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: "DELETE_USER",
            payload: userDelete
        }),
        addUserRedux: () => dispatch({
            type: "CREATE_USER",
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
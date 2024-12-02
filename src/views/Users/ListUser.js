import React from "react";
import axios from "axios";
import './ListUser.scss'

class ListUser extends React.Component {

    state = {
        ListUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
        })

    }


    render() {
        let { ListUsers } = this.state;
        return (
            <>
                <div>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>

                        </tr>
                        {ListUsers && ListUsers.length > 0 &&
                            ListUsers.map((item, index) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>
                                                <img src={item.avatar} width="25" height="30" />

                                            </td>
                                        </tr>
                                    </>
                                )

                            })
                        }

                        {/* <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>

                        </tr> */}



                    </table>
                </div>
            </>
        )

    }
}

export default ListUser;
import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {

    render() {
        return (
            <div>
                <h3>
                    Hello
                </h3>
            </div>
        )
    }
}


export default withRouter(Home);
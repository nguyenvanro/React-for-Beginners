import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "Nguyen Ro"
    }
    render() {
        return (
            <>

                <div>hello React</div>
                <div>
                    My name {this.state.name}
                </div>
            </>
        )

    }
}

export default MyComponent;

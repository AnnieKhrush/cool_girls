import React, { Component } from 'react' 

export default class Recepies extends Component {
    render() {
        return (
            <main>
                {this.props.recepies.map(el => (
                    <h1>{el.title}</h1>
                ))}
            </main >
        )
    }
}

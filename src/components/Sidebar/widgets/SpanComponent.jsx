import React from 'react';

export default class SpanComponent extends React.Component {
    constructor() {
        super();

        this.props = {
            prop: ''
        }

        this.state = {
            render: false
        }
    }

    componentDidMount() {
        setTimeout(function() { 
            this.setState({render: true})
        }.bind(this), 200)
      }

    render() {
        let renderContainer = false;
        const {prop} = this.props;

        if (this.state.render) { 
            renderContainer = <span>{prop}</span> 
        }

        return (
            renderContainer
        )
    }
}

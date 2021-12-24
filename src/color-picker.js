import React from 'react';

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#ac9191'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            color: event.target.value
        });
    }

    render() {
        return (
            <div style={{background:this.state.color}}>
                <h1>Colorpicker</h1>
                <input type="color" value={this.state.color} onChange={this.handleChange} />
                <h2>{this.state.color}</h2>
            </div>
        );
    }
}
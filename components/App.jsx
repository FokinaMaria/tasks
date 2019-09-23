import React, { Component } from 'react';
import axios from 'axios';

import List from './List.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

      //console.log('constructor');
    }

    componentDidMount() {
         // console.log('/list/count=3');
        //fetch('/list').then(res => res.json()).then(res => this.setState({ list: res }))
      axios.get('/list?count=5')
        .then(res => {
            //console.log(res);
            this.setState( {list: res.data}) 
        })
    }

    render() {
        console.log('state запрос', this.state);

        const { list } = this.state;

        return (
            <div>
                <List list={list}  />
            </div>
        );
    }
}

export default App;

import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import { robots } from './robots'; //{} because we use just export, not export default. Because we will get multiple exports from robots.js

const App = () => {
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>

    );
}

export default App;
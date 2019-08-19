import React, { useState, useEffect } from 'react';
import Result from './FizzFetch/Result';
import './ReactApp.css'

const ReactApp = () =>{

    const [queryState, setQuery] = useState({ param: null });

    const fooFunction = (query) => {
        fetchFooBar(query);
    }

    const barFunction = (query) => {
        fetchFooBar(query);
    }

    const fooBarFunction = (query) => {
        fetchFooBar(query);
    }

    const fetchFooBar = (param) =>{
        let endpointUrl = '/api/fizzbuzz?param='; // Rails Endpoint URL: http://localhost:3000/api/fizzbuzz?param=
        const result = fetch( endpointUrl + param) 
        .then(result => result.json()); // result to JSON
        if( param === 'foo' ) setQuery({param: param}); // if expressions were to be expanded plz add {} - chris 
        else if( param === 'bar') setQuery({param: param});
        else if ( param === 'foo' + 'bar') setQuery({param: param})
    }

    return (
        <div className="App">
            <p>
                <strong>API request result:</strong>
            </p>
            <button className="button-space" onClick={() => fooFunction('foo')}> I'm Foo</button>
            <button className="button-space" onClick={() => barFunction('bar')}> I'm Bar </button>
            <button className="button-space" onClick={() => fooBarFunction('foobar')}> I'm Foobar </button>
            {queryState.param ? 
                ( <Result param={ queryState.param}/>) : (<div>Result Here</div>)
            }
        </div>
    );
}

export default ReactApp;
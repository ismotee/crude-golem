## Description

Crude-golem is a friendly servant who takes care of React components that needs to fetch data from the backend. While waiting the response from the backend Golem serves Loading component. When fetch returns an error, golem serves Error Component. In a successful response it will render a Ready component.

Golem gives you the opportunity to separate these three functions in to a three different functions (or classes) and that way make your code clear and golden.

## Installation

```
npm install crude-golem
```

## Getting started

Here is a simple example how you can use golem:

```
import React from 'react';
import Golem from 'crude-golem';

const Ready = (props) => {
    return <>{props.ready}<>;
}

const Loading = () => {
    return <>loading</>;
}

const Error = (props) => {
    return <>{props.error}</>
}

const task = new Promise(res => {
    setTimeout(
        res({
            ready: "data is now ready"
        }),
        2000
    )
});

export default Golem(task)(Ready, Loading, Error);
```

## Usage

Golem works like a basic React high order components. First you call Golem() and you give a Promise which resolves the data from fetch. This data will be passed to Ready Component as a props. If Promise returns a reject the parameters of the reject will be passed to the Error component.

(Note that nothing won't stop you from using Redux or other data management for accessing the data. The actions needs to be dispatched within the Promise.)

import React from 'react';
import ReactDOM from 'react-dom';
import VmList from '../react/components/VmList';

class IndexPage {
    constructor() {
        console.log("Index Page Constructor");
    }

    init() {
        console.log("Index Page Init");
        this.renderReactComponent();
    }
    renderReactComponent() {
        const reactContainer = document.getElementById('react-component');
        if (reactContainer) {
            ReactDOM.render(<VmList />, reactContainer);
        } else {
            console.error("React component container not found.");
        }
    }
}


const indexPage = new IndexPage()
indexPage.init()

export default indexPage
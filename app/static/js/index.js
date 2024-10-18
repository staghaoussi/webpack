import React from 'react';
import { createRoot } from 'react-dom/client';
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
            const root = createRoot(reactContainer);
            root.render(<VmList />);
        } else {
            console.error("React component container not found.");
        }
    }
}


const indexPage = new IndexPage()
indexPage.init()

export default indexPage
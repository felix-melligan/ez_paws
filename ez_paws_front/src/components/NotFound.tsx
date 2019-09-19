import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return(
            <div className='NotFoundPage'>
                <h1>
                    404: Page not found!
                </h1>
                <p>
                    The content for this page has not been found, oops!
                </p>
            </div>
        )
    }
}

export default NotFound;
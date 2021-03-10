import React from 'react';

const Header = () => {

    return (<>
        <div className="nav-container">
            <div className="book-title">
                Books
          </div>

            <div className="create-button-container">
                <button className="create-button"> Create New Book </button>
            </div>

        </div>
    </>
    );
}

export default Header;
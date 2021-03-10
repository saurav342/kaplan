import React from 'react';

const CardComponent = (props) => {
    const { title, authors, publishedDate, publisher } = props.volumeInfo;
    return (<>

        <div className="card">
            <div className="card-content">
                <h4>{title}</h4>
                <p>Authors: {authors}</p>
                {publisher ? <p> Publisher: {publisher}</p> : <> </>}
                <p> Published Date: {publishedDate}</p>

            </div>
        </div>

    </>
    );
}

export default CardComponent;
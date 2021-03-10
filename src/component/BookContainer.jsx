import React from 'react';
import CardComponent from './CardComponent';
import googleBookService from '../service';
import useObservable from '../customHooks/useObservable';

let bookService = googleBookService();


const BookContainer = (props) => {
    const { searchTerm } = props;
    const booksData = useObservable(bookService);
    return (<>
        <div className="books-container">
            <p className="all-book-text">
                All Books
         </p>

            <div className="centered">

                <div className="cards">
                    {
                        booksData ?
                            booksData
                                .filter((book) => {
                                    if (searchTerm === "") {
                                        return booksData;
                                    } else {
                                        return book.volumeInfo.title.toLowerCase().includes(searchTerm)
                                    }
                                })
                                .map((eachBook) => {
                                    return <CardComponent {...eachBook} />
                                }) : <> No data</>
                    }
                </div>
            </div>
        </div>
    </>
    );
}

export default BookContainer;
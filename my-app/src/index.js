import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/81RcyFo8h5L.__BG0,0,0,0_FMpng_AC_UL240_SR240,240_.jpg",
    title: 'Across The Green Grass Field',
    author: "Seanan McGuire"
}


function BookList() {
    return (
        <section className="booklist">

            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
            <Book job='1' />
            <Book />
            <Book />
            <Book />

        </section>
    )
}

const Book = (props) => {
    console.log(props);
    return (
        <article className="book">
            <img src={props.img} alt='book' />
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>

        </article>
    );
}





ReactDom.render(<BookList />, document.getElementById('root'))
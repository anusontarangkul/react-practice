import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/81RcyFo8h5L.__BG0,0,0,0_FMpng_AC_UL240_SR240,240_.jpg",
    title: 'Across The Green Grass Field',
    author: "Seanan McGuire"
}

const secondBook = {
    img: "https://m.media-amazon.com/images/I/51BjI4q27GL.jpg",
    title: 'Beneath the Sugar Sky',
    author: "Seanan McGuire"

}


function BookList() {
    return (
        <section className="booklist">

            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} >
                <p>lorem </p>
            </Book>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
            <Book />
            <Book />
            <Book />

        </section>
    )
}

const Book = (props) => {
    const { img, title, author } = props
    return (
        <article className="book">
            <img src={img} alt='book' />
            <h1>{title}</h1>
            <h4>{author}</h4>
            {props.children}

        </article>
    );
}





ReactDom.render(<BookList />, document.getElementById('root'))
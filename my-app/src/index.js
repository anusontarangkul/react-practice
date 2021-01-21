import React from 'react';
import ReactDom from 'react-dom'

function BookList() {
    return (
        <section>

            <Book />
        </section>
    )
}

const Book = () => {
    return <article><Image /></article>
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81RcyFo8h5L.__BG0,0,0,0_FMpng_AC_UL240_SR240,240_.jpg" alt="book preview" />



ReactDom.render(<BookList />, document.getElementById('root'))
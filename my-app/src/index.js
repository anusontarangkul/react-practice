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
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81RcyFo8h5L.__BG0,0,0,0_FMpng_AC_UL240_SR240,240_.jpg" alt="book preview" />

const Title = () => <h1>Across The Green Grass Fields</h1>
const Author = () => <h4>Seanan McGuire</h4>


ReactDom.render(<BookList />, document.getElementById('root'))
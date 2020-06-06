import React from 'react'

import Result from './Result'

function Results({results , openPopup}) {
    return (


    <section className="results">

{results.map(items =>(
    <Result key={items.imdbID} results={items} openPopup={openPopup}/>
))}


    </section>

    )
}

export default Results

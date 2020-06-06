import React from 'react'

function Result({results , openPopup}) {

    return (
        <div className="result" onClick={ () => openPopup(results.imdbID) }>
            
<img src={results.Poster}/>
    <h3>{results.Title}</h3>
        </div>
    )
}

export default Result

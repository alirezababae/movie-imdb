import React from 'react'

function Search(props) {

    return (
      <section className="shrchbox-warp">
<input type="text" placeholder="eenter" className="schrchbox"

onChange={props.handelInput}

onKeyPress={props.shearch}

/>


      </section>
    )
}

export default Search

import React, { Component } from 'react'

export class Images extends Component {
  render() {
    return (
      <>
        <h2>Images</h2>

        {this.props.immagini.map( (i) => <div key={ i.id } > 
            <h3> {i.alt_description} </h3> 
            <p>{i.description}</p>
            <p>{i.user.name }</p>
            <img alt={i.alt_description}  src={ i.urls.full} width="30%" />
        </div>)}
      </>
    )
  }
}

export default Images

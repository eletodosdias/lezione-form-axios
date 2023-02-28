import React, { Component } from 'react'

export class Searchbar extends Component {
    state = { testo:""}

    onInputChange = (e) => {
        this.setState( ( ) => {
            return { testo: e.target.value }
        })
        console.log(this.state.testo);
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.testo)
    }

  render() {
    return (
      <>
        <h2>Searchbar component</h2>

        <form onSubmit={this.handleOnSubmit}>
            <input type="text" value={this.state.testo} onChange={this.onInputChange} />
            <button > Cerca </button>
        </form>
      </>
    )
  }
}

export default Searchbar

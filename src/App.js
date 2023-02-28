import React from 'react';
import Images from './Images';
import Searchbar from './Searchbar'
import axios from 'axios';

class App extends React.Component {
  state = { immagini: [] }

  handleSearchSubmit = async (testo) => {
    // this.setState( () => {
    //   return {valoreSearchbar: testo }
    // })

    //async await - req http per richiesta imgs -- tempo per essere completata non è compatibile cn il resto dell'app 
    //js singolo thread - bisogna far sì che js continui a fare le sue operazioni

    
    //response : variabile al cui interno ci va l'array di url contenente le varie img
    //response = [ url.jpg]
    //await 
    const response = await axios.get( "https://api.unsplash.com/search/photos", {
      params: {
        query: testo
      },
      headers : {
        //nel mio profilo unsplash trovo access key
        Authorization: "Client-ID Ft8vHmcKDAjezQ8nRbHHSvnXc69Qtod5Pb05lhWr5AY"
      }

      /*Manca codice qua  ****/
    } )
    this.setState( () => {
      return { immagini: response.data.results }
    })
    console.log(response)
    //console.log(response.data)

  }

  render(){
    return (
      <>
        <h1>App foto</h1>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <Images immagini={this.state.immagini} />
  
      </>
    )
  }
}

export default App;

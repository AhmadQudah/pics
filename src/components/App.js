import React from 'react';
import unSplash from '../api/unSplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };


   onSearchSubmit = async term => {
      /*the first argument is for the address that we 
      want a get request to */
      /*the second one is an object that has a punsh of
      options that will customize this request*/
    const response = await unSplash.get('/search/photos',{
        params:{query: term}
       
        /*here we want to invoke an object called
        a promise object that will give us a little 
        notification when some amount of work like 
        a network request is completed */
       });/*.then(response=>{
        console.log(response.data.results);
       })*/

       this.setState({ images: response.data.results });
   }
   
   
    render(){
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
        </div>
    );
}
}

export default App;
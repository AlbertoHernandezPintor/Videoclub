import React from 'react';
import Routes from './routes';

class App extends React.Component {
  render () {
    return (
      <div>
        <header>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </header>
        <Routes/>
      </div>
    );
  }
}

export default App;

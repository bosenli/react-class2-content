// import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

      <header>
      
      </header>
      <body>
        {/* <Product title="Apple Airpods" description="Lorem ipsum dolor sit amet, graecis intellegat pertinacia cum et" image="https://cdn0.iconfinder.com/data/icons/household-items-2/100/airpod2-512.png" alt="apple image"/> */}
        <div className='book'>
          <Book title = "A-book" description="A books description" img="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg" alt = "A books"/>
          <Book title = "B-book" description="B books description" img="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg" alt = "B books"/>
        </div>
      </body>
      <footer></footer>
    </div>
  );
  
}

export default App;

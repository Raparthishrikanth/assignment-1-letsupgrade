import logo from './logo.svg';
import './App.css';

function App() {
  const blogObj = {
    title: 'Blog title 1',
    description: 'lorem ipsum dolor sit amet, consectetur adipis'
  }
  return (
  <div className="App">
    <div style ="Blogcard">
     <h3>{blogObj.title}</h3> 
     <p>{blogObj.description}</p>
    </div>
      <div style ="Blogcard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <div style="Blogcard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
  </div>
    
  );
}

export default App;

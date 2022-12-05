import './App.css';
import ProductGrid from './components/ProductGrid';

function App() {

    return (
        <main>
            <h1 className="main-header">Welcome to Fruity!</h1>
            <h2 className="main-secondary-header">Choose your favorite fruits!</h2>
            <ProductGrid />
        </main>
    );
    
}

export default App;

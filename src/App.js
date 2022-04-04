import './App.css';
import Dictionary from "./Dictionary";
export default function App() {
  return (
 <div className="App">
            <div className="container">
                <header className="App-header">
                </header>
                <main>
                    <Dictionary defaultKeyword="Batman" />
                </main>
                <footer className="App-footer">
                    Coded by 
                   Amy Flores open-sourced on {" "}
                    <a href="https://github.com/amymaryflores/dictionary-react-app" target="_blank" rel="noreferrer"> GitHub</a> and hosted on {" "}
                    <a href="https://gregarious-peony-46461e.netlify.app" target="_blank" rel="noreferrer">Netlify </a>
                </footer>
            </div>
        </div>
    );
  }
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
                    Coded by {" "}
                    <a href="mailto:tessehellena@gmail.com">Amy Flores</a> {" "},is open-sourced on {" "}
                    <a href="https://github.com/amymaryflores/dictionary-react-app" target="_blank" rel="noreferrer"> GitHub</a> and hosted on {" "}
                    <a href="" target="_blank" rel="noreferrer">Netlify </a>.
                </footer>
            </div>
        </div>
    );
  }
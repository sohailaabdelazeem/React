import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css"
import CounterContextProvider from './Context/CounterContect.jsx';
import TonkenContextProvider from './Context/TokenContext.jsx';
import './index.css'
import { Provider } from 'react-redux';
import myStore from './redux/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
        <CounterContextProvider>
          <TonkenContextProvider>
            
                <App />
          </TonkenContextProvider>
            

        </CounterContextProvider>
    </Provider>
  
  </StrictMode>,
)

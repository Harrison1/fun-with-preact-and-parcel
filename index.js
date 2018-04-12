import {Provider, connect} from 'preact-redux';
import { h, render } from 'preact'
import App from './container/App'

const Main = () => (
  <Provider>
    <App />
  </Provider>
)

render(<Main />, document.body);

import { h } from 'preact';
import Title from './Title'
import Alert from '../container/Alert'

const App = () =>
  <div id="root">
    <Title title="Hello Galaxy" />
    <Alert />
  </div>

export default App

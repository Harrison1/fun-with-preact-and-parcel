import { h, render } from 'preact'
import Title from './components/Title'
import Alert from './container/Alert'

render((
  <div id="root">
      <Title title="Hello Galaxy" />
      <Alert />
  </div>
), document.body);
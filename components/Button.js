import { h } from 'preact';

const Button = ({ func, text }) =>
  <button onclick={ func }>{ text }</button>;

export default Button
import React from 'react';

function Greetings(props) {
  let hello;
  switch (props.lang) {
    case 'en':
      hello = 'Hello';
      break;
    case 'de':
      hello = 'Hallo';
      break;
    case 'fr':
      hello = 'Bonjour';
      break;
  }
  console.log(props);
  return (
    <div>
      {hello} {props.children}
    </div>
  );
}

export default Greetings;

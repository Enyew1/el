import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Website Developer',
          'UX/UI designer',
          'Django and react devloper',
          'I love python and JavaScript',
          'Open Source Contributor',
          'Thank you for visiting my profile',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

import React from 'react';

type Props = {
  text: string;
  clickHandler?: () => {};
  disabled?: boolean;
};

function Button({ text, clickHandler, disabled }: Props) {
  if (disabled) {
    return (
      <button className="bg-indigo-200 text-white rounded-md" disabled>
        {text}
      </button>
    );
  } else {
    return (
      <button className="bg-indigo-500 text-white rounded-md" onClick={clickHandler}>
        {text}
      </button>
    );
  }
}

export default Button;

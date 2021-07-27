import { Fragment, useState } from 'react';

const Input = ({ onAdd }) => {
  const [inputState, setInputState] = useState('');
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputState.trim() !== '') {
      onAdd(inputState);
      setInputState('');
    }
  };

  const handleBlurClick = () => {
    if (inputState.trim() !== '') {
      onAdd(inputState);
      setInputState('');
    }
  };

  const handleInputChange = (e) => {
    setInputState(e.target.value);
  };

  return (
    <Fragment>
      <input
        className='form__input'
        placeholder='What me do?'
        name='to-do-input'
        onKeyPress={handleKeyPress}
        onBlur={handleBlurClick}
        onChange={handleInputChange}
        value={inputState}
      />
      <label className='form__label visually-hidden' htmlFor='to-do-input'>
        Fill in to do
      </label>
    </Fragment>
  );
};

export default Input;

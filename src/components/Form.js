import React, {useState} from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  const [number, setNumber] = useState(0);
  const [isInvalid, setIsInvalid] = useState(null);

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setIsInvalid(null);
    } else {
      setIsInvalid(`${newNumber} is not a valid number between 0 and 5`);
    }
  }
  return (
    <form>
      <input type="number" onChange={handleNumberChange} value={number} />
      {isInvalid ? <span style={{color: "red"}}>{isInvalid}</span>: null}
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
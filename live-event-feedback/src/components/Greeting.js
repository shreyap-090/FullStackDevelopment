import { useState } from "react";

function Greeting({ onNameSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onNameSubmit(firstName, surname);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>➤ Welcome, {firstName} {surname}!</h2>
      )}
    </div>
  );
}

export default Greeting;

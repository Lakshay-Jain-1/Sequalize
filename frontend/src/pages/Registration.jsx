import { useState } from "react";

export default function Registration() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  function submittingForm(e) {
    e.preventDefault();

    fetch("http://localhost:3000/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMessage(res.message);
      })
      .catch((res) => {
        setMessage(res.message);
      })
      .finally(() => {
        setEmail("");
        setName("");
      });
  }
  return (
    <>
      <form onSubmit={(e) => submittingForm(e)}>
        <input
          type="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" />
      </form>
      {message}
    </>
  );
}

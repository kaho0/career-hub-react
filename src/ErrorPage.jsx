import React from "react";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px", color: "#333" }}>
      <h1 style={{ fontSize: "4em", margin: "0.5em 0" }}>Oops!</h1>
      <p style={{ fontSize: "1.5em" }}>
        Something went wrong, and we couldn't find the page you're looking for.
      </p>
      <p style={{ fontSize: "1.2em", marginTop: "1.5em" }}>
        It might have been removed, renamed, or didn't exist in the first place.
      </p>
      <p style={{ marginTop: "2em", fontSize: "1em", color: "#777" }}>
        Don't worry, you can go back to the homepage or use the menu to navigate
        to a different section.
      </p>
      <p style={{ fontSize: "1em", marginTop: "2em", fontWeight: "bold" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#007BFF" }}>
          Go to Homepage
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;

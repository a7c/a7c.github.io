%%raw(`import './App.css';`)

@react.component
let make = () =>
  <div className="App">
    <header className="App-header">
      <h1> {React.string("Alan Cheng")} </h1>
      <p> {React.string("(This website is under construction!)")} </p>
      <h3>
        {React.string(
          "Hello! I'm a first-year PhD student in the Computer Science Department at Stanford University.",
        )}
      </h3>
      <p>
        {React.string(
          "I'm interested in exploring new ways to make learning more effective, engaging, and enjoyable through technology. ",
        )}
        {React.string(
          "My research lies at the intersection of human-computer interaction, education, and game design.",
        )}
      </p>
    </header>
  </div>

import './App.css'
import teamsData from "./CollegeBasketballTeams.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <div className="container">
            <h2>College Basketball Teams</h2>
            <br />
            <ul className="list-group">
                {teamsData.teams.map((team, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{team.school}</strong> - {team.name} ({team.abbrev})
                        <br />
                        <small>{team.city}, {team.state}</small>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default App

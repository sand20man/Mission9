import './App.css'
import teamsData from "./CollegeBasketballTeams.json";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <header className="text-center my-4">
            <h1>College Basketball Teams</h1>
        </header>
    );
};

const Team = ({ school, name, abbrev, city, state }) => {
    return (
        <div className="team-card mb-3 p-3 border rounded">
            <h4>{school} - {name} ({abbrev})</h4>
            <p>📍 {city}, {state}</p>
        </div>
    );
};

const TeamList = () => {
    return (
        <div className="container">
            <h2 className="mb-3">List of Teams</h2>
            {teamsData.teams.map((team, index) => (
                <Team 
                    key={index}
                    school={team.school}
                    name={team.name}
                    abbrev={team.abbrev}
                    city={team.city}
                    state={team.state}
                />
            ))}
        </div>
    );
};

function App() {
    return (
        <div>
            <Header />
            <TeamList />
        </div>
    );
}

export default App;

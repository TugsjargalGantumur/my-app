import "./NbaList.css";

export const NbaList = (props) => {
  const { teams } = props;

  if (teams.length === 0) return <h2>No teams available</h2>;

  return (
    <div>
      {teams.map((teams, index) => (
        <div key={index}>
          <h2>{teams.name}</h2>
          <p>{teams.description}</p>
        </div>
      ))}
    </div>
  );
};

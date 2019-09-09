import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0 ">
        <div className="card-content">
          <span className="card-title">Project Title -{id}</span>
          <p>
            Prepare to go for campus, do an early booking not to miss your bus
            ticket since there is an exam coming in soon{" "}
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Rhytonne </div>
          <div>25th Sept, Noon</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

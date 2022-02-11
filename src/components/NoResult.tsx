import React, {FC} from "react";

const NoResult: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered" style={{marginBottom: 50}}>No results yet!</h2>
        <div className="level-item has-text-centered">
          <p>Please use the search box above</p>
        </div>
      </div>
    </section>
  );
}

export default NoResult;

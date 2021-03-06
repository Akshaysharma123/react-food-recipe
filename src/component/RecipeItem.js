import React from "react";

const ReacipeItem = props => {
  const { label, image, ingredientLines } = props;

  return (
      <div className="card py-2 text-center">
          <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{label}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {ingredientLines.map(listRecipe => (
            <li className="list-group-item">{listRecipe}</li>
          ))}
        </ul>
      </div>
  );
};

export default ReacipeItem;

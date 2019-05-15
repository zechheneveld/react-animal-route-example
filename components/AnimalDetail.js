import React from "react";

const AnimalDetail = ({match}) => <div><h1>{match.params.id}</h1><h3>Animal Details...</h3></div>

export default AnimalDetail;
import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  //   let lastName = props.lastName;
  //   let firstName = props.firstName;
  //   let gender = props.gender;
  //   let height = props.height;
  //   let birth = props.birth;
  //   let picture = props.picture;
  return (
    <div>
      <div>
        <img src={picture} />
      </div>
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
        <li>Birth: {birth.toDateString()}</li>
      </ul>
    </div>
  );
}

export default IdCard;

import React from "react";
import "./styles/UserCard.css";

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUser("/users/", user.id);
  };

  const handleEdit = () => {
    setUserEdit(user);
    handleOpenForm();
  };
  return (
    <article className="user">
      <h2 className="card__name">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="card__list">
        <li className="card__item">
          <span className="card__label">Email</span>
          <span className="card__value">{user.email}</span>
        </li>
        <li className="card__item">
          <span className="card__label">Birthday</span>
          <span className="card__value">{user.birthday}</span>
        </li>
      </ul>
      <div className="card__btn">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </article>
  );
};

export default UserCard;

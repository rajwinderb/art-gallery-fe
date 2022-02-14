import "../styles/LogIn.css";
import { useState, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";
import { IUser } from "../utils/Interfaces";
import { getUserIdFromList } from "../utils/getUserIdFromList";
import { getUsername } from "../utils/getUsername";

interface LoginProps {
  setUserId: (userId: number | null) => void;
  userId: number | null;
}

export default function Login({ userId, setUserId }: LoginProps): JSX.Element {
  const navigate = useNavigate();
  const [userList, setUserList] = useState<IUser[]>([]);
  const [username, setUsername] = useState<string>("");
  const [triggerGetUserList, setTriggerGetUserList] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${API_BASE}/users`)
      .then((response) => {
        setUserList(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleGetUserId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postUser = async () => {
      await axios
        .post(`${API_BASE}/users`, {
          username: username.trim().toLowerCase(),
        })
        .then((response) => {
          localStorage.setItem("savedUserId", `${response.data.new_user.id}`);
          setUserId(response.data.new_user.id);
          setTriggerGetUserList(!triggerGetUserList);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const retrivedUserId: number | null = getUserIdFromList(username, userList);
    if (retrivedUserId !== null) {
      localStorage.setItem("savedUserId", `${retrivedUserId}`);
      setUserId(retrivedUserId);
    } else {
      postUser();
    }
  };

  const handleSignOut = () => {
    setUsername("");
    setUserId(null);
    localStorage.removeItem("savedUserId");
    navigate(`/`);
  };

  return (
    <Fragment>
      {userId === null ? (
        <form onSubmit={handleGetUserId} className="LogIn">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="UsernameInput"
            placeholder="Enter username"
          />
          <button className="LogInButton" type="submit">
            <i className="fas fa-sign-in-alt"></i>
          </button>
        </form>
      ) : (
        <div className="LogIn">
          <p className="Username">{getUsername(userId, userList)}</p>
          <button
            onClick={handleSignOut}
            type="button"
            className="SignOutButton"
          >
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      )}
    </Fragment>
  );
}

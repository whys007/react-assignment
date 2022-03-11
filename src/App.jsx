import { useEffect } from "react";
// Components
import UserCard from "./Components/UserCard";
import UserList from "./Components/UserList";
// Styles
import { Wrapper } from "./App.styled";
// Spinner
import { TailSpin } from "react-loader-spinner";
// ///////
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./redux/action";

const App = () => {
  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data.data));
        // setUsers(data.data);
      });
  }, [dispatch]);

  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <Wrapper>
      {users.length === 0 ? (
        <TailSpin ariaLabel="loading-indicator" />
      ) : (
        <>
          <UserCard />
          <UserList />
        </>
      )}
    </Wrapper>
  );
};

export default App;

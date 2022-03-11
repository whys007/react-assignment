import { useDispatch, useSelector } from "react-redux";
import { fecthUserDetail } from "../redux/action";
import { UserButton, UserListWrapper } from "./User.styled";

const UserList = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  return (
    <UserListWrapper>
      {users &&
        users.map((user) => {
          return (
            <UserButton
              key={user.id}
              onClick={() => dispatch(fecthUserDetail(user.id))}
            >
              {user.first_name}
            </UserButton>
          );
        })}
    </UserListWrapper>
  );
};

export default UserList;

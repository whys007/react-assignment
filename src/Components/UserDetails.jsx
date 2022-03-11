import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const { userDetail, isUserLoading } = useSelector((state) => state);
  const { first_name, avatar, email, last_name } = userDetail;

  const userTemplate = (
    <>
      <div>
        <img src={avatar} alt={first_name} />
      </div>
      <h2>{`${first_name} ${last_name}`}</h2>
      <h6>{email}</h6>
    </>
  );
  return (
    <>
      {isUserLoading ? (
        <TailSpin ariaLabel="loading-indicator" />
      ) : (
        userTemplate
      )}
    </>
  );
};

export default UserDetails;

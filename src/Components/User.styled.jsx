import styled from "styled-components";

export const Card = styled.div`
  width: 360px;
  ${"" /* text-align: center; */}
  background-color: #f1f1f1;
  height: 250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const UserButton = styled.button`
  padding: 6px 12px;
  margin: 10px ;
  outline:none;
  border:none;
  background: #00A6ED;
  border-radius:3px;

}
`;

export const UserListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const UserDetail = styled.div``;

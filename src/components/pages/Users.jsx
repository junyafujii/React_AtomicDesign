import styled from "styled-components";
import { SearchInput } from "../atoms/molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

export const Users = () => {
  const users = [...Array(10).keys()].map((val) => {
    return {
      id: val,
      name: `JUN-${val}`,
      image: "https://source.unsplash.com/MoDcnVRN5JU",
      email: "111@aaaa.com",
      phone: "000-1234-5678",
      company: {
        name: "ああああ会社"
      },
      website: "https://google.com"
    };
  });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

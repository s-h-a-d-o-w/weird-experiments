import styled from '@emotion/styled';
import React, { useState } from 'react';
import { User } from '../types';
import { CreateUserForm } from './CreateUserForm';
import { UserItem } from './UserItem';
import deepClone from 'lodash/cloneDeep';

const UnorderedList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export function UserList() {
  const [users, setUsers] = useState<User[]>(
    JSON.parse(localStorage.getItem('users') ?? '[]')
  );

  const handleCreateUser = (user: User) => {
    const nextUsers = [...users, user];
    setUsers(nextUsers);
    localStorage.setItem('users', JSON.stringify(nextUsers));
  };

  const handleUpdateUser = (index: number, nextUser: User) => {
    const nextUsers = deepClone(users);
    nextUsers[index] = nextUser;
    setUsers(nextUsers);
    localStorage.setItem('users', JSON.stringify(nextUsers));
  };

  const userElements = users.map((user, index) => (
    <UserItem
      key={user.id}
      data={user}
      onUpdate={handleUpdateUser.bind(null, index)}
    />
  ));

  return (
    <>
      <UnorderedList>{userElements}</UnorderedList>
      <CreateUserForm onNewUser={handleCreateUser} />
    </>
  );
}

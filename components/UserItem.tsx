import styled from '@emotion/styled';
import React from 'react';
import { User } from '../types';
import { AddUserToGroupForm } from './AddUserToGroupForm';

type Props = {
  data: User;
  onUpdate: (user: User) => void;
};

const StyledGroups = styled.span`
  font-size: 14rem;
`;

const StyledHeading = styled.h2`
  font-size: 22rem;
  font-weight: normal;
  margin: 0;
`;

export const UserItem: React.FC<Props> = ({ data, onUpdate }) => {
  const { id, name, groupIds } = data;

  return (
    <li key={id}>
      <StyledHeading>{name}</StyledHeading>
      <StyledGroups>Assigned groups: {groupIds.join(', ')}</StyledGroups>
      <AddUserToGroupForm
        onUpdateUser={(groupId) =>
          onUpdate({
            ...data,
            groupIds: [...groupIds, groupId],
          })
        }
      />
    </li>
  );
};

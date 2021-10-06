import { useState } from 'react';
import { User } from '../types';
import { v4 as uuid } from 'uuid';

type Props = {
  onNewUser: (user: User) => void;
};

export const CreateUserForm: React.FC<Props> = ({ onNewUser }) => {
  const [name, setName] = useState('');

  const createUser: React.FormEventHandler = (event) => {
    event.preventDefault();
    onNewUser({ name, id: uuid(), groupIds: [] });
  };

  return (
    <form onSubmit={createUser}>
      <label>
        User name{' '}
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

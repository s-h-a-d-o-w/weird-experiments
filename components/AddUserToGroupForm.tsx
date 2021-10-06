import { useState } from 'react';

type Props = {
  onUpdateUser: (groupId: string) => void;
};

export const AddUserToGroupForm: React.FC<Props> = ({ onUpdateUser }) => {
  const [name, setName] = useState('');

  const createUser: React.FormEventHandler = (event) => {
    event.preventDefault();
    onUpdateUser(name);
  };

  return (
    <form onSubmit={createUser}>
      <label>
        Group id:{' '}
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
      </label>
      <button type="submit">Add to group</button>
    </form>
  );
};

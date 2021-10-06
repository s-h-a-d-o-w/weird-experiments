import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserList } from './UserList';
import { User } from '../types';

// See: https://bholmes.dev/blog/mocking-browser-apis-fetch-localstorage-dates-the-easy-way-with-jest/
let mockStorage: Record<string, string> = {};

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    mockStorage[key] = value;
  });
  global.Storage.prototype.getItem = jest.fn((key) => mockStorage[key]);
});

beforeEach(() => {
  mockStorage = {};
});

afterAll(() => {
  (global.Storage.prototype.setItem as jest.Mock).mockReset();
  (global.Storage.prototype.getItem as jest.Mock).mockReset();
});

describe('UserList', () => {
  it('can assign a new group to a user', () => {
    const testUser: User = {
      id: 'some uuid',
      name: 'John Doe',
      groupIds: [],
    };
    localStorage.setItem('users', JSON.stringify([testUser]));

    render(<UserList />);

    const groupIdField = screen.getByRole('textbox', { name: /group id/i });
    userEvent.type(groupIdField, 'some group uuid');

    const addToGroupButton = screen.getByRole('button', {
      name: /add to group/i,
    });
    userEvent.click(addToGroupButton);

    expect(screen.getByText(/some group uuid/i)).toBeInTheDocument();
  });
});

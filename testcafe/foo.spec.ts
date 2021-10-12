import { Selector } from 'testcafe';

fixture`Getting Started`.page`http://localhost:3000`;

test('My first test', async (t) => {
  const nameInput = Selector('label').withText('User name');
  const listItems = Selector('li');

  await t.typeText(nameInput, 'John Doe').pressKey('enter');
  await t.typeText(nameInput, 'Jane Doe', { replace: true });
  await t.click(Selector('button').withText('Create'));

  await t.expect(listItems.count).eql(4);
});

import fs from 'fs';
import path from 'path';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
  fetchMock.resetMocks();
});

it('has a message element', () => {
  expect(document.getElementById('message')).toBeTruthy();
});

it('changes message text', async () => {
  const message = 'If you are reading this everything is fine :)';

  fetchMock.mockResponse(
    JSON.stringify({
      message
    })
  );

  require('../ts/index');

  await new Promise(r => setTimeout(r, 200));

  expect(fetchMock.mock.calls.length).toEqual(1);
  expect(document.getElementById('message').innerHTML).toBe(message);
});

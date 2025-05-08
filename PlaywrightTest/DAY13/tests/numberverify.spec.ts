import { test, expect } from '@playwright/test';
test('Validate phone number API', async ({request}) => {

  const response = await request.post('http://apilayer.net/api/validate', {
    params: {
      access_key: '07fc49807e5439cef9bbfb11eddfccdf',
      number: '14158586273',
      country_code: '',
      format: '1',
    }
  });

  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log(responseBody);
});

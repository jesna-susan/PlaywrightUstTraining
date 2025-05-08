// tests/exchangeRateAPI.spec.ts
import { test, expect, request } from '@playwright/test';

test('Currency conversion API test', async () => {
  const apiContext = await request.newContext({
    extraHTTPHeaders: {
      'apikey': 'Bf8JSeycTGOLGojg255rwrHQ0d5ku8y1',
    },
  });

  const to = 'INR';
  const from = 'USD';
  const amount = '10';

  const response = await apiContext.get(`https://api.apilayer.com/exchangerates_data/convert`, {
    params: {
      to,
      from,
      amount,
    },
  });

  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  console.log(data);

  
});

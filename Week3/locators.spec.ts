import test from  '@playwright/test';
test("learn basic element interaction", async({page})=>{

await page.goto ('http://leaftaps.com/opentaps/control/main');
await page.locator('#username').fill('democsr')
await page.locator('#password').fill('crmsfa')
await page.getByRole('button', { name: 'Login' }).click()
await page.waitForTimeout(2000)
await page.getByRole('link', { name: 'CRM/SFA' }).click()
await page.waitForTimeout(3000)
await page.getByRole('link', { name: 'Leads' }).click()
await page.getByRole('link', {name: 'Create Lead'}).click()
await page.waitForLoadState('load')
await page.locator('#createLeadForm_companyName').fill('abc')
await page.locator('#createLeadForm_lastName').fill('xyz')
await page.locator('#createLeadForm_firstName').fill('cdf')
console.log (' sectionHeaderTitle_leads')
await page.waitForTimeout(3000)
await page.locator('.smallSubmit').click();
await page.getByRole('link', {name: 'Edit'}).click()
await page.waitForLoadState('load')
await page.locator('#updateLeadForm_companyName').fill('www')
await page.getByText('Update').click()
})
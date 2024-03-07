import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

//kiwisaver calculator tests

 Given('User navigates to kiwisaver calculator', async function () {
           // Kiwisaver calculator page is opened.
           await fixture.page.goto(process.env.BASEURL);
           fixture.logger.info("Navigated to the KiwiSaver Calculator page")
           //Assert the page is correct
           await expect(fixture.page.locator('h1')).toContainText('Westpac KiwiSaver Scheme Calculator.');
           await fixture.page.getByRole('button', { name: 'Open the calculator' }).click();
         });

 Given('User inputs his age', async function () {
           // Code to select the age of the user.
            await expect(fixture.page.locator('#q-QUESTION_AGE')).toContainText('First of all');
            await fixture.page.getByPlaceholder('Enter here').click();
            await fixture.page.getByPlaceholder('Enter here').fill('41');
            await fixture.page.getByPlaceholder('Enter here').press('Tab');
            await fixture.page.getByRole('button', { name: 'Next Question' }).press('Enter');
         });

Given('User selects the kiwisaver saving for', async function () {
           // Code to select the type of kiwisaver.
           await fixture.page.getByRole('radio', { name: 'Retirement' }).click();
         });

Given('User selects the employee status', async function () {
           // Employee status selection employed/self employed
            await expect(fixture.page.locator('#q-QUESTION_EMPLOYMENT_STATUS')).toContainText('your employment status?');
            await fixture.page.getByLabel('Choose option').click();
            await fixture.page.getByRole('option', { name: 'Self Employed' }).click();
         });

 Given('User provides current kiwisaver balance', async function () {
           // User provides the current kiwisaver balance
            await expect(fixture.page.locator('#q-QUESTION_KIWISAVER_BALANCE')).toContainText('your current KiwiSaver balance?');
            await fixture.page.getByPlaceholder('Enter balance').click();
            await fixture.page.getByPlaceholder('Enter balance').fill('$2000');
            await fixture.page.getByPlaceholder('Enter balance').press('Tab')
            await fixture.page.locator('form').filter({ hasText: 'your current KiwiSaver' }).getByRole('button').press('Enter');
         });


Given('User select the frequency of contributions', async function () {
           // user selects the frequency of contributions
            await expect(fixture.page.locator('#q-QUESTION_VOLUNTARY_CONTRIBUTION_FREQUENCY')).toContainText('Do you make any contributions?');
            await fixture.page.locator('div').filter({ hasText: /^Choose optionChoose option$/ }).getByLabel('Choose option').click();
            await fixture.page.getByRole('option', { name: 'Monthly' }).click();
         });



 Given('User provides the current contributions', async function () {
           // user provides his/her current contributions.
            await expect(fixture.page.locator('#q-QUESTION_VOLUNTARY_CONTRIBUTION_AMOUNT')).toContainText('How much are your monthly contributions?');
            await fixture.page.getByPlaceholder('Enter amount').click();
            await fixture.page.getByPlaceholder('Enter amount').fill('$1000');			
            await fixture.page.locator('form').filter({ hasText: 'How much are your monthly' }).getByRole('button').click();
         });


  Given('User provides the type of fund as {string}', async function (string) {
           // Select the fund type
            await fixture.page.getByLabel('Choose fund').click();
            await fixture.page.getByRole('option', { name: 'Balanced / Default' }).click();
         });

  Then('User should see Your current projection information', async function () {
           // Write code here that turns the phrase above into concrete actions
            await expect(fixture.page.getByTestId('kiwisaver-projections-full-screen-dialog')).toContainText('Your current projection.');
            await fixture.page.waitForTimeout(2000);
            await fixture.page.getByRole('button', { name: 'Exit Calculator' }).click();
            fixture.logger.info("Waiting for 2 seconds")
            //await fixture.page.waitForTimeout(2000);
         });


//Scenario outline
Given('User inputs his age as {int}', async function (age_number) {
           // Write code here that turns the phrase above into concrete actions
       
            await expect(fixture.page.locator('#q-QUESTION_AGE')).toContainText('First of all');
            await fixture.page.getByPlaceholder('Enter here').click();
            age_number = age_number.toString();
            await fixture.page.getByPlaceholder('Enter here').fill(age_number);
            await fixture.page.getByPlaceholder('Enter here').press('Tab');
            await fixture.page.getByRole('button', { name: 'Next Question' }).press('Enter');
         });

Given('User selects the kiwisaver saving for {string}', async function (saving_for) {
           // Write code here that turns the phrase above into concrete actions - Retirement
            await fixture.page.getByRole('radio', { name: saving_for }).click();
         });
  Given('User selects the employee status as {string}', async function (employee_status) {
           // Employee status selection employed/self employed
            await expect(fixture.page.locator('#q-QUESTION_EMPLOYMENT_STATUS')).toContainText('your employment status?');
            await fixture.page.getByLabel('Choose option').click();
            await fixture.page.getByRole('option', { name: employee_status }).click();
         });
 Given('User provides current kiwisaver balance as {int}', async function (K_balance) {
         // User provides the current kiwisaver balance
            await expect(fixture.page.locator('#q-QUESTION_KIWISAVER_BALANCE')).toContainText('your current KiwiSaver balance?');
            await fixture.page.getByPlaceholder('Enter balance').click();
            K_balance = K_balance.toString();
            await fixture.page.getByPlaceholder('Enter balance').fill(K_balance);
            await fixture.page.getByPlaceholder('Enter balance').press('Tab')
            await fixture.page.locator('form').filter({ hasText: 'your current KiwiSaver' }).getByRole('button').press('Enter');
         });

    Given('User select the {string} of contributions', async function (frequency) {
           // user selects the frequency of contributions
            await expect(fixture.page.locator('#q-QUESTION_VOLUNTARY_CONTRIBUTION_FREQUENCY')).toContainText('Do you make any contributions?');
            await fixture.page.locator('div').filter({ hasText: /^Choose optionChoose option$/ }).getByLabel('Choose option').click();
            await fixture.page.getByRole('option', { name: frequency }).click();
          
         });
 Given('User provides the current contributions as {int}', async function (cur_contr) {
          // user provides his/her current contributions.
            await expect(fixture.page.locator('#q-QUESTION_VOLUNTARY_CONTRIBUTION_AMOUNT')).toContainText('How much are your monthly contributions?');
            await fixture.page.getByPlaceholder('Enter amount').click();
            cur_contr = cur_contr.toString();
            await fixture.page.getByPlaceholder('Enter amount').fill(cur_contr);			
            await fixture.page.locator('form').filter({ hasText: 'How much are your monthly' }).getByRole('button').click();
         });
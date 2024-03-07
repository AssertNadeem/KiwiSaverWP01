import { expect, Locator, Page } from '@playwright/test'

import { BasePage } from '../page-objects/BasePage'

export class LandingPage extends BasePage {
  readonly headTitle: Locator //Westpac KiwiSaver Scheme Calculator
  readonly openCalculatorBtn: Role //Button to open the calculator
  readonly headTitle: Locator //Age text
  readonly currentAge: PlaceHolder
  readonly searchbox: Locator
  readonly signInButton: Locator
  readonly usernameDropdown: Locator

  //Initialize all objects
  constructor(page: Page) {
    super(page)
    this.headTitle = page.locator('#tester')
    )
  }

//Write functions to call the objects.
//Example below to call the url

  async visit() {
    await this.page.goto('https://www.westpac.co.nz/kiwisaver-investments/kiwisaver/kiwisaver-calculators/kiwisaver-calculator/')
  }
}
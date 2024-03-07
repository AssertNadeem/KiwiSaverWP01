Feature: Westpac Kiwisaver projection calculator

  Scenario: Kiwisaver calculator for retirement with Balanced fund
    Given User navigates to kiwisaver calculator
    And   User inputs his age
    And   User selects the kiwisaver saving for
    And   User selects the employee status
    And   User provides current kiwisaver balance
    And   User select the frequency of contributions
    And   User provides the current contributions
    And   User provides the type of fund as "Balanced / Default"
    Then  User should see Your current projection information

    @functional
    Scenario Outline: Kiwisaver calculator for retirement with different options
    Given User navigates to kiwisaver calculator
    And   User inputs his age as <age_number>
    And   User selects the kiwisaver saving for '<saving_for>'
    And   User selects the employee status as '<employee_status>'
    And   User provides current kiwisaver balance as <K_balance>
    And   User select the '<frequency>' of contributions
    And   User provides the current contributions as <cur_contr>
    And   User provides the type of fund as '<Balanced / Default>'
    Then  User should see Your current projection information

    Examples:
    | age_number | saving_for | employee_status | K_balance | frequency | cur_contr |
    | 30 | Retirement  | Self Employe   | 2500 | Monthly | 1000 |
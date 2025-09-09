### Playwright Automation for BookHotel

This project contains Playwright tests designed to automate and verify UI elements on the BookHotel application.

#### **Key Features**

  * **Technology Stack:** The tests are built using **Playwright** with **TypeScript** and **Cucumber** for a clear and readable BDD (Behavior-Driven Development) format.
  * **Headless Mode:** The tests run in headless mode by default, which is ideal for CI/CD environments.

### **Test Scenarios**

A key objective of this test suite is to verify the presence or absence of specific room amenities without requiring administrative access or modifying backend data.

A specific test case—to confirm a TV icon is not visible for rooms without a TV—is currently incomplete. This is due to a technical limitation: there is no way to programmatically identify a "non-TV" room from the front end without either admin credentials or a direct change to the backend data, which is outside the scope of this project.

The current test suite is strictly scoped to the scenarios mentioned in the feature files. Additional scenarios have been deliberately excluded to maintain focus.

-----

### **How to Run**

To execute the tests locally, simply run the following command:

```bash
npm test
```

This will run the two scenarios included in the feature file.

### **CI/CD**

This project is configured to run tests automatically on Git using GitHub Actions. Refer to the repository documentation for more details on the continuous integration workflow.
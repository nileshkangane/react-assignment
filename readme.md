# Required functionality

- This is a simple benefit selection application

- The UI is currently hardcoded, you need to use the data in benefits.json to render the list of benefit packages (Basic, Additional ...), their respective categories (Health, Travel, ...) and the respective benefits (Actual, Accrued...) under each category.

- Review selection button will be disabled to begin with unless the user selects at least one package by checking 'include' and at least one benefit for any category in that package.

- Upon clicking Review selection, route should change to '/review'. Note that you need to add react-router dependency for the same and configure routes.

- On the Review page, user should see their selections that they did on the selection page. (Review page is also currently hardcoded and will need to render info as selected)

- Back button on review should bring user back to selection page

- Note: In App.js, BenefitReview component is included but commented out. Uncomment the same to see the UI required.

# Instructions

- Do not modify benefits.json
- For your benefit, almost all of the CSS work is already done.
- You can use Google and/or any other dependency as you please.
- Redux/hooks is optional but nice to have
- Do not share this exercise with anyone or do pair programming. This is an assessment only for you.
- Good luck!

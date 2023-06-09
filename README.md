# Age Calculation

This script handles date input validation and calculates the difference between the input date and the current date. It includes functions for input validation, date difference calculation, and event handling.

## Functions

- `yearValidate(y)`: This function validates the input year (y) and returns true if it is valid or false otherwise. It compares the input year with the current year and checks for invalid values such as negative numbers or values greater than the current year. It also handles the error styling and display of error messages for the year input.

- `dayValidate(d, m)`: This function validates the input day (d) and month (m) and returns true if they are valid or false otherwise. It checks if the day is within the valid range for the given month, considering the maximum days for each month. It also handles the error styling and display of error messages for the day input.

- `monthValidate(m)`: This function validates the input month (m) and returns true if it is valid or false otherwise. It checks if the month is within the valid range (between 1 and 12). It also handles the error styling and display of error messages for the month input.

- `dateHandler(d, m, y)`: This function is called when the submit button is clicked. It takes the input values for day (d), month (m), and year (y). It calls the validation functions (yearValidate, dayValidate, and monthValidate) to validate the inputs. If all inputs are valid, it calculates the date difference between the input date and the current date using the dateDiff function (which is adapted from an external source). Finally, it updates the display elements with the calculated years, months, and days difference.

## Screenshots

![final](https://github.com/kiraiSky/ageCalculator/assets/84739839/b7932a63-96d3-4c6a-9589-63e233846e4e)
_This screenshot shows the input fields for day, month, and year, along with error messages for invalid inputs._

![final iphone](https://github.com/kiraiSky/ageCalculator/assets/84739839/564ded28-27a0-47e3-969a-e36d10d56d84)
_After clicking the "Purple" button, the script calculates the date difference and updates the display elements with the calculated values._

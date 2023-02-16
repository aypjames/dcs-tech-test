# DCS Employee Register - Tech Test

An employee register for the Department of Customer Service (DCS). This full-stack web application was built using React Typescript (frontend) and Java Spring (backend) and MySQL(database). BEM methodology was used for SaSS styling, which also made reference to the Digital.NSW website (did you notice the favicon and the color variables?).

## ScreenShots

![Screenshot of Employee Lists Page](./dcs-employees/src/assets/READMEImages/app_screenshot_1.png)
![Screenshot of Edit/Create Form](./dcs-employees/src/assets/READMEImages/app_screenshot_2.png)

## MVP

Create an employee register that allows a user to:

- [x] Create an employee
- [x] Get a list of existing employees that have been generated
- [x] Update the details of an employee
- [x] Delete an employee

## Features

- The styling makes references to Digital.NSW website
- Before you delete a file, a prompt confirmation is provided to allow for user to cancel the execution (in case of accidental click)
- The page is reponsive
- Uses React-Router for routing, React-Hook-Form for form validation.
- Redirects to default route "/employees" if route does not match.
- User Experience have been considered in the development of the form component. The date inputs have been consolidated into a single date input (less inputs for the user to complete), and the "on-going" checkbox input toggles between displaying or hidding the end-date input (so as to create less confusion for the user on input requirements).

## Challenges

- It definitely was a challenge to complete a full-stack app using in such a short-frame, however it has been a rewarding experience to see how much I could pick up (typescript in react, new react libraries, tryingt to implement testing) and what I could create in that time.
- I was struggling with the implementation of tests - This is still a work in progress!

## Things to Improve

- Input for dates could be separated as per the MVP. Three separate inputs (number, option, number), gather values as dd-mm-yyyy and use the setValue for endDate to return the value to the backend.
- Could use google maps api to suggest address for the street address input.
- More validation can be completed, example, checking if end date < start date or any other business specific requirements.

## Reflection/Learning

- I have so much more appreciation for React in Javascript, but can appreciate the benefits of picking up bugs and errors early in using React Typescript.
- I had found Java to be challenging, so this was a very good practice to reaffirm my understanding. Definitely plenty to still learn, but I am feeling more confident about my next run at this.
- Picked up React-Hook-Form, but couldn't figure out React-Query - will probably have a crack at this again for another project.
- It was fun to look under the hood of the NSW.digital website and recreate styling varibales.

## Pointers on compiling and running the app

Start by cloning the repo to your local device

### For Front End

Once your have cd into the "dsc-employees" folder in your terminal, make sure to install the dependencies

```
npm install
```

Note that the homepage endpoint is '/employess'
e.g 'http://localhost:5173/employees'

### For Backend - Eclipise

Within the "application.properties" file, ensure you have the following (replace the values within "<>"):

```
spring.datasource.url=jdbc:mysql://localhost:3306/<YOUR_MYSQL_DB_NAME>
spring.datasource.username=root
spring.datasource.password=<YOUR_PASSWORD_OR_REMOVE_IF_NO_PASSWORD>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.generate-ddl=true
```

### For DB - MySqlWorkbech

- Make sure to to have the name match the file name in the "application.properties"

```
Create DATABASE <db_cd name>
```

## Useful Resources

- [React + Fetch: GET, POST, PUT, DELETE](https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples)
- [Passing Object as props to a component in React Typescript](https://bobbyhadz.com/blog/react-typescript-pass-object-as-props)
- [React-Hook-Form - Form validation](https://react-hook-form.com/get-started/)
- [React-Router](https://reactrouter.com/en/main/start/tutorial)
- [React Typescript Cheatsheet](https://react-hook-form.com/get-started/)
- [Spring Initializr](https://start.spring.io/)
- [Logging in Spring Boot](https://www.baeldung.com/spring-boot-logging)

---

### Reachout

- [LinkedIn](https://au.linkedin.com/in/ayushjames)
- [Email](mailto:ayushpjames@gmail.com)
- [Portfolio]()

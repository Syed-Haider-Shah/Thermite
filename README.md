# Welcome to Thermite

## Introduction

Thermite is a ticketing system inspired by my experience using the various ticketing systems in the water company I worked for before graduating. After graduation I wanted to start a professional project, so I choose to create something similar to the ticketing systems I'm used to working with. Since, I have been a user for those ticketing system I am able to provide detailed requirements/user stories for the project. Thermite combines the best features of existing ticketing systems and adds some unique functionalities to make it more user-friendly.

Thermite is a collaborative project between me and my friend Ali Aizaz. We challenged each other to improve our skills while working remotely across different time zones. This taught us how to collaborate effectively online. This was the project we used to test the extent of our knowledge and go beyond.

## Technologies Used

### Development Tools

Nextjs |
Typescript |
Tailwind CSS |
Node |
Supabase |
PostgreSQL |
Vercel

Compared to my last project Renopilots I have used different technologies. I used Nextjs instead of Reactjs because Nextjs is better at SEO, typescript is used instead of javascript because keeping type safe language helps avoid bugs in the future plus I am a big fan of C++. For backend, I chose Supabase with PostgreSQL over express and MongoDB, because it offers more features and functionality. Finally, the website is deployed on Vercel, I have made a docker image but I cannot afford to run it on AWS or Azure for now.

### Collaboration Tools

Google meets |
Jira |
Github |
Discord

Google meets was used to have meetings to deliberate ideas and fix bugs, it was very convenient to use Google meets as we were able to share our screens and show are ideas more accurately. Jira was used to keep track of tasks and to assign tasks.

## Technical Features

### User Types

Thermite is mainly a ticketing system that consist of tickets which represents the work that needs to be done. So each ticket represents a task that needs to be completed by a employee. Naturally there are 2 main types of users `Site Supervisor`, who assigns tickets and `Site Technician` who has to address or close these tickets, and an `Admin` who is responsible for managing the ticketing system itself. All of these user types have different views, different permissions and different features.

#### Permissions

- All user are able to change status of the tickets they are able to view.

- Only `Site Supervise` and `Admin` are able to see all the tickets available, while the `Site Technician` is only able to see the tickets that are assigned to them.

- Only `Admin` can create new Employee accounts and delete them.

### Tickets

The abstract design of tickets is shown below, a more detailed picture of database schema is

![Image1](./image1.png)

#### Customers

`Customer` represents all the customers for the company each having their unique `Customer ID`, this is a static table which is almost never supposed to be modified. It has record and details of all the Customers.

#### Parent Ticket

If one the customer is have trouble with their device, a `Parent Ticket` for that customer is opened to represent that some work needs to be done to their device. A new `Parent Ticket` is opened with a unique `Parent ID` and a foreign key linking it to the `Customer` with `Customer ID`.

#### Child Ticket

Each `Child Ticket` represents a specific task that needs to be completed by a `Site Technician`(Eg. Filters need to be changed or Primary motor needs to be fixed etc.). Multiple `Child Tickets` are linked to a single `Parent Ticket` by its `Parent ID`.

In summary, `Child Tickets` are all the tasks that needs to be done, while `Parent Ticket` and `Customer` are the details of where and for whom the task need to be completed.

### Database

The database at the Back-end is a PostgreSQL database which runs on Supabase, it has 5 tables `Customers`, `Parent Ticket` and `Child Ticket` tables which have been explained before, additionally, `Employees` and `Water Sample` tables, former stores the data regarding the employees and latter stores the details provided in a water sample form.

A schema is displayed below

![Schema](./Schema.png)

### How does Status work?

`Child Ticket` has 2 status `OPEN` and `CLOSED`, while `Parent Ticket` has 4 status `OPEN`, `PARTS`, `BUSINESS-DECISION`,`WATER-SAMPLE` and `CLOSED`.

By default, a newly opened `Child` or `Parent Ticket` will have `OPEN` status. As the `Site Technician` starts to complete tasks on the `Child Ticket`, he can change the `Child Ticket` status to `CLOSED` and once he turned all the `Child Ticket` status to `CLOSED` he can proceed to close the `Parent Ticket`. Ideally, the `Site Technician` has to change all the `Child Ticket` status to `CLOSED` before he closes the `Parent Ticket`, but sometimes this is not possible. So, in times where he is not able to close all `Child Tickets` of a particular `Parent Ticket` then the `OPEN` `CHILD TICKET` will decouple from that parent and will link to a newly created `Parent Ticket`. Visual Representation is shown below:

![Image2](./image2.png)

- In the image above, Child 1 and Child 2 closed while Child 3 remained open. So, when the Parent 1 closed, Child 3 no longer remained linked Parent 1, instead it links to a newly created Parent, Parent 2. In the end, Parent 1 is packaged with it's 2 closed child, while the Child 3 shows up again in the ticket list as an incomplete task.

When closing the `Parent Ticket` the status cannot be directly changed to `CLOSED` instead the status will change from `OPEN` to `WATER-SAMPLE`. In order to escalate the status to `CLOSED` the `Site Technician` must submit the `Water Sample` form related to this ticket. They can click on `WATER-SAMPLE` status to get redirected to `Water sample` form or visit the form using the navbar. Once the `Water Sample` form has been completed the `Parent Ticket` associated with that `Water Sample` form will change it's status from `WATER-SAMPLE` to `CLOSED`. This ensures that no `Parent Ticket` can be closed without the submission of `Water Sample`.

The final two status for the `Parent Ticket`, `PARTS` and `BUSINESS-DECISION` are flags. `PARTS` indicate that `Site Technician` wasn't able to complete the task or close the ticket because they did not have adequate parts on them. `BUSINESS-DECISION` indicate that `Site Technician` was unable to visit the site because of a permanent external interference, such as the house has been burnt down or the owners of the house refused the service work.

# Getting Started

Visit [Thermite](https://thermite.com.au/)

You can sign in as a `Site Supervisor` having access to all tickets or `Site Technician`.

`Site Supervisor` credentials :
<Credentials>

`Site Technician` credentials :
<Credentials>

Have any questions? Email me at haidershah123123@gmail.com

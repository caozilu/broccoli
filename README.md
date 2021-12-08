# A simple full-stack web application for Broccoli & Co.

This project features a wide range of web techologies including but not limited to:

#### Front end

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)

#### Back end

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

#### Cloud

- [AWS](https://aws.amazon.com/)

#### Testing

- [Jest](https://jestjs.io/)
- [Jasmine](https://jasmine.github.io/)

## Preview

Preview the web app live on a [PC or Mac](http://ec2-3-26-215-171.ap-southeast-2.compute.amazonaws.com/), or on Mobile:

![scan qrcode to preview](/public/qrcode.png "qrcode")

## Run locally

1. Clone the repo from GitHub
2. Front end:
   - Install dependencies by running `npm install` in the root directory
   - Run `npm run test` to run tests
   - If all test cases in the `__tests__` directory passed, run `npm run export` to build the front end into static assets and output to the `server/src/_static` directory
3. Back end:
   - Install dependencies by running `npm install` in the `server` directory
   - Run `npm start` to start the server
   - Run `npm run test` to run tests and expect no failures occurred
4. Database:
   - Install MongoDB by following the [MongoDB installation guide](https://docs.mongodb.com/manual/administration/install-community/)
   - In MongoDB Compass, create a database `broccoli` and add its first collection `requests`: [How to create a database in MongoDB Compass](https://docs.mongodb.com/compass/master/databases/)
5. Access the site with `localhost:8000` in the browser

## Deployment

This app has been deployed to AWS EC2 instances with a Free Tier account.

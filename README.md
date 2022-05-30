# MyBuy-API

## Description
MyBuy-API is an express.js server app using Node.js that provides RESTful API routes to create categories, products, and product tags.

## Installation
Clone this repository down to your device. Ensure Node.js is installed on your device, then type `npm install` in the command line to download dependencies for this app. Set up a .env file in the root of the app with the details below to sync with your local DB.
```
DB_NAME='ecommerce_db'
DB_USER='<YOUR MySQL USERNAME HERE>'
DB_PW='<YOUR MySQL PASSWORD HERE>'
```
Also run `npm run seed` in the command line to seed the database with sample data if you'd like to.

## Usage
See this [example video](https://drive.google.com/file/d/1NDYd2ZCcpQ2-teO2eXa96KSQHxl_SnvG/view) for an example of usage.

Type `node server.js` in a terminal opened in the root directory of the app to run it. Use a web browser to make GET HTTP requests and get JSON data back, or use an application like Insomnia or Postman to perform CRUD operations with GET, POST, PUT and DELETE methods. The examples below show the JSON body properties for the POST (create), PUT (update), and DELETE API routes.

### Categories
```
{
	"category_name": "Office"
}
```

### Products
```
{
	"product_name": "Fountain Pen",
	"price": 10.00,
	"stock": 30,
	"category_id": 6,
	"tagIds": [3, 7]
}
```

### Tags
```
{
	"tag_name": "writing utensils"
}
```

## Questions
Check out my [Github](https://github.com/agoetz4407)

Send me an email with your questions at [agoetz4407@gmail.com](mailto:agoetz4407@gmail.com)
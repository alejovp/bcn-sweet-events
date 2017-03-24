# BCN Sweet Events (e-commerce project)

[![Skylab](public/img/tech-logos/skylab-56.png)](http://www.skylabcoders.com/)
  
[![Angular](public/img/tech-logos/angularjs-icon.png)]()
[![mongoDB](public/img/tech-logos/techmongoDB.png)]()
[![nodeJS](public/img/tech-logos/nodejs-black.png)]()
[![expressJS](public/img/tech-logos/express_js.png)]()
[![pug](public/img/tech-logos/pug.png)]()
[![html css](public/img/tech-logos/html-css.png)]()
[![JS](public/img/tech-logos/js.png)]()
[![sass](public/img/tech-logos/sass.png)]()


---
## Description 

This is a Full Stack (MEAN) project created with the online shop concept in mind and the client requirements to showcase their products.

It's composed by two parts: one is the online shop where the customers can look, contact or buy (place an order) the different available products and the other it's an administration interface where the site owners can check and manage their products and orders. 

>The project is still in progress and it was created at first as a final educational project for the coding bootcamp Skylab Coders.


This is a direct link to the project: https://bcn-sweet-events.herokuapp.com

## Project Parts

**Online Cakes Shop** first rendered using pug (jade) and expressJS on the server and then send it to the client: 
+ Landing page.
+ Products listing from the mongo database.
+ Shopping cart using session and cookie.
+ Save data from the shopping cart with the user info into the mongo database.
+ Contact form.

**Admin app Interface (/admin)** created as a SPA with angularJS (v1.6.3):
+ Private access with Passport (Local) & JWT.
+ Dashboard displaying the data available in the database (products, orders, users).
+ Products sections listing all the products showcased in the site and the option to remove or add new ones.
+ Orders sections listing all the pending/completed orders and the option to mark them as completed.


**REST API** that interact with the MongoDb collections to perform actions and send JSON's to the admin app:
+ `GET` `/admin/products` → get all the products from the DB.
+ `POST` `/admin/products` → add a new product in the DB.
+ `DELETE` `/admin/products/:id` → remove an specific product from DB.
+ `GET` `/admin/orders` → get all the orders from the DB.
+ `PUT` `/admin/orders/:id` → edit or update an specific order in the DB.
+ `POST` `/admin/upload` → upload and image in "cloudinary" and get the URL.

---
## Installation 

In order to run this app in your local server first you will need to create a `.env` file w/ the following variables:

URL mongDB:

    DB_URI=mongodb://localhost:27017/XXXXX

Node Mailer configuration (server gmail account):

    EMAILER=XXXXXXXXX@gmail.com
    EMAIL_PASS=XXXXXXXX

Secret word for the session and JWT encryption:

    SECRET=XXXXXXXXXXXXXXXXXX

Your prefered port:

    PORT=XXXX

Cloudinary account configuration (register in https://cloudinary.com):

    CLOUD_NAME=XXXXXXX
    API_KEY=XXXXXXXXXXX
    API_SECRET=XXXXXXXXXXXXX
    UPLOAD_FOLDER=upload

Finally, you will need to do this inside the project directory in your terminal (this will install all the dependencies and initialize the app):

    npm start 

  
On the other hand, if you want to run this app remotely (in heroku) the proper environment variables should be set before deploying:

    heroku config:set EMAILER=XXXXXXXXX@gmail.com
    heroku config:set EMAIL_PASS=XXXXXXXX
    heroku config:set DB_URI=mongodb://<%USER%>:<%PASS%>@XXXXXXXXX.mlab.com:00000/xxxxxxxxxxx
    heroku config:set ENVIRONMENT=production
    heroku config:set SECRET=XXXXXXXXXXXXXXX
    heroku config:set CLOUD_NAME=XXXXXXX
    heroku config:set API_KEY=XXXXXXXXXXX
    heroku config:set API_SECRET=XXXXXXXXXXXXXXXXXX
    heroku config:set UPLOAD_FOLDER=upload

---
## Coding Style

All the code has been developed under the [JavaScript Standard Style](http://standardjs.com/)

## Built With

* [SublimeText](http://https://https:/npmdejs.org/www.sublimetext.com) - Text editor

## Authors

* [Alejandro Vázquez Pérez](http://github.com/alejovp) 

## Acknowledgments

* [SkylabCoders](https://github.com/SkylabCoders)
* [JuanMa Garrido](https://github.com/juanmaguitar)
* [AlejandroDG](https://github.com/agandia9)

And my mates from Skylab Coders Academy
* [Franscico López](https://github.com/FransLopez)
* [Stívali Serna](https://github.com/stivaliserna)
* [Josep Otal](https://github.com/josepotal)
* [Xavier Meroño](https://github.com/xmero)
* [Ernesto](https://github.com/ERPG)
* [Ignasi Amargós](https://github.com/Iggy-Codes)
* [Carles](https://github.com/LITULANDIO)
* [Jonas Rondon](https://github.com/JonasRodon)
* [Ezequiel Gómez](https://github.com/EzequielGomezCucchiararo)
* [Oscar Viciana](https://github.com/oviciana)
* [Bijay Timilsina](https://github.com/bijay007)



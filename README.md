1. Please keep in mind that backend run on 3000 port and front-end on 4200 port. If they are not free, program will not work without aditional modification.
2. This program will user a local mysql-server to keep data and typeorm is ORM used for interaction between typescript and mysql db.
3.  Open terminal and cd to backend dir.
4. run command npm install
5. run npm run start:dev
6. Open another terminal
7. Run next commands if you use  windows. On mac commands will be different. Will create a local mysql-server to keep data here :
   
7.1 sudo apt install mysql-server
7.2 sudo service mysql start
7.3 sudo mysql -u root
7.4 CREATE DATABASE eportfolio;
7.5 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'randomrootpassword';
7.6 GRANT ALL PRIVILEGES ON eportfolio.* TO 'root'@'localhost';
7.7 FLUSH PRIVILEGES;
7.8 EXIT;
7.9 mysql -u root -p     - si foloseste parola randomrootpassword
7.10 USE eportfolio;
7.11 SHOW TABLES;
7.12 SELECT * FROM product;

8. Open another terminal  and go to frontend dir.
9. run command npm install
10. run command npm run start
1. You now have first terminal who run backend, second who  is db interogation with  SELECT * FROM product; command and last termina who run frontend

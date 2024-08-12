1. Please keep in mind that backend run on 3000 port and front-end on 4200 port. If they are not free, program will not work without aditional modification.
2. This program will user a local mysql-server to keep data and typeorm is ORM used for interaction between typescript and mysql db.
3.  Open terminal and cd to backend dir.
4. run command npm install
5. run npm run start:dev
6. Open another terminal
7. Run next commands if you use  windows. On mac commands will be different. Will create a local mysql-server to keep data here :
   
sudo apt install mysql-server
sudo service mysql start
sudo mysql -u root
CREATE DATABASE eportfolio;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'randomrootpassword';
GRANT ALL PRIVILEGES ON eportfolio.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
EXIT;
mysql -u root -p     - si foloseste parola randomrootpassword
USE eportfolio;
SHOW TABLES;
SELECT * FROM product;

6. Open another terminal  and go to frontend dir.
7. run command npm install
8. run command npm run start
9. You now have first terminal who run backend, second who  is db interogation with  SELECT * FROM product; command and last termina who run frontend

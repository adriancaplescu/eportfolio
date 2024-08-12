1. Please keep in mind that backend run on 3000 port and front-end on 4200 port. If they are not free, program will not work without aditional modification.
2. This program will user a local mysql-server to keep data and typeorm is ORM used for interaction between typescript and mysql db.
3.  Open terminal and cd to backend dir.
4. run command npm install
5. run npm run start:dev
6. Open another terminal
7. Run next commands if you use  windows. On mac commands will be different. Will create a local mysql-server to keep data here :
   
8. sudo apt install mysql-server
9. sudo service mysql start
10. sudo mysql -u root
11. CREATE DATABASE eportfolio;
12. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'randomrootpassword';
13. GRANT ALL PRIVILEGES ON eportfolio.* TO 'root'@'localhost';
14. FLUSH PRIVILEGES;
15. EXIT;
16. mysql -u root -p     - si foloseste parola randomrootpassword
17. USE eportfolio;
18. SHOW TABLES;
19. SELECT * FROM product;

8. Open another terminal  and go to frontend dir.
9. run command npm install
10. run command npm run start
1. You now have first terminal who run backend, second who  is db interogation with  SELECT * FROM product; command and last termina who run frontend

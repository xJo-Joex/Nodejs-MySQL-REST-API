CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
 id INT(11) not null auto_increment,
 name varchar(45) default null,
 salary int(5) default null,
 primary key(id)
)

DESCRIBE employee;


INSERT INTO employee values
(1, 'Joe', 1000),
(2, 'Patricio', 3000),
(3, 'Juan', 4000),
(4, 'Ana', 2000);

delete from employee;
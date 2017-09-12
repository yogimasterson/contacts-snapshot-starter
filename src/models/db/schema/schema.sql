DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id serial,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  role varchar(255) DEFAULT 'regular'
)
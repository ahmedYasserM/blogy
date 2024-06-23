DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts cascade;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS verification_token;
DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS users cascade;

CREATE TABLE verification_token
(
  identifier TEXT NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL,
 
  PRIMARY KEY (identifier, token)
);
 
CREATE TABLE accounts
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  "providerAccountId" VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  id_token TEXT,
  scope TEXT,
  session_state TEXT,
  token_type TEXT,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE sessions
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  "sessionToken" VARCHAR(255) NOT NULL,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE users
(
  id BIGSERIAL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  "emailVerified" TIMESTAMPTZ,
  image TEXT,
 
  PRIMARY KEY (id)
);

  
CREATE TABLE categories (
  _id VARCHAR(250) PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  color TEXT NOT NULL,
  img VARCHAR(255)
);

CREATE TABLE posts (
  _id BIGSERIAL PRIMARY KEY DEFAULT gen_random_uuid(),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  descr TEXT NOT NULL,
  img VARCHAR(255),
  views INT DEFAULT 0,
  catSlug VARCHAR(255) NOT NULL,
  userEmail VARCHAR(255) NOT NULL,
  FOREIGN KEY (catSlug) REFERENCES categories(slug),
  FOREIGN KEY (userEmail) REFERENCES users(email)
);

CREATE TABLE comments (
  _id VARCHAR(255) PRIMARY KEY DEFAULT gen_random_uuid(),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  descr TEXT NOT NULL,
  userEmail VARCHAR(255) NOT NULL,
  postSlug VARCHAR(255) NOT NULL,
  FOREIGN KEY (userEmail) REFERENCES users(email),
  FOREIGN KEY (postSlug) REFERENCES posts(slug)
);


-- Insert Data

INSERT INTO categories (slug, title, color, img) VALUES ('style', 'Style', '#CEDFE7', '/style.png');
INSERT INTO categories (slug, title, color, img) VALUES ('fashion', 'Fashion', '#E7D3DE', '/fashion.png');
INSERT INTO categories (slug, title, color, img) VALUES ('food', 'Food', '#e0ebca', '/food.png');
INSERT INTO categories (slug, title, color, img) VALUES ('travel', 'Travel', '#E7CFC6', '/travel.png');
INSERT INTO categories (slug, title, color, img) VALUES ('culture', 'Culture', '#f2e0c9', '/culture.png');
INSERT INTO categories (slug, title, color, img) VALUES ('coding', 'Coding', '#CECBE7', '/coding.png');

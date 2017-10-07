DROP DATABASE IF EXISTS games_db;
CREATE DATABASE games_db;
USE games_db;

CREATE TABLE games(
    `id` INT AUTO_INCREMENT NOT NULL,
    `title` VARCHAR(225) NOT NULL,
    `raiting` VARCHAR(5),
    `release_date` DATETIME,
    PRIMARY KEY (`id`)
);

INSERT INTO games (`title`, `raiting`, `release_date`)
VALUES ("Destiny", "T", '2014-9-9 00:00:00'), ("The Legend of Zelda: Breath of the Wild", "E-10", '2017-3-3 00:00:00'),
        ("Wolfenstein", "M", '2009-08-18 00:00:00');

SELECT * FROM games;

CREATE TABLE users(
    `id` INT AUTO_INCREMENT NOT NULL,
    `email` VARCHAR(225) NOT NULL,
    `password` VARCHAR(32),
    `birth` DATE,
    `email_auth` BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (`id`)
);

INSERT INTO users (`email`, `birth`, `email_auth`)
VALUES ("timmy@gmail", '2000-01-01', 0), ("jimmy@hotmail", '2010-01-01', 1), ("johnny@aol", '1985-01-01', 1), ("bobby@aol", '1975-01-01', 0);


-- SELECT * FROM `users` WHERE DATEDIFF(NOW(), users.birth) / 365.25 > 20; 

-- CREATE TABLE users_to_raitings(
--     `id` INT AUTO_INCREMENT NOT NULL,
--     `users.id` INT NOT NULL,
--     `titles.id` INT NOT NULL,
--     `raiting` VARCHAR,
--     PRIMARY KEY (`id`)
-- );
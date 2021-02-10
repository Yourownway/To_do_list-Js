CREATE DATABASE IF NOT EXISTS to_do_list;
USE to_do_list;
CREATE TABLE Users
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(100),
    userEmail VARCHAR(255),
    userPassword VARCHAR(100)
);



CREATE TABLE Lists
(
    idList INT PRIMARY KEY AUTO_INCREMENT,
    listName VARCHAR(100),
    idUser INT,
    FOREIGN KEY (idUser) REFERENCES Users(id) 
    ON DELETE CASCADE
);
CREATE TABLE Tasks
(
    idTask INT PRIMARY KEY AUTO_INCREMENT,
    taskName VARCHAR(100),
    idList INT,
    FOREIGN KEY (idList) REFERENCES Lists(idList)
    ON DELETE CASCADE
);

INSERT INTO Users (`id`, `userName`, `userEmail`, `userPassword`) VALUES 
(1,'Lorris','Lorris@gmail.com','azerty'),
(2,'John','John@gmail.com','azerty');


INSERT INTO Lists (`idList`, `ListName`, `idUser`) VALUES 
(10,'Projet TodoList', 1),
(20,'Projet Portfolio',2);


INSERT INTO Tasks (`idTask`, `taskName`, `idList`) VALUES 
(100,'Mettre en place la db', 10),
(101,'Mettre en place l authentification', 10),
(102,'Mettre en place les requettes', 10);
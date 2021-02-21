CREATE DATABASE IF NOT EXISTS to_do_list;
USE to_do_list;
CREATE TABLE Users
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
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
CREATE TABLE Columns
(
    idColumn INT PRIMARY KEY AUTO_INCREMENT,
    columnName VARCHAR(100),
    idList INT,
    FOREIGN KEY (idList) REFERENCES Lists(idList)
    ON DELETE CASCADE
);
CREATE TABLE Tasks
(
    idTask INT PRIMARY KEY AUTO_INCREMENT,
    taskName VARCHAR(100),
    idColumn INT,
    idList INT,
    FOREIGN KEY (idColumn) REFERENCES Columns(idColumn),
    FOREIGN KEY (idList) REFERENCES Lists(idList)
);

INSERT INTO Users (`id`, `userName`, `userEmail`, `userPassword`) VALUES 
(1,'Lorris','Lorris@gmail.fr','azerty'),
(2,'John','John@gmail.com','azerty');


INSERT INTO Lists (`idList`, `ListName`, `idUser`) VALUES 
(1,'Projet TodoList', 1),
(2,'Projet Portfolio',1);

INSERT INTO Columns (`idColumn`,`columnName`, `idList`) VALUES 
(1,'ToDo', 1),
(2,'Doing', 1),
(3,'Done', 1);
INSERT INTO Tasks (`idTask`,`taskName`, `idColumn`,`idList`) VALUES 
(100,'Mettre en place la db', 1,1),
(101,'Mettre en place l authentification', 2,1),
(102,'Mettre en place les requettes', 3,1);





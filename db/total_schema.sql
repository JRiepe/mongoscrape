CREATE DATABASE IF NOT EXISTS icontrol_db;

USE icontrol_db;

CREATE TABLE IF NOT EXISTS tblUsers(
  userId INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE,  
  password VARCHAR(100)
);


INSERT INTO tblUsers (username, password) VALUES ("john", 1234);
INSERT INTO tblUsers (username, password) VALUES ("sheli", 1234);
INSERT INTO tblUsers (username, password) VALUES ("susan", 1234);
INSERT INTO tblUsers (username, password) VALUES ("james", 1234);

CREATE TABLE IF NOT EXISTS inventory(
    id int NOT NULL AUTO_INCREMENT,
    userId integer(10) NOT NULL,
    invName varchar(25) NOT NULL,
    invDesc varchar(50) NOT NULL,
    invGroup varchar(30) NOT NULL,
    invWSP decimal(6,2) NOT NULL,
    invRTP decimal(6,2) NOT NULL,
    invStock integer(10) NOT NULL,
    invMRP integer(10) NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (3, "3 in 1 Cleanser", "Cleanser", "Skin Care", 7.00, 14.00, 6, 3);
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (3, "Combo Skin Toner", "Toner", "Skin Care", 7.00, 14.00, 7, 3);
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (3, "Combo Moisturizer", "Hydrate", "Skin Care", 8.00, 16.00, 6, 3);



INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (2, "1920 purse", "flapper purse", "Accessories", 25.00, 30.00, 1, 0);
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (2, "1950 necklace", "pearl necklace", "Accessories", 120.00, 180.00, 1, 0); 
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (2, "1968 jeans", "Woodstock jeans", "Clothing", 20.00, 60.00, 1, 0); 
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (2, "1977 pant", "Bellbottom pants", "Clothing", 20.00, 30.00, 1, 0); 


INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (1, "Personal Pan Pizza", "8in. pizza", "Pan", 2.95, 5.00, 3, 2);
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (1, "Small Handtossed Pizza", "10in. pizza", "Handtossed", 5.95, 8.00, 5, 2);
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (1, "Medium Handtossed Pizza", "10in. pizza", "Handtossed", 7.95, 11.00, 5, 2);
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (1, "Large Handtossed Pizza", "10in. pizza", "Handtossed", 9.95, 15.00, 10, 2);



INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (4, "Aviator Sunglasses", "UVA UVB Sunglasses", "RayBan", 82.95, 350.00, 5, 2);
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (4, "Canteen", "Polarized", "Oakley", 56.95, 190.00, 6, 2);
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (4, "PR27NS", "Round Lenses", "Prada", 210.95, 355.00, 8, 2);
INSERT INTO inventory (userId, invName, invDesc, invGroup, InvWSP, invRTP, invStock, invMRP) VALUES (4, "Banyans", "Rimless", "Maui Jim", 100.00, 219.95, 15, 2);
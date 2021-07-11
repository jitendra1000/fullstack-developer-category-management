DELETE FROM app_category;
-- Categories
INSERT INTO app_category (id, name, parentid) values (1, 'Women', null);
INSERT INTO app_category (id, name, parentid) values (2, 'Men', null);

-- Subcategories for 'Women'
INSERT INTO app_category (id, name, parentid) values (3, 'Clothing', 1);
INSERT INTO app_category (id, name, parentid) values (4, 'T-Shirts', 1);

-- Subcategories for 'Men'
INSERT INTO app_category (id, name, parentid) values (5, 'Footwear', 2);
INSERT INTO app_category (id, name, parentid) values (6, 'T-Shirts', 2);
INSERT INTO app_category (id, name, parentid) values (7, 'Shirts', 2);


-- Subcategories for 'Clothing'
INSERT INTO app_category (id, name, parentid) values (8, 'Dress', 3);

-- Subcategories for 'Dress'
INSERT INTO app_category (id, name, parentid) values (9, 'Causal Dresses', 8);
INSERT INTO app_category (id, name, parentid) values (10, 'Party Dresses', 8);


-- Subcategories for 'T-Shirts'
INSERT INTO app_category (id, name, parentid) values (11, 'Printed T-shirts', 4);
INSERT INTO app_category (id, name, parentid) values (12, 'Causal T-Shirts', 4);
INSERT INTO app_category (id, name, parentid) values (13, 'Plain T-Shirts', 4);


-- Subcategories for 'Footwear'
INSERT INTO app_category (id, name, parentid) values (14, 'Branded', 5);
INSERT INTO app_category (id, name, parentid) values (15, 'Non Branded', 5);

-- Subcategories for 'T-Shirts'
INSERT INTO app_category (id, name, parentid) values (16, 'Printed T-shirts', 6);
INSERT INTO app_category (id, name, parentid) values (17, 'Causal T-Shirts', 6);
INSERT INTO app_category (id, name, parentid) values (18, 'Plain T-Shirts', 6);


-- Subcategories for 'Shirts'
INSERT INTO app_category (id, name, parentid) values (19, 'Party Shirts', 7);
INSERT INTO app_category (id, name, parentid) values (20, 'Causal Shirts', 7);
INSERT INTO app_category (id, name, parentid) values (21, 'Plain Shirts', 7);










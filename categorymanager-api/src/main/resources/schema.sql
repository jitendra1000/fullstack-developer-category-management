DROP TABLE IF EXISTS app_category;

CREATE TABLE `app_category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(80) NOT NULL,
   `parentid` BIGINT(20)  NULL
);
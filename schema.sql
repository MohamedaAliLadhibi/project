-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema hama
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hama
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hama` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `hama` ;

-- -----------------------------------------------------
-- Table `hama`.`fragrancef`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hama`.`fragrancef` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(90) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hama`.`fragrancem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hama`.`fragrancem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `hama`.`purchase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hama`.`purchase` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fragrance_id` INT NOT NULL,
  `fragrancef_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_purchase_fragrance_idx` (`fragrance_id` ASC) VISIBLE,
  INDEX `fk_purchase_fragrancef1_idx` (`fragrancef_id` ASC) VISIBLE,
  CONSTRAINT `fk_purchase_fragrance`
    FOREIGN KEY (`fragrance_id`)
    REFERENCES `hama`.`fragrancem` (`id`),
  CONSTRAINT `fk_purchase_fragrancef1`
    FOREIGN KEY (`fragrancef_id`)
    REFERENCES `hama`.`fragrancef` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

package com.categorymanager.microservice.repository;

import com.categorymanager.microservice.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA Repository for {@link Category} entity
 *
 * @author Jitendra
 */

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}

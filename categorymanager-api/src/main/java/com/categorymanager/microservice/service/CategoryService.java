package com.categorymanager.microservice.service;

import com.categorymanager.microservice.entity.Category;

import java.util.List;
import java.util.Optional;

/**
 * Service for {@link Category} entity
 *
 * @author Jitendra
 */
public interface CategoryService {

    /**
     * Gets all categories present in the system.
     *
     * @return all the categories
     */
    List<Category> getAllCategories();

    /**
     * Gets a specific category by looking for its id.
     *
     * @param id the id of the category to look for
     * @return the category (if any)
     */
    Optional<Category> getCategoryById(Long id);

    /**
     * Creates a category.
     *
     * @param name the name of the category
     * @return the new category
     */
    Category createCategory(String name);

    /**
     * Updates an existing category.
     *
     * @param category the category to update
     * @param name the new category name
     */
    void updateCategory(Category category, String name);

    /**
     * Deletes a category in the system.
     *
     * @param category the category to delete
     */
    void deleteCategory(Category category);

}


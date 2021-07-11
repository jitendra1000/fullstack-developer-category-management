package com.categorymanager.microservice.service;

import java.util.List;
import java.util.Optional;

import com.categorymanager.microservice.entity.Category;
import com.categorymanager.microservice.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Spring-oriented Implementation for {@link CategoryService}
 *
 * @author Jitendra
 */
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;


    @Transactional
    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Transactional
    @Override
    public Optional<Category> getCategoryById(Long id) {
        return categoryRepository.findById(id);
    }

    @Transactional
    @Override
    public Category createCategory(String name) {
        Category category = new Category();
        category.setName(name);

        return categoryRepository.save(category);
    }

    @Transactional
    @Override
    public void updateCategory(Category category, String name) {
        category.setName(name);
        categoryRepository.save(category);
    }

    @Transactional
    @Override
    public void deleteCategory(Category category) {
        categoryRepository.delete(category);
    }



}

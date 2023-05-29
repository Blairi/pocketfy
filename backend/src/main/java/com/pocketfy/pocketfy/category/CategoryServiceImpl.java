package com.pocketfy.pocketfy.category;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

public class CategoryServiceImpl implements CategoryService{

    private static List<CategoryDTO> categories = new ArrayList<>();

    static {
        categories.add(new CategoryDTO(1, "Salary"));
        categories.add(new CategoryDTO(2, "Deposits"));
    }

    @Override
    public CategoryDTO getCategoryById(int id) {
        Predicate<? super CategoryDTO> predicate =
                category -> category.getId() == id;
        Optional<CategoryDTO> category = categories.stream().filter(predicate).findFirst();

        if( category.isEmpty() ) throw new RuntimeException("Category not found");

        return category.get();
    }
}

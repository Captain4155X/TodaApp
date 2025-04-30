package com.todo.Daos;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.todo.POJOS.Todo;

public interface ToDoRepository extends MongoRepository<Todo, String> {
}


package com.todo.Daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.POJOS.Task;

public interface UserDao extends JpaRepository<Task,Integer> {

}

package com.todo.Services;

import org.springframework.http.ResponseEntity;

import com.todo.DTOS.TaskDTO;
import com.todo.POJOS.Task;

public interface UserService {

	ResponseEntity<?> adduser(TaskDTO taskdto);

	ResponseEntity<?> getTask(int id);

	ResponseEntity<?> getAllTasks();

	ResponseEntity<?> updateTask(Task task, int id);

	ResponseEntity<?> DeleteTask(int iD);

}

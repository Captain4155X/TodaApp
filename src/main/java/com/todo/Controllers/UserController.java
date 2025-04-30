package com.todo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.DTOS.TaskDTO;
import com.todo.Daos.ToDoRepository;
import com.todo.POJOS.Task;
import com.todo.POJOS.Todo;
import com.todo.Services.UserService;

@RestController
@RequestMapping("user")
public class UserController {
	
	@Autowired
	UserService userservice;
	
    @Autowired
    private ToDoRepository toDoRepository;

    @GetMapping
    public List<Todo> getAll() {
        return toDoRepository.findAll();
    }
	
	@PostMapping("addTask")
	public ResponseEntity<?> addUser(@RequestBody TaskDTO taskdto)
	{
		return userservice.adduser(taskdto);
		
	}
	
	@GetMapping("getTask/{id}")
	public ResponseEntity<?> getTask(@PathVariable int id)
	{
		return userservice.getTask(id);
		
	}
	@GetMapping("getTask/{id}")
	public ResponseEntity<?> getAllTasks()
	{
		return userservice.getAllTasks();
		
	}
	@PutMapping("updateTask/{updatedTask}/")
	public ResponseEntity<?> updateTask(@RequestBody Task task,@PathVariable int Id)
	{
		return userservice.updateTask(task,Id);
		
	}
	@DeleteMapping("deleteTask/{ID}")
	public ResponseEntity<?> updateTask(@PathVariable int ID)
	{
		return userservice.DeleteTask(ID);
		
	}


}


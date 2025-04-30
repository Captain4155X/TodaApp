package com.todo.Services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.todo.DTOS.TaskDTO;
import com.todo.Daos.UserDao;
import com.todo.POJOS.Task;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImplementation implements UserService{
	@Autowired
	ModelMapper modelmapper;
	@Autowired
	UserDao userdao;

	@Override
	public ResponseEntity<?> adduser(TaskDTO userdto) {
		try {
			Task task=modelmapper.map(userdto, Task.class);
		return new ResponseEntity<>(userdao.save(task),HttpStatus.ACCEPTED);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
	}

	@Override
	public ResponseEntity<?> getTask(int id) {
		try {
		return new ResponseEntity<>(userdao.findById(id),HttpStatus.FOUND);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	@Override
	public ResponseEntity<?> getAllTasks() {
		try {
		return new ResponseEntity<>(userdao.findAll(),HttpStatus.FOUND);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

	@Override
	public ResponseEntity<?> updateTask(Task task,int Id) {
		try
		{
			Task task1=userdao.findById(Id).get();
		return new ResponseEntity<>(userdao.save(task1),HttpStatus.ACCEPTED);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

	@Override
	public ResponseEntity<?> DeleteTask(int iD) {
		try
		{
		userdao.deleteById(iD);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}



}

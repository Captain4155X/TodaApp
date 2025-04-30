package com.todo.POJOS;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "todos")
public class Todo {
    @Id
    private String id;
	public String Comments;
	public Date due_Date;
	public  Status stype;
	public Priority ptype;
	public Users user;

    // Getters and Setters
}


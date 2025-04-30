package com.todo.POJOS;

import java.util.Date;

import jakarta.persistence.Column;



import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Table
@Getter
@Setter
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	public int taskid;
	@Column
	public String Comments;
	@Column
	public Date due_Date;
	@Enumerated(EnumType.STRING)
	public  Status stype;
	@Enumerated(EnumType.STRING)
	public Priority ptype;
	@OneToOne
	public Users user;
	
	
	
	

}

package com.example.react_api.Controller;

import com.example.react_api.Model.User;
import com.example.react_api.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class Controller {
    @Autowired
    UserService service;
    @PostMapping( value = "/saveuser" ,consumes = MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<User> print(@RequestBody User user)
    {
        service.store(user);
        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public User login(@RequestBody User user) throws Exception{
    	String email=user.getEmail();
    	String pass=user.getPass();
    	User obj=null;
    	if(email!=null&&pass!=null) {
    		System.out.print("user exist");
    		obj=service.fetchuserbyemailandpass(email,pass);
    		
    	}
    	if(obj==null) {
    		throw new Exception("user does not exist");
    	}
    	return obj;
    }
    @GetMapping( value = "/Users" ,produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<List<User>> getUsers()
    {
        List<User> list=service.getUsers();
        return new ResponseEntity<List<User>>(list,HttpStatus.CREATED);
    }
    @GetMapping( value = "/User/{id}" ,produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<User> getUser(@PathVariable("id") int id)
    {
        User user=service.getUser(id);
        return new ResponseEntity<User>(user,HttpStatus.CREATED);
    }
}

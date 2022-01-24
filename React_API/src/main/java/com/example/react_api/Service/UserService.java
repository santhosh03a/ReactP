package com.example.react_api.Service;


import com.example.react_api.Model.User;
import com.example.react_api.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepo repo;
    public void store(User user) {
        repo.save(user);
    }

    public List<User> getUsers() {

        List<User> list=repo.findAll();

        return list;
    }
    public User getUser(int id) {

        User user=repo.findById(id).orElse(new User());

        return user;
    }
    public User fetchuserbyemailandpass(String email,String pass) {
    	return repo.findByEmailAndPass(email,pass);
    }

}

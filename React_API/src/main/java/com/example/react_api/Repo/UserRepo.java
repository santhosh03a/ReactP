package com.example.react_api.Repo;

import com.example.react_api.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
	public User findByEmailAndPass(String Email,String Pass);
}

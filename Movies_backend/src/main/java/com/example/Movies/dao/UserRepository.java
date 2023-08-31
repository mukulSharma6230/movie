package com.example.Movies.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Movies.User.User;

public interface UserRepository  extends JpaRepository<User, Integer>{
  User findByUsername(String username);
}

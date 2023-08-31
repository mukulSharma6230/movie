package com.example.Movies.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Movies.Exception.UserAlreadyException;
import com.example.Movies.User.User;
import com.example.Movies.dao.UserRepository;

@Service

public class UserService {

 @Autowired

  private UserRepository userRepository;



// @Autowired

// private PasswordEncoder passwordEncoder;

  public User createUser(User user) throws UserAlreadyException {

   System.out.println("create user called in service...............");

    // Implement registration logic

   if (userRepository.findByUsername(user.getUsername()) != null) {

      throw new UserAlreadyException("Username already exists");

    }
   else
    return userRepository.save(user);

  }

  public User findByUsername(String username) {

    return userRepository.findByUsername(username);

  }

}




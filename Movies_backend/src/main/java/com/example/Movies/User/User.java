package com.example.Movies.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int ID;
private String username;
private String email;
private String password;
private String confirm_password;
}

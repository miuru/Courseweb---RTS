package com.bookworm.bookwormapi.controller;


import com.bookworm.bookwormapi.models.User;
import com.bookworm.bookwormapi.service.UserService;
import com.bookworm.bookwormapi.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<?> getAll(){
        List<User> result = userService.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    @PostMapping
    public ResponseEntity<?> addorUpdateExpense(@RequestBody User user) {
        userService.saveOrUpdateUser(user);
        return new ResponseEntity("User added succcessfully", HttpStatus.OK);
    }

    @DeleteMapping
    public void deleteExpense(@RequestParam("id") String id) {
        userService.deleteUser(id);
    }
}

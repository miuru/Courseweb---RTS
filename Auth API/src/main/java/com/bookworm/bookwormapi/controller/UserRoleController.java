package com.bookworm.bookwormapi.controller;

import com.bookworm.bookwormapi.models.Role;
import com.bookworm.bookwormapi.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admin/user-roles")
public class UserRoleController {

    @Autowired
    RoleService roleService;

    @PostMapping
    public ResponseEntity<?> setUserRole(@Valid @RequestBody Role role){
        roleService.saveRole(role);
        return new ResponseEntity<>("User role added successfully", HttpStatus.OK);
    }

}

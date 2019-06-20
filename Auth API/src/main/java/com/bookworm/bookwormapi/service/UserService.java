package com.bookworm.bookwormapi.service;

import com.bookworm.bookwormapi.models.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> findAll();

    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    List<User> findByIdIn(List<Long> userIds);

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    User saveOrUpdateUser(User user);

    void deleteUser(String id);

    Optional<User> findById(Long id);
}

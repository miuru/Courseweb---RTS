package com.bookworm.bookwormapi.service;

import com.bookworm.bookwormapi.models.Role;
import com.bookworm.bookwormapi.models.RoleName;
import com.bookworm.bookwormapi.models.User;

import java.util.Optional;

public interface RoleService {

    Optional<Role> findByName(RoleName roleName);

    Role saveRole(Role role);

    void deleteRole(String id);
}

package com.bookworm.bookwormapi.service;

import com.bookworm.bookwormapi.models.Role;
import com.bookworm.bookwormapi.models.RoleName;
import com.bookworm.bookwormapi.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService{

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Optional<Role> findByName(RoleName roleName) {
        return Optional.empty();
    }

    @Override
    public Role saveRole(Role role) {
        roleRepository.save(role);
        return role;
    }

    @Override
    public void deleteRole(String id) {
        roleRepository.deleteById(id);
    }
}

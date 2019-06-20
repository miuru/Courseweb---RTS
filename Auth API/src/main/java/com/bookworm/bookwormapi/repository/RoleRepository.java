package com.bookworm.bookwormapi.repository;

import com.bookworm.bookwormapi.models.Role;
import com.bookworm.bookwormapi.models.RoleName;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends MongoRepository<Role, String>{
    Optional<Role> findByName(RoleName roleName);
}

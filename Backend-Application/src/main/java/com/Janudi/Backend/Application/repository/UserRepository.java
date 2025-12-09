package com.Janudi.Backend.Application.repository;

import com.Janudi.Backend.Application.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long>{
}

package com.project.payroll_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.payroll_management_system.model.State;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {

}

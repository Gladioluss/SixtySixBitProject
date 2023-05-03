package com.example.sixtysixbittest.repository;

import com.example.sixtysixbittest.entities.FootballerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FootballerRepository extends JpaRepository<FootballerEntity, Long> {
}

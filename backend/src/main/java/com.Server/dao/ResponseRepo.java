package com.Server.dao;

import com.Server.model.Response;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResponseRepo extends JpaRepository<Record, Integer > {

  //Need to change the exact column name in the query mapping
  @Query(value = "SELECT * FROM records WHERE record_name LIKE %:response%", nativeQuery = true)
  List<Record> findAllByNameContaining(@Param("record") String response);
}

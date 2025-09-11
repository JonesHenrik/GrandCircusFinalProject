package com.Server.dao;

import com.Server.model.Record;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecordRepo extends JpaRepository<Record, Integer > {

  //Need to change the exact column name in the query mapping
  @Query(value = "SELECT * FROM records WHERE record_name LIKE %:response%", nativeQuery = true)
  List<Record> findAllByNameContaining(@Param("record") String response);
}

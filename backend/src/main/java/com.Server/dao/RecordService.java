package com.Server.dao;

import com.Server.model.Record;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecordService implements IRecord {

  //DM
private final RecordRepo recordRepo;

//CNSTR
@Autowired
  public RecordService(RecordRepo recordRepo) {
  this.recordRepo = recordRepo;
}


@Override
  public List<Record> getAllRecords(){
  return recordRepo.findAll();
    }

  @Override
  @Transactional
  public Optional<Record> getRecordByID(int pkey){
  return recordRepo.findById(pkey);
  }

  @Override
  @Transactional
  public Record addRecord(Record aRecord){
  return recordRepo.save(aRecord);
  }

//For Later update: public Response updateResponse(Response aResponse);
}

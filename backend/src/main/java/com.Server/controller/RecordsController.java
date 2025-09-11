package com.Server.controller;

import com.Server.dao.RecordService;
import com.Server.model.Record;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1")
public class RecordsController {
//DM
  RecordService theRecordsService;

  //CNSTR
  public RecordsController(RecordService theRecordsService){
    this.theRecordsService =  theRecordsService;
  }

  //DAO

  @GetMapping("/records")
  public List<Record> getAllRecords(){
    System.out.println("path/records");
    return theRecordsService.getAllRecords();
  }

  @GetMapping("/records/{id}")
  public Optional<Record> getRecordByID(@PathVariable int id){
    return theRecordsService.getRecordByID(id);
  }

  @PostMapping("/records")
  public Record addRecord(@RequestBody Record aRecord){
    return theRecordsService.addRecord(aRecord);
  }
  //For Later update: public Response updateResponse(Response aResponse);

}

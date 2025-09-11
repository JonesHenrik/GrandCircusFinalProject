package com.Server.dao;

import com.Server.model.Record;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResponseService implements IResponse{

  //DM
private final ResponseRepo responseRepo;

//CNSTR
@Autowired
  public ResponseService(ResponseRepo responseRepo) {
  this.responseRepo = responseRepo;
}


    @Override
  public List<Record> getAllResponses(){
  return responseRepo.findAll();
    }

  @Override
  @Transactional (readOnly = true)
  Optional<Record> getResponseByID(int pkey){
  return responseRepo.findById(pkey);
  }

  @Override
  @Transactional
  public Record addResponse(Response aResponse){
  return responseRepo.save(aResponse);
  }

//For Later update: public Response updateResponse(Response aResponse);
  @Override
  @Transactional
  public void deleteResponse(int priKey){
    responseRepo.deleteByID(priKey);
  }


}

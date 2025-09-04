package com.Server.controller;

import com.Server.dao.ResponseService;
import com.Server.model.Response;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1")
public class ResponsesController {
//DM
  ResponsesController theResponseService;

  //CNSTR
  public ResponsesController(ResponseService theResponseService){
    this.theResponseService =  theResponseService;
  }

  //DAO

  @GetMapping("/records")
  public List<Response> getAllResponses(){
    return theResponseService.getAllResponses();
  }

  @GetMapping("/records/{id}")
  public Optional<Response> getResponseByID(@PathVariable int pkey){
    return theResponseService.getResponseByID(pkey);
  }

  @PostMapping("/records")
  public Response addResponse(Response aResponse){
    return theResponseService.addResponse(aResponse);
  }
  //For Later update: public Response updateResponse(Response aResponse);

  @DeleteMapping("/records/{id}")
  public void deleteResponse(@PathVariable int priKey){
    theResponseService.deleteResponse(priKey);
  }

}

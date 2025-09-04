package com.Server.dao;

import com.Server.model.Response;
import java.util.List;
import java.util.Optional;
/*
Eventually we should use unit 9 04 consuming APIS project
This will show us how to collect the total of queries as well as
when we begin working with the database of multiple records vs updating the total of 1
 */
public interface IResponse {
public List<Response> getAllResponses();
public Optional<Response> getResponseByID(int pkey);
public Response addResponse(Response aResponse);
//For Later update: public Response updateResponse(Response aResponse);
public void deleteResponse(int priKey);

}

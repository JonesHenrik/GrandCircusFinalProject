package com.Server.dao;

import com.Server.model.Record;
import java.util.List;
import java.util.Optional;
/*
Eventually we should use unit 9 04 consuming APIS project
This will show us how to collect the total of queries as well as
when we begin working with the database of multiple records vs updating the total of 1
 */
public interface IRecord {
public List<Record> getAllRecords();
public Optional<Record> getRecordByID(int pkey);
public Record addRecord(Record aRecord);
//For Later update: public Response updateResponse(Response aResponse);


}

drop table if exists records;

CREATE TABLE records (
    id serial not null,
    response VARCHAR(255),
    waterW float,
    electricW float,
    co2W float,
	version int
);
insert into records
Values( 1, 'aa', 10,20,30)
;
select * from records;
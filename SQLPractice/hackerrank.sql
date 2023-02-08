-- 1) Query all columns for all American cities in the CITY table with
-- populations larger than 100000. The CountryCode for America is USA.

select *
from city
where countrycode = 'USA' and population > 100000

-- 2) Query the NAME field for all American cities in the CITY table with
-- populations larger than 120000. The CountryCode for America is USA.

select name
from city
where countrycode = 'USA' and population > 120000

-- 3 ) Query all columns (attributes) for every row in the CITY table.
select *
from city

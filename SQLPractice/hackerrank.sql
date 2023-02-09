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

-- 4) Query all columns for a city in CITY with the ID 1661.
select *
from city
where id = 1661

-- 5) Query all attributes of every Japanese city in the CITY table.
-- The COUNTRYCODE for Japan is JPN.
select *
from city
where countrycode = 'JPN'

-- 6) Query the names of all the Japanese cities in the CITY table.
-- The COUNTRYCODE for Japan is JPN.
select name
from city
where countrycode ='JPN'

-- 7) Query a list of CITY and STATE from the STATION table.
select
  city,
  state
from station

-- 8) Query a list of CITY names from STATION for cities that have an even
-- ID number. Print the results in any order, but exclude duplicates from the answer.
select
  distinct city
from station
where id % 2 = 0

-- 9) Find the difference between the total number of CITY entries in the table
-- and the number of distinct CITY entries in the table.
select
    count(*) - count(distinct city) as difference
from station

-- 10) Query the two cities in STATION with the shortest and longest CITY names,
--  as well as their respective lengths (i.e.: number of characters in the name).
-- If there is more than one smallest or largest city, choose the one that comes
-- first when ordered alphabetically.
select
  city,
  length(city)
from station
order by length(city) asc, city asc
limit 1;

select
  city,
  length(city)
from station
order by length(city) desc, city asc
limit 1;

-- 11) Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u)
--  from STATION. Your result cannot contain duplicates.
select distinct city
from station
where left(city,1) in ('A', 'E', 'I', 'O', 'U')

-- 12) Query the list of CITY names ending with vowels (a, e, i, o, u)
-- from STATION. Your result cannot contain duplicates.
select distinct city
from station
where right(city,1) in ('a','e','i','o','u')

-- 13) Query the list of CITY names from STATION which have vowels
-- (i.e., a, e, i, o, and u) as both their first and last characters.
-- Your result cannot contain duplicates.
select distinct city
from station
where left(city,1) in ('A', 'E', 'I', 'O', 'U')
and right(city,1) in ('a','e','i','o','u')

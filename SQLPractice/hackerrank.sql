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

-- 14) Query the list of CITY names from STATION that do not start with vowels.
-- Your result cannot contain duplicates.
select distinct city
from station
where left(city,1) not in ('A','E','I','O','U')

-- 15) Query the list of CITY names from STATION that do not end with vowels.
-- Your result cannot contain duplicates.
select distinct city
from station
where right(city,1) not in ('a','e','i','o','u')

-- 16) 	Query the list of CITY names from STATION that either do not start with
-- vowels or do not end with vowels. Your result cannot contain duplicates.
select distinct city
from station
where left(city,1) not in ('A', 'E', 'I', 'O', 'U')
or right(city,1) not in ('a','e','i','o','u')

-- 17) Query the list of CITY names from STATION that do not start with vowels
-- and do not end with vowels. Your result cannot contain duplicates.
select distinct city
from station
where left(city,1) not in ('A', 'E', 'I', 'O', 'U')
and right(city,1) not in ('a','e','i','o','u')

-- 18) Query the Name of any student in STUDENTS who scored higher than  Marks.
-- Order your output by the last three characters of each name. If two or more
-- students both have names ending in the same last three characters
-- (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
select Name
from Students
where Marks > 75
order by right(Name, 3), ID

-- 19) Write a query that prints a list of employee names
-- (i.e.: the name attribute) from the Employee table in alphabetical order.
select name
from Employee
order by name

-- 20) Write a query that prints a list of employee names
-- (i.e.: the name attribute) for employees in Employee having a salary greater
-- than  per month who have been employees for less than  months.
-- Sort your result by ascending employee_id.
select name
from Employee
where salary > 2000
and months < 10
order by employee_id

-- Write a query identifying the type of each record in the TRIANGLES table
-- using its three side lengths. Output one of the following statements for
-- each record in the table:

-- Equilateral: It's a triangle with  sides of equal length.
-- Isosceles: It's a triangle with  sides of equal length.
-- Scalene: It's a triangle with  sides of differing lengths.
-- Not A Triangle: The given values of A, B, and C don't form a triangle.

SELECT CASE
WHEN A + B <= C THEN 'Not A Triangle'
WHEN A = B AND B = C THEN 'Equilateral'
WHEN A = B OR B = C OR A = C THEN 'Isosceles'
ELSE 'Scalene'
END
FROM TRIANGLES;

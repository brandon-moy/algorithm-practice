-- EASY QUESTIONS
-- 1) Show first name, last name, and gender of patients who's gender is 'M'
SELECT
  first_name,
  last_name,
  gender
FROM patients
WHERE gender = 'M';

-- 2) Show first name and last name of patients who does not have allergies. (null)
SELECT
  first_name,
  last_name
FROM patients
WHERE allergies is NULL;

-- 3) Show first name of patients that start with the letter 'C'
SELECT
  first_name
FROM patients
WHERE first_name like 'C%';

-- 4) Show first name and last name of patients that weight within the range of
-- 100 to 120 (inclusive)
SELECT
  first_name,
  last_name
FROM patients
WHERE weight between 100 and 120;

-- 5) Update the patients table for the allergies column. If the patient's
-- allergies is null then replace it with 'NKA'
UPDATE patients
set allergies = 'NKA'
where allergies is null;

-- 6) Show first name and last name concatinated into one column to show their
-- full name.
select concat(first_name, ' ', last_name)
from patients


-- 7) Show first name, last name, and the full province name of each patient.
-- Example: 'Ontario' instead of 'ON'
select
  first_name,
  last_name,
  province_name
from patients
  join province_names ON province_names.province_id = patients.province_id;


-- 8) Show how many patients have a birth_date with 2010 as the birth year.
select count(birth_date) as total_patients
from patients
where YEAR(birth_date) = 2010;

-- 9) Show the first_name, last_name, and height of the patient with the greatest
-- height.
select
first_name,
last_name,
max(height) as height
from patients

-- 10) Show all columns for patients who have one of the following patient_ids:
-- 1,45,534,879,1000
select
*
from patients
where patient_id in (1, 45, 534, 879, 1000)

-- 11) Show the total number of admissions
select
count(patient_id) as admissions
from admissions

-- 12) Show all the columns from admissions where the patient was admitted and
-- discharged on the same day.
select
*
from admissions
where admission_date = discharge_date

-- 13) Show the patient id and the total number of admissions for patient_id 579
select
patient_id,
count(patient_id) as admissions
from admissions
where patient_id = '579';

-- 14) Based on the cities that our patients live in, show unique cities that
-- are in province_id 'NS'?
select distinct(city) as unique_cities
from patients
where province_id = 'NS'

-- 15) Write a query to find the first_name, last name and birth date of
-- patients who have height more than 160 and weight more than 70
select
first_name,
last_name,
birth_date
from patients
where height > 160 and weight > 70

-- 16) Write a query to find list of patients first_name, last_name, and
-- allergies from Hamilton where allergies are not null
select
  first_name,
  last_name,
  allergies
from patients
where
  city = 'Hamilton'
  and allergies IS NOT null

-- 17) Based on cities where our patient lives in, write a query to display the
-- list of unique city starting with a vowel (a, e, i, o, u). Show the result
-- order in ascending by city.
SELECT distinct city
from patients
where
  city LIKE 'a%'
  or city like 'e%'
  or city like 'i%'
  or city like 'o%'
  or city like 'u%'
order by city asc

-- MEDIUM QUESTIONS
-- 18) Show unique birth years from patients and order them by ascending.
select distinct YEAR(birth_date)
from patients
order by birth_date asc

-- 19) Show unique first names from the patients table which only occurs once in the list.
-- For example, if two or more people are named 'John' in the first_name column
-- then don't include their name in the output list. If only 1 person is named
-- 'Leo' then include them in the output.
select first_name
from patients
group by first_name
having count(first_name) = 1

-- 20) Show patient_id and first_name from patients where their first_name start
-- and ends with 's' and is at least 6 characters long.
select patient_id,
first_name
from patients
where first_name like 's%s'
and length(first_name) > 5;

-- 21) Show patient_id, first_name, last_name from patients whos diagnosis is
-- 'Dementia'.
-- Primary diagnosis is stored in the admissions table.
SELECT
  patients.patient_id,
  patients.first_name,
  patients.last_name
from patients
  join admissions on patients.patient_id = admissions.patient_id
where diagnosis is 'Dementia'

-- 22) Display every patient's first_name.
-- Order the list by the length of each name and then by alphbetically
select first_name
from patients
order by length(first_Name), first_Name

-- 23) Show the total amount of male patients and the total amount of female patients in the patients table.
-- Display the two results in the same row.
select
 (select count(*) from patients where gender = 'M') as male_count,
 (select count(*) from patients where gender = 'F') as female_count

 -- 24) Show first and last name, allergies from patients which have allergies
--  to either 'Penicillin' or 'Morphine'. Show results ordered ascending by
-- allergies then by first_name then by last_name.
select
  first_name,
  last_name,
  allergies
from patients
where
  allergies = 'Penicillin'
  or allergies = 'Morphine'
order by
  allergies,
  first_name,
  last_name

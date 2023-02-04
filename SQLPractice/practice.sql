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

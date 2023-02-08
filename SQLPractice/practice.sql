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

-- 25) Show patient_id, diagnosis from admissions. Find patients admitted multiple
-- times for the same diagnosis.
select
  patient_id,
  diagnosis
from admissions
group by
  patient_id,
  diagnosis
having count(*) > 1

-- 26) Show the city and the total number of patients in the city.
-- Order from most to least patients and then by city name ascending.
select
  city,
  count(patient_id) as total_patients
from patients
group by city
order by
  total_patients desc,
  city asc

-- 27) Show first name, last name and role of every person that is either
-- patient or doctor. The roles are either "Patient" or "Doctor"
select
  first_name,
  last_name,
  'Patient' as role
from patients
union all
select
  first_name,
  last_name,
  'Doctor' as role
from doctors

-- 28) Show all allergies ordered by popularity. Remove NULL values from query.
select
  allergies,
  count(allergies) as total_diagnosis
from patients
where allergies is not null
group by allergies
order by total_diagnosis desc

-- 29) Show all patient's first_name, last_name, and birth_date who were born in
-- the 1970s decade. Sort the list starting from the earliest birth_date.
select
  first_name,
  last_name,
  birth_date
from patients
where year(birth_date) like '197%'
order by birth_date

-- 30) We want to display each patient's full name in a single column. Their
-- last_name in all upper letters must appear first, then first_name in all
-- lower case letters. Separate the last_name and first_name with a comma.
-- Order the list by the first_name in decending order EX: SMITH,jane
select
  concat(upper(last_name), ',', lower(first_name)) as new_name_format
from patients
order by first_name desc

-- 31) Show the province_id(s), sum of height; where the total sum of its
-- patient's height is greater than or equal to 7,000.
select
  province_id,
  sum(height) as sum_height
from patients
group by province_id
having sum(height) > 7000

-- 32) Show the difference between the largest weight and smallest weight for
-- patients with the last name 'Maroni'
select
  (MAX(weight) - Min(weight)) as weight_delta
from patients
where last_name = 'Maroni'

-- 33) Show all of the days of the month (1-31) and how many admission_dates
-- occurred on that day. Sort by the day with most admissions to least admissions.
select
  day(admission_date) as day_number,
  count(*) as number_of_admissions
from admissions
group by day_number
order by number_of_admissions desc

-- 34) Show all columns for patient_id 542's most recent admission_date.
select *
from admissions
where patient_id = 542
group by patient_id
having
	admission_date = max(admission_date)

-- 35) Show patient_id, attending_doctor_id, and diagnosis for admissions that
-- match one of the two criteria:
-- 1. patient_id is an odd number and attending_doctor_id is either 1, 5, or 19.
-- 2. attending_doctor_id contains a 2 and the length of patient_id is 3 characters.
select
  patient_id,
  attending_doctor_id,
  diagnosis
from admissions
where
  (
    attending_doctor_id IN (1, 5, 19)
    and patient_id % 2 != 0
  )
  or (
    attending_doctor_id like '%2%'
    and len(patient_id) = 3
  )

-- 36) Show first_name, last_name, and the total number of admissions
-- attended for each doctor.
-- Every admission has been attended by a doctor.
select
  first_name,
  last_name,
  count(*) as admissions_total
from admissions
  join doctors ph on ph.doctor_id = admissions.attending_doctor_id
group by attending_doctor_id

-- 37) For each doctor, display their id, full name, and the first and last
-- admission date they attended.
select
  doctor_id,
  concat(first_name, ' ', last_name) as full_name,
  min(admission_date) as first_admission,
  max(admission_date) as last_admission
from admissions
  join doctors ph on ph.doctor_id = admissions.attending_doctor_id
group by attending_doctor_id

-- 38) Display the total amount of patients for each province. Order by descending.
select
  province_name,
  count(*) as patient_count
from patients pa
  join province_names pr ON pr.province_id = pa.province_id
group by pr.province_id
order by patient_count desc

-- 39) For every admission, display the patient's full name, their admission
-- diagnosis, and their doctor's full name who diagnosed their problem.
select
  concat(
    patients.first_name,
    ' ',
    patients.last_name
  ) as patient_name,
  diagnosis,
  concat(
    doctors.first_name,
    ' ',
    doctors.last_name
  ) as doctor_name
from patients
  join admissions on admissions.patient_id = patients.patient_id
  join doctors on doctors.doctor_id = admissions.attending_doctor_id

  -- 40) display the number of duplicate patients based on their
  -- first_name and last_name.
select
  first_name,
  last_name,
  count(*) as num_of_duplicates
from patients
group by
  first_name,
  last_name
having count(*) > 1

-- 41) Display patient's full name,
-- height in the units feet rounded to 1 decimal,
-- weight in the unit pounds rounded to 0 decimals,
-- birth_date, gender non abbreviated.

select
  concat(first_name, ' ', last_name) as patient_name,
  round(height / 30.48, 1) as height,
  round(weight * 2.205, 0) as weight,
  birth_date,
  CASE
    when gender = 'M' then 'Male'
    else 'Female'
  end as 'gender_type'
from patients

-- 42) Show all of the patients grouped into weight groups.
-- Show the total amount of patients in each weight group.
-- Order the list by the weight group decending.

-- For example, if they weight 100 to 109 they are placed in the 100 weight group,
-- 110-119 = 110 weight group, etc.
select
  count(*) as patients_in_group,
  floor(weight / 10) * 10 as weight_group
from patients
group by weight_group
order by weight_group desc

-- 43) Show patient_id, weight, height, isObese from the patients table.

-- Display isObese as a boolean 0 or 1.
-- Obese is defined as weight(kg)/(height(m)2) >= 30.
-- weight is in units kg.
-- height is in units cm.

select
  patient_id,
  weight,
  height,
  case
    when weight / power(height / 100.0, 2) >= 30 then 1
    else 0
  end as isObese
from patients

-- 44) Show patient_id, first_name, last_name, and attending doctor's specialty.
-- Show only the patients who has a diagnosis as 'Epilepsy' and the doctor's first name is 'Lisa'
-- Check patients, admissions, and doctors tables for required information.

select
  patients.patient_id,
  patients.first_name,
  patients.last_name,
  doctors.specialty
from patients
  join admissions on admissions.patient_id = patients.patient_id
  join doctors on doctors.doctor_id = admissions.attending_doctor_id
where
  admissions.diagnosis = 'Epilepsy'
  and doctors.first_name = 'Lisa'

-- 45) All patients who have gone through admissions, can see their medical
-- documents on our site. Those patients are given a temporary password after
-- their first admission. Show the patient_id and temp_password.

-- The password must be the following, in order:
-- 1. patient_id
-- 2. the numerical length of patient's last_name
-- 3. year of patient's birth_date
SELECT
  distinct patients.patient_id,
  concat(
    patients.patient_id,
    len(patients.last_name),
    YEAR(birth_date)
  )
FROM patients
  join admissions on admissions.patient_id = patients.patient_id


-- 46) Each admission costs $50 for patients without insurance, and $10 for
-- patients with insurance. All patients with an even patient_id have insurance.

-- Give each patient a 'Yes' if they have insurance, and a 'No' if they don't
-- have insurance. Add up the admission_total cost for each has_insurance group.

SELECT
  case
  	when patient_id % 2 = 0 then 'Yes'
    else 'No'
    end as has_insurance,
  case
  	when patient_id % 2 = 0 THEN count(*) * 10
  	else count(*) * 50
    end as cost_after_insurance
FROM admissions
group by has_insurance

-- 47) Show the provinces that has more patients identified as 'M' than 'F'.
-- Must only show full province_name

select pn.province_name
from patients as pa
  join province_names as pn on pa.province_id = pn.province_id
group by pn.province_name
having
  count(
    case
      when gender = 'M' then 1
    END
  ) > count(
    case
      when gender = 'F' then 1
    end
  )

-- 48) We are looking for a specific patient. Pull all columns for the
-- patient who matches the following criteria:
-- - First_name contains an 'r' after the first two letters.
-- - Identifies their gender as 'F'
-- - Born in February, May, or December
-- - Their weight would be between 60kg and 80kg
-- - Their patient_id is an odd number
-- - They are from the city 'Kingston'

SELECT *
from patients
where
  first_name like '__r%'
  and gender = 'F'
  and month(birth_date) in (2, 5, 12)
  and weight between 60 and 80
  and patient_id % 2 != 0
  and city = 'Kingston'

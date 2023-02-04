-- Show first name, last name, and gender of patients who's gender is 'M'
SELECT
  first_name,
  last_name,
  gender
FROM patients
WHERE gender = 'M';

-- Show first name and last name of patients who does not have allergies. (null)
SELECT
  first_name,
  last_name
FROM patients
WHERE allergies is NULL;

-- Show first name of patients that start with the letter 'C'
SELECT
  first_name
FROM patients
WHERE first_name like 'C%';

-- Show first name and last name of patients that weight within the range of 100 to 120 (inclusive)
SELECT
  first_name,
  last_name
FROM patients
WHERE weight between 100 and 120;

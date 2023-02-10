-- Query a count of the number of cities in CITY having a
-- Population larger than 100,000.

SELECT
    COUNT(*) as number_of_cities
FROM CITY
WHERE POPULATION > 100000;

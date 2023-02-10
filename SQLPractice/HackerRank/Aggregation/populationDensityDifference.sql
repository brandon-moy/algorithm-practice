-- Query the difference between the maximum and minimum populations in CITY.

SELECT
    MAX(POPULATION) - MIN(POPULATION) as population_density_difference
FROM CITY;

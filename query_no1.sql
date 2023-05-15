SELECT DISTINCT DATE_FORMAT(tanggal, '%Y-%m') AS periode
FROM table_data
WHERE tanggal BETWEEN '2022-01-01' AND '2022-05-31'
ORDER BY tanggal ASC;

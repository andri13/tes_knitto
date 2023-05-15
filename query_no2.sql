DELIMITER //

CREATE PROCEDURE generate_transaction_number()
BEGIN
    DECLARE prefix VARCHAR(2);
    DECLARE current_date DATE;
    DECLARE current_day VARCHAR(2);
    DECLARE current_month VARCHAR(2);
    DECLARE current_year VARCHAR(2);
    DECLARE last_transaction_number INT;
    DECLARE new_transaction_number VARCHAR(12);

    SET prefix = 'MH';
    SET current_date = CURDATE();
    SET current_day = DATE_FORMAT(current_date, '%d');
    SET current_month = DATE_FORMAT(current_date, '%m');
    SET current_year = DATE_FORMAT(current_date, '%y');

    SELECT MAX(RIGHT(transaction_number, 3))
    INTO last_transaction_number
    FROM transactions
    WHERE LEFT(transaction_number, 8) = CONCAT(prefix, current_day, current_month, current_year);

    IF last_transaction_number IS NULL THEN
        SET last_transaction_number = 0;
    END IF;

    SET new_transaction_number = CONCAT(prefix, current_day, current_month, current_year, LPAD((last_transaction_number + 1), 3, '0'));

    INSERT INTO transactions (transaction_number, transaction_date)
    VALUES (new_transaction_number, current_date);

    SELECT new_transaction_number AS transaction_number;
END //

DELIMITER ;

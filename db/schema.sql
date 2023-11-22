


\c portfolios_dev;

DROP TABLE IF EXISTS property;

CREATE TABLE property (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descriptions TEXT,
    imageurl  TEXT,
    builddate NUMERIC,
    contact VARCHAR,
    review NUMERIC,
    available BOOLEAN,
    price NUMERIC,
    homeaddress VARCHAR
);
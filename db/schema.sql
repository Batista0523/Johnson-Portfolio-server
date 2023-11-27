\c portfolios_dev;

DROP TABLE IF EXISTS property;

CREATE TABLE property (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descriptions TEXT,
    imageurl TEXT,
    builddate INTEGER,
    contact VARCHAR(255),
    review INTEGER,
    available BOOLEAN,
    price NUMERIC,
    homeaddress VARCHAR(255)
);
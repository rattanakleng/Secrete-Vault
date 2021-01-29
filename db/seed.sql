USE passwordsdb;
INSERT INTO
  Passwords (name, link, username, password, description, createdAt, updatedAt )
VALUES
  (
    "Amazon",
    "amazon.com",
    "myamzusername",
    "amzpassword",
    "amazon.com login information",
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  );

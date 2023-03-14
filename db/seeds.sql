INSERT INTO department (name)
VALUES ("Sales"), 
       ("Engineering"),
       ("Finance"),
       ("Legal");


INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Leader", 75000, 1),
       ("Salesperson", 60000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 125000, 3),
       ("Accountant", 100000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 170000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Moe", "Green", 1),
       ("Peter", "Clemenza", 2),
       ("Don", "Fanucci", 3),
       ("Al", "Neri", 4),
       ("Tom", "Hagen", 5),
       ("Fredo", "Corleone", 6),
       ("Vito", "Corleone", 7),
       ("Michael", "Corleone", 8);

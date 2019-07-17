# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

- SELECT ProductName, CategoryName
  FROM [Products]
  INNER JOIN Categories on products.categoryid = categories.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

- SELECT OrderId, ShipperName
  FROM [Orders]
  JOIN Shippers on Orders.ShipperID = Shippers.ShipperID
  where OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

- SELECT Quantity, ProductName
  FROM OrderDetails as od
  INNER JOIN Products as p on od.productid = p.productid
  WHERE OrderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

- SELECT OrderID, CustomerName, LastName as EmployeeLastName
  FROM [Orders]
  LEFT JOIN Customers as c on orders.customerid = c.customerid
  LEFT JOIN Employees as e on orders.employeeid = e.employeeid

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

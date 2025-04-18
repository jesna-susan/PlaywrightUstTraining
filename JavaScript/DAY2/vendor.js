let vendors = [];

// Function to add a new row for product details
function addProductRow() {
    const productsBody = document.getElementById("productsBody");
    const rowCount = productsBody.rows.length;
    const row = document.createElement("tr");

    row.innerHTML = `
        <td><input type="text" name="products[${rowCount}][id]" required></td>
        <td><input type="text" name="products[${rowCount}][name]" required></td>
        <td><input type="number" name="products[${rowCount}][price]" required></td>
        <td><button type="button" onclick="removeRow(this)">Remove</button></td>
    `;
    productsBody.appendChild(row);
}

// Function to remove a product row
function removeRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Function to add a new vendor block dynamically
function addVendor() {
    const vendorForm = document.getElementById("vendorform");
    const vendorBlocks = document.getElementsByClassName("vendorblock");
    const vendorCount = vendorBlocks.length;

    const newVendorBlock = document.createElement("div");
    newVendorBlock.className = "vendorblock";
    newVendorBlock.innerHTML = `
        <label for="vendor id">Vendor ID:</label>
        <input type="number" name="vendors[${vendorCount}][id]" placeholder="Enter the vendor ID" />
        <br>

        <label for="vendor name">Vendor Name:</label>
        <input type="text" name="vendors[${vendorCount}][name]" placeholder="Enter the name of the vendor" />
        <br>

        <table>
            <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
            </tr>
            </thead>
            <tbody id="productsBody${vendorCount}">
                <tr>
                    <td><input type="text" name="products[0][id]" required></td>
                    <td><input type="text" name="products[0][name]" required></td>
                    <td><input type="number" name="products[0][price]" required></td>
                    <td><button type="button" onclick="removeRow(this)">Remove</button></td>
                </tr>
            </tbody>
        </table>
        <br>
        <button type="button" onclick="addProductRow()">Add Product</button><br><br>
        <label for="vendor Rating">Vendor Rating (on a scale of 1-5, 5 being the highest!):</label>
        <input type="number" name="vendors[${vendorCount}][rating]" placeholder="Enter the rating for the vendor" />
        <br>
    `;
    vendorForm.insertBefore(newVendorBlock, document.getElementById("addVendor"));
}

// Function to submit vendor data
function submitVendor() {
    const vendorBlocks = document.getElementsByClassName("vendorblock");
    vendors = [];

    for (let i = 0; i < vendorBlocks.length; i++) {
        const vendorBlock = vendorBlocks[i];
        const vendorID = vendorBlock.querySelector(`input[name="vendors[${i}][id]"]`).value;
        const vendorName = vendorBlock.querySelector(`input[name="vendors[${i}][name]"]`).value;
        const vendorRating = vendorBlock.querySelector(`input[name="vendors[${i}][rating]"]`).value;

        const products = [];
        const productRows = vendorBlock.querySelectorAll("tbody tr");

        productRows.forEach(row => {
            const productID = row.querySelector('input[name*="[id]"]').value;
            const productName = row.querySelector('input[name*="[name]"]').value;
            const productPrice = row.querySelector('input[name*="[price]"]').value;

            products.push({
                id: productID,
                name: productName,
                price: parseFloat(productPrice)
            });
        });

        vendors.push({
            id: vendorID,
            name: vendorName,
            products: products,
            rating: parseFloat(vendorRating)
        });
    }

    // Sorting vendors by rating in descending order
    vendors.sort((a, b) => b.rating - a.rating);

    // Redirect to a new page to display vendor details
    const newPage = window.open("", "_blank");
    newPage.document.write("<h1>Vendor Details (Sorted by Rating)</h1>");
    vendors.forEach(vendor => {
        newPage.document.write(`<h2>Vendor ID: ${vendor.id}</h2>`);
        newPage.document.write(`<p>Vendor Name: ${vendor.name}</p>`);
        newPage.document.write(`<p>Vendor Rating: ${vendor.rating}</p>`);
        newPage.document.write("<h3>Products:</h3>");
        newPage.document.write("<ul>");
        vendor.products.forEach(product => {
            newPage.document.write(`<li>ID: ${product.id}, Name: ${product.name}, Price: ${product.price}</li>`);
        });
        newPage.document.write("</ul>");
        newPage.document.write("<hr>");
    });
}

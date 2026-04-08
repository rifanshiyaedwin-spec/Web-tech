import { UnitCard, QuestionBlock } from '../components/UnitCard';
import { CodeBlock } from '../components/CodeBlock';

export function Unit4() {
  return (
    <UnitCard id="unit4" title="Unit IV: PHP & XML">
      <QuestionBlock id="u4q1" title="1. PHP Working Principle">
        <p>PHP is a server-side scripting language. When a user requests a PHP page:</p>
        <ol className="list-decimal list-inside space-y-1 ml-2 mb-4">
          <li>The browser sends an HTTP request to the web server.</li>
          <li>The server recognizes the <code>.php</code> extension and passes the file to the PHP interpreter.</li>
          <li>The PHP engine executes the code (which may involve database queries).</li>
          <li>The engine generates plain HTML output.</li>
          <li>The server sends this HTML back to the browser as an HTTP response.</li>
        </ol>
      </QuestionBlock>

      <QuestionBlock id="u4q2" title="2. PHP + MySQL Program">
        <p>Connecting to a database and fetching employees with salary &gt; 50000.</p>
        <CodeBlock language="php" code={`<?php
$conn = new mysqli("localhost", "root", "", "company");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Execute query
$sql = "SELECT name, salary FROM employees WHERE salary > 50000";
$result = $conn->query($sql);

// Process results
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. " - Salary: $" . $row["salary"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>`} />
      </QuestionBlock>

      <QuestionBlock id="u4q3" title="3. PHP File Handling">
        <p>Reading from a text file and displaying processed output.</p>
        <CodeBlock language="php" code={`<?php
$filename = "data.txt";

if(file_exists($filename)) {
    // Open file for reading
    $file = fopen($filename, "r");
    
    echo "<ul>";
    // Read line by line until end of file
    while(!feof($file)) {
        $line = fgets($file);
        // Process output (e.g., sanitize for HTML)
        echo "<li>" . htmlspecialchars($line) . "</li>";
    }
    echo "</ul>";
    
    // Close file
    fclose($file);
} else {
    echo "File not found.";
}
?>`} />
      </QuestionBlock>

      <QuestionBlock id="u4q4" title="4. XML & DTD">
        <p>XML (eXtensible Markup Language) is used to structure data. A DTD (Document Type Definition) defines the legal building blocks of an XML document.</p>
        
        <h4 className="font-medium mt-4 mb-2">Bookstore XML + DTD</h4>
        <CodeBlock language="xml" code={`<!-- DTD Definition (can be external or internal) -->
<!DOCTYPE bookstore [
  <!ELEMENT bookstore (book+)>
  <!ELEMENT book (title, author, price)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT author (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
]>

<!-- XML Data -->
<bookstore>
    <book>
        <title>Web Technology Basics</title>
        <author>John Smith</author>
        <price>550.00</price>
    </book>
    <book>
        <title>Advanced PHP</title>
        <author>Jane Doe</author>
        <price>750.00</price>
    </book>
</bookstore>`} />
      </QuestionBlock>
    </UnitCard>
  );
}

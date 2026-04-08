import { UnitCard, QuestionBlock } from '../components/UnitCard';
import { CodeBlock } from '../components/CodeBlock';

export function Unit5() {
  return (
    <UnitCard id="unit5" title="Unit V: Servlets & JDBC">
      <QuestionBlock id="u5q1" title="1. Servlet Life Cycle">
        <p>The servlet life cycle consists of three main methods: <code>init()</code>, <code>service()</code>, and <code>destroy()</code>.</p>
        
        <div className="my-6 max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-slate-200 dark:bg-slate-700 p-3 rounded-lg w-full text-center font-medium border border-slate-300 dark:border-slate-600">
              1. Loading & Instantiation
            </div>
            <div className="text-slate-400 my-1">↓</div>
            <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 p-3 rounded-lg w-full text-center font-medium border border-blue-300 dark:border-blue-700">
              2. init() - Initialization (Called Once)
            </div>
            <div className="text-slate-400 my-1">↓</div>
            <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 p-3 rounded-lg w-full text-center font-medium border border-emerald-300 dark:border-emerald-700 shadow-sm">
              3. service() - Handling Request (Called per request)
            </div>
            <div className="text-slate-400 my-1">↓</div>
            <div className="bg-slate-200 dark:bg-slate-700 p-3 rounded-lg w-full text-center font-medium border border-slate-300 dark:border-slate-600">
              4. destroy() - Termination (Called Once)
            </div>
          </div>
        </div>
      </QuestionBlock>

      <QuestionBlock id="u5q2" title="2. Session Tracking">
        <p>HTTP is stateless. Session tracking maintains state across multiple requests.</p>
        
        <h4 className="font-medium mt-4 mb-2">Using HttpSession</h4>
        <CodeBlock language="java" code={`// Creating/Retrieving a session
HttpSession session = request.getSession();

// Storing data in session
session.setAttribute("username", "john_doe");

// Retrieving data from session
String user = (String) session.getAttribute("username");

// Invalidating session (Logout)
session.invalidate();`} />

        <h4 className="font-medium mt-4 mb-2">Using Cookies</h4>
        <CodeBlock language="java" code={`// Creating a cookie
Cookie userCookie = new Cookie("user", "john_doe");
userCookie.setMaxAge(60 * 60 * 24); // 1 day in seconds
response.addCookie(userCookie);

// Reading cookies
Cookie[] cookies = request.getCookies();
if (cookies != null) {
    for (Cookie c : cookies) {
        if (c.getName().equals("user")) {
            String val = c.getValue();
        }
    }
}`} />
      </QuestionBlock>

      <QuestionBlock id="u5q3" title="3. JDBC (Java Database Connectivity)">
        <p>JDBC is a Java API to connect and execute queries with the database.</p>
        
        <h4 className="font-medium mt-4 mb-2">Types of Drivers:</h4>
        <ul className="list-disc list-inside space-y-1 ml-2 mb-4 text-sm">
          <li>Type 1: JDBC-ODBC Bridge Driver</li>
          <li>Type 2: Native-API Driver</li>
          <li>Type 3: Network Protocol Driver</li>
          <li>Type 4: Thin Driver (Fully Java Driver - Most recommended)</li>
        </ul>

        <h4 className="font-medium mt-4 mb-2">Java Code to Connect DB and Execute Query</h4>
        <CodeBlock language="java" code={`import java.sql.*;

public class DBConnect {
    public static void main(String[] args) {
        try {
            // 1. Load the Driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            // 2. Establish Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/university", "root", "password");
                
            // 3. Create Statement
            Statement stmt = con.createStatement();
            
            // 4. Execute Query
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");
            
            // 5. Process Results
            while(rs.next()) {
                System.out.println(rs.getInt(1) + "  " + rs.getString(2));
            }
            
            // 6. Close Connection
            con.close();
            
        } catch(Exception e) { 
            System.out.println(e); 
        }
    }
}`} />
      </QuestionBlock>
    </UnitCard>
  );
}

import { UnitCard, QuestionBlock } from '../components/UnitCard';
import { CodeBlock } from '../components/CodeBlock';

export function Unit1() {
  return (
    <UnitCard id="unit1" title="Unit I: Website Basics & HTML">
      <QuestionBlock id="u1q1" title="1. HTTP Protocol & Structure">
        <p>HTTP (Hypertext Transfer Protocol) is the foundation of data exchange on the web. It follows a client-server model where a client (browser) sends a request and the server returns a response.</p>
        
        <div className="my-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md w-32 text-center font-medium">Client</div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center text-sm font-mono text-slate-600 dark:text-slate-400">
              <span>HTTP Request</span>
              <span className="ml-2">→</span>
            </div>
            <div className="flex items-center text-sm font-mono text-slate-600 dark:text-slate-400">
              <span className="mr-2">←</span>
              <span>HTTP Response</span>
            </div>
          </div>
          <div className="bg-emerald-500 text-white p-4 rounded-lg shadow-md w-32 text-center font-medium">Server</div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Request Structure</h4>
            <CodeBlock language="http" code={`GET /index.html HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0\nAccept: text/html`} />
          </div>
          <div>
            <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Response Structure</h4>
            <CodeBlock language="http" code={`HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 125\n\n<!DOCTYPE html>...`} />
          </div>
        </div>
      </QuestionBlock>

      <QuestionBlock id="u1q2" title="2. Step-by-step process to create and host a website">
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li><strong>Domain Name Registration:</strong> Choose and purchase a unique domain name (e.g., mywebsite.com) from a registrar.</li>
          <li><strong>Web Hosting:</strong> Purchase hosting space from a provider (e.g., AWS, Vercel, Bluehost) to store your website files.</li>
          <li><strong>Design & Development:</strong> Create the website using HTML, CSS, JS, and backend technologies.</li>
          <li><strong>Testing:</strong> Test the website locally across different browsers and devices.</li>
          <li><strong>Deployment:</strong> Upload the files to the web host using FTP/SFTP, Git, or a control panel.</li>
          <li><strong>DNS Configuration:</strong> Point your domain's DNS records to your web host's IP address.</li>
        </ol>
      </QuestionBlock>

      <QuestionBlock id="u1q3" title="3. Web Browser Architecture">
        <p>A web browser consists of several key components working together to fetch and display web content.</p>
        
        <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">User Interface</h4>
            <p className="text-sm">Address bar, back/forward buttons, bookmarks menu, etc.</p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg border border-slate-200 dark:border-slate-600 md:col-span-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">Browser Engine</h4>
            <p className="text-sm">Marshals actions between the UI and the rendering engine.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800 md:col-span-3">
            <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Rendering Engine</h4>
            <p className="text-sm mb-4">Responsible for displaying requested content (parsing HTML/CSS).</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="bg-white dark:bg-slate-800 p-2 rounded text-sm shadow-sm">Networking</div>
              <div className="bg-white dark:bg-slate-800 p-2 rounded text-sm shadow-sm">JS Interpreter</div>
              <div className="bg-white dark:bg-slate-800 p-2 rounded text-sm shadow-sm">Data Storage</div>
            </div>
          </div>
        </div>
      </QuestionBlock>

      <QuestionBlock id="u1q4" title="4. Client-side vs Server-side Scripting">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="p-3 border border-slate-200 dark:border-slate-600">Feature</th>
                <th className="p-3 border border-slate-200 dark:border-slate-600">Client-Side Scripting</th>
                <th className="p-3 border border-slate-200 dark:border-slate-600">Server-Side Scripting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-700 font-medium">Execution Location</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">User's web browser</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Web server</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-700 font-medium">Primary Use</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">UI/UX, form validation, animations</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Database access, authentication, business logic</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-700 font-medium">Source Code Visibility</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Visible to the user (Inspect Element)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">Hidden from the user</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-700 font-medium">Examples</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">JavaScript, React, Vue</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">PHP, Node.js, Python, Java</td>
              </tr>
            </tbody>
          </table>
        </div>
      </QuestionBlock>
    </UnitCard>
  );
}

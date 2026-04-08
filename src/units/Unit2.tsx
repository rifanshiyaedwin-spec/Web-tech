import { UnitCard, QuestionBlock } from '../components/UnitCard';
import { CodeBlock } from '../components/CodeBlock';

export function Unit2() {
  return (
    <UnitCard id="unit2" title="Unit II: Web Designing (HTML5 & CSS3)">
      <QuestionBlock id="u2q1" title="1. Library Management System Registration Form">
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto my-6">
          <h4 className="text-lg font-bold text-center mb-4 text-slate-800 dark:text-slate-100">Library Registration</h4>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted successfully!'); }}>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
              <input type="text" required placeholder="John Doe" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <input type="email" required placeholder="john@example.com" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">DOB</label>
                <input type="date" required className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Member ID</label>
                <input type="number" min="1000" max="9999" required placeholder="1234" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
              <input type="tel" pattern="[0-9]{10}" required placeholder="1234567890" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <input type="password" minLength={8} required placeholder="••••••••" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
              Register Member
            </button>
          </form>
        </div>
      </QuestionBlock>

      <QuestionBlock id="u2q2" title="2. CSS Box Model">
        <p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>
        
        <div className="my-6 p-8 bg-slate-100 dark:bg-slate-800 flex justify-center rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="border-2 border-dashed border-slate-400 p-6 bg-orange-100 dark:bg-orange-900/30 text-center relative">
            <span className="absolute top-1 left-2 text-xs font-bold text-orange-800 dark:text-orange-200">Margin</span>
            <div className="border-4 border-slate-800 dark:border-slate-300 p-6 bg-yellow-100 dark:bg-yellow-900/30 relative">
              <span className="absolute top-1 left-2 text-xs font-bold text-yellow-800 dark:text-yellow-200">Border</span>
              <div className="border-2 border-dashed border-slate-400 p-6 bg-green-100 dark:bg-green-900/30 relative">
                <span className="absolute top-1 left-2 text-xs font-bold text-green-800 dark:text-green-200">Padding</span>
                <div className="bg-blue-200 dark:bg-blue-800 p-4 relative text-blue-900 dark:text-blue-100 font-bold">
                  Content
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <CodeBlock language="css" code={`.box {
  width: 300px;        /* Content width */
  padding: 20px;       /* Space between content and border */
  border: 5px solid;   /* Line around padding */
  margin: 15px;        /* Space outside border */
  box-sizing: border-box; /* Includes padding/border in width */
}`} />
      </QuestionBlock>

      <QuestionBlock id="u2q3" title="3. CSS3 Selectors & Responsive Layout">
        <p>CSS3 introduced advanced selectors to target elements more precisely without adding extra classes.</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
          <li><strong>Attribute Selectors:</strong> <code>input[type="text"]</code></li>
          <li><strong>Pseudo-classes:</strong> <code>:hover</code>, <code>:nth-child(even)</code>, <code>:first-of-type</code></li>
          <li><strong>Pseudo-elements:</strong> <code>::before</code>, <code>::after</code></li>
        </ul>

        <h4 className="font-medium mt-4 mb-2">Responsive Multi-column Layout Example</h4>
        <CodeBlock language="css" code={`.container {
  display: grid;
  gap: 20px;
  /* Default: 1 column for mobile */
  grid-template-columns: 1fr;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}`} />
      </QuestionBlock>
    </UnitCard>
  );
}

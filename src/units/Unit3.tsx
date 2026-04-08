import { useState } from 'react';
import { UnitCard, QuestionBlock } from '../components/UnitCard';
import { CodeBlock } from '../components/CodeBlock';

export function Unit3() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [valMsg, setValMsg] = useState({ text: '', type: '' });
  
  const [boxState, setBoxState] = useState(false);

  const validateStudent = () => {
    const phoneRegex = /^[0-9]{10}$/;
    
    if (!phoneRegex.test(phone)) {
      setValMsg({ text: "Error: Mobile must be exactly 10 digits.", type: "error" });
    } else if (password.length < 8) {
      setValMsg({ text: "Error: Password must be at least 8 characters.", type: "warning" });
    } else {
      setValMsg({ text: "Success: Profile details validated!", type: "success" });
    }
  };

  return (
    <UnitCard id="unit3" title="Unit III: JavaScript">
      <QuestionBlock id="u3q1" title="1. Student Profile Form Validation">
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto my-6">
          <div className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Enter 10-digit mobile" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password (Min 8 chars)" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <button 
              onClick={validateStudent}
              className="w-full bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Validate
            </button>
            {valMsg.text && (
              <p className={`text-sm font-medium ${
                valMsg.type === 'error' ? 'text-red-500' : 
                valMsg.type === 'warning' ? 'text-amber-500' : 
                'text-emerald-500'
              }`}>
                {valMsg.text}
              </p>
            )}
          </div>
        </div>
      </QuestionBlock>

      <QuestionBlock id="u3q2" title="2. JavaScript Event Model">
        <p>The event model describes how events propagate through the DOM tree. There are two main phases:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
          <li><strong>Event Capturing:</strong> The event goes down from the window to the target element.</li>
          <li><strong>Event Bubbling:</strong> The event bubbles up from the target element to the window.</li>
        </ul>
        
        <CodeBlock language="javascript" code={`// Event Bubbling (default)
element.addEventListener('click', function(e) {
  console.log('Bubbling phase');
}); // or pass false as 3rd argument

// Event Capturing
element.addEventListener('click', function(e) {
  console.log('Capturing phase');
}, true); // pass true as 3rd argument

// Stop propagation
element.addEventListener('click', function(e) {
  e.stopPropagation(); // Stops bubbling/capturing
});`} />
      </QuestionBlock>

      <QuestionBlock id="u3q3" title="3. DOM Manipulation">
        <p>JavaScript can dynamically change HTML content, attributes, and CSS styles.</p>
        
        <div className="my-6 flex flex-col items-center gap-4">
          <div 
            className={`p-8 rounded-lg text-center transition-all duration-500 ease-in-out ${
              boxState 
                ? 'bg-emerald-500 text-white scale-105 shadow-lg' 
                : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
            }`}
          >
            {boxState ? "Content Changed Dynamically!" : "Click the button to change my state!"}
          </div>
          <button 
            onClick={() => setBoxState(!boxState)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Magic Button
          </button>
        </div>
        
        <CodeBlock language="javascript" code={`function changeDOM() {
  const box = document.getElementById('domBox');
  box.style.backgroundColor = '#10b981'; // emerald-500
  box.style.color = 'white';
  box.innerText = "Content Changed Dynamically!";
  box.style.transform = "scale(1.05)";
  box.style.transition = "all 0.5s ease";
}`} />
      </QuestionBlock>
    </UnitCard>
  );
}

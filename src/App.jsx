import {useState} from "react";
import GenerateQuizTab from "./tabs/GenerateQuizTab";
import HistoryTab from "./tabs/HistoryTab";

function App(){
  const [tab, setTab] = useState("generate");
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Wiki Quiz Generator</h1>
      <div className="flex gap-2 mb-4">
        <button className={`px-4 py-2 rounded ${tab==='generate'?'bg-blue-600 text-white':'bg-gray-200'}`} onClick={()=>setTab('generate')}>Generate</button>
        <button className={`px-4 py-2 rounded ${tab==='history'?'bg-blue-600 text-white':'bg-gray-200'}`} onClick={()=>setTab('history')}>History</button>
      </div>
      {tab === 'generate' ? <GenerateQuizTab/> : <HistoryTab/>}
    </div>
  );
}
export default App
import React from "react";

function HistoryTable({ items, onDetails }) {
  if (!items || items.length === 0) return <div>No history yet.</div>;
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-2">ID</th>
          <th className="p-2">Title</th>
          <th className="p-2">URL</th>
          <th className="p-2">Date</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(q => (
          <tr key={q.id} className="border-b">
            <td className="p-2">{q.id}</td>
            <td className="p-2">{q.title || "-"}</td>
            <td className="p-2 break-all">{q.url}</td>
            <td className="p-2">{new Date(q.date_generated).toLocaleString()}</td>
            <td className="p-2">
              <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={()=>onDetails(q.id)}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default HistoryTable
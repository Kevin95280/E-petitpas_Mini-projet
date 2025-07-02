export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      {label && <label style={{ display: 'block', fontWeight: 'bold' }}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
    </div>
  );
}

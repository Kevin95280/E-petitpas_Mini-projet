export default function Button({ label, onClick, style = {}, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '8px 16px',
        marginRight: '8px',
        backgroundColor: '#1976d2',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ...style
      }}
    >
      {label}
    </button>
  );
}

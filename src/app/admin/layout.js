export default function AdminLayout({ children }) {
  // Admin routes don't show the main site header/footer
  return <div style={{ paddingTop: 0, marginTop: 0 }}>{children}</div>;
}

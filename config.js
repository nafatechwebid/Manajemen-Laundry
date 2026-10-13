// Konfigurasi per klien - hanya file ini yang diganti untuk setiap pelanggan baru.
// Aman ditaruh di sini: anon key memang publik (data dilindungi aturan RLS di database).
// JANGAN PERNAH menaruh service_role key di sini.
window.CFG = {
  name: "LaundryKu",                          // nama bisnis (judul, header, nota)
  url:  "https://tpmgyazacbxebociiaqw.supabase.co",       // Project URL Supabase
  key:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbWd5YXphY2J4ZWJvY2lpYXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzNTk3NDUsImV4cCI6MjEwNjkzNTc0NX0.A0Wb641RJyYhyL8MAgPvX5czBHiTz0GTEw6na0BOCB4"         // anon public key
};

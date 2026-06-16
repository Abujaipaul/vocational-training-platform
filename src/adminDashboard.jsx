import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient'; // Make sure this path points to your setup

function AdminDashboard () {
  // 1. STATE
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // 2. THE FETCH ENGINE
  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const { data, error } = await supabase
        .from('enrollments')
        .select('*'); 

      if (error) throw error;
      setStudents(data);
    } catch (error) {
      console.error("Error fetching database:", error.message);
    } finally {
      setLoading(false);
    }
  }

  // 3. THE UPDATE ENGINE (Checking someone in)
  async function handleCheckIn (studentId) {
    try {
      const { error } = await supabase
        .from('enrollments')
        .update({ status: 'checked_in' })
        .eq('id', studentId); 

      if (error) throw error;

      // Refresh the table immediately to show the green status
      fetchStudents(); 
    } catch (error) {
      console.error("Failed to check in student:", error.message);
      alert("Error checking in student.");
    }
  };

  // 4. THE UI SCAFFOLD & TABLE
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🛡️ Admin Command Center</h2>
      
      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Scan or type Admission ID..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />

      {loading ? (
        <p>Loading database records...</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th>Admission ID</th>
              <th>Email</th> {/* Swapped Full Name for Email */}
              <th>Course</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td><strong>{student.admission_id}</strong></td>
                <td>{student.email}</td> {/* Pulling exactly what you saved to Supabase */}
                <td>{student.course_name}</td>
                
                <td style={{ color: student.status === 'checked_in' ? 'green' : 'orange' }}>
                  {student.status.toUpperCase()}
                </td>
                
                <td>
                  {/* The Wired-Up Check-In Button */}
                  <button 
                    onClick={() => handleCheckIn(student.id)}
                    disabled={student.status === 'checked_in'}
                    className='border-4 border-roundedpx-6 py-2 px-2 bg-black text-white font-medium hover:bg-amber-200 border-white-700 rounded-2xl'
                  >
                    {student.status === 'checked_in' ? 'Verified ✅' : 'Check In Student'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
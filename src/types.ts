// This is an Interface. It is a strict contract.
// It tells TypeScript: "A 'Student' must have exactly these properties, and nothing else."...very interesting..

export interface Student {
  id: string;             // Supabase generates this as a string
  email: string;          // Must be text
  course_name: string;    // Must be text
  amount_paid: number;    // Notice this is 'number', not a string!
  admission_id: string;   // Must be text
  status: 'pending' | 'checked_in'; // STRICT UNION: Status can ONLY be one of these two exact words.
}
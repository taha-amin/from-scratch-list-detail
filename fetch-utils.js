const SUPABASE_URL = 'https://vsdcaykeccqfntskmkcm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzZGNheWtlY2NxZm50c2tta2NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5ODc1MDcsImV4cCI6MTk2MzU2MzUwN30.Sw1EOz5qbK68Ah3eqhW51SYjKEJ-C1WtZubnxlxMgvc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBooks() {
    const response = await client
        .from('books')
        .select('*');

    return checkError(response);
}

export async function getBook(id) {
    const response = await client
        .from('books')
        .select('*')
        .match({ id: id })
        .single();

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
import sendEmail from './sendEmail';

export async function POST(req) {
  try {
    const formData = await req.json();
    const result = await sendEmail(formData);
    if (result.success) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ success: false, error: result.error }), { status: 500 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
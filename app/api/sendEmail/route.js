import sendEmail from './sendEmail';

export async function POST(req) {
  try {
    const formData = await req.json();
    console.log("Received form data:", formData); // Log form data

    const result = await sendEmail(formData);
    if (result.success) {
      console.log("Email sent successfully."); // Log success
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      console.error("Failed to send email:", result.error); // Log specific error message
      return new Response(JSON.stringify({ success: false, error: result.error }), { status: 500 });
    }
  } catch (error) {
    console.error("Error in POST request:", error); // Log detailed error for POST
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

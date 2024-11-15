import sendEmail from './sendEmail';

export async function POST(req) {
  try {
    const formData = await req.json();
    console.log("Received form data:", formData);

    const result = await sendEmail(formData);
    if (result.success) {
      console.log("Email sent successfully.");
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      console.error("Failed to send email:", result.error);
      return new Response(JSON.stringify({ success: false, error: result.error }), { status: 500 });
    }
  } catch (error) {
    console.error("Error in POST request:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

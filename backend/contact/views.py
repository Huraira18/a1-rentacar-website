from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings

@csrf_exempt
@api_view(["POST"])
def contact(request):
    name = (request.data.get("name") or "").strip()
    email = (request.data.get("email") or "").strip()
    subject_input = (request.data.get("subject") or "").strip()
    message = (request.data.get("message") or "").strip()

    if not name or not email or not subject_input or not message:
        return Response({"error": "Please fill all fields."}, status=status.HTTP_400_BAD_REQUEST)

    # IMPORTANT: show config state
    if not settings.EMAIL_HOST_USER:
        return Response({"error": "EMAIL_HOST_USER is missing in settings/.env"}, status=500)
    if not settings.EMAIL_HOST_PASSWORD:
        return Response({"error": "EMAIL_HOST_PASSWORD is missing in settings/.env"}, status=500)
    if not getattr(settings, "CONTACT_RECEIVER", None):
        return Response({"error": "CONTACT_RECEIVER (EMAIL_TO) is missing in settings/.env"}, status=500)

    subject = f"Website Contact Form: {name} | {subject_input}"
    body = f"Name: {name}\nEmail: {email}\nSubject: {subject_input}\n\nMessage:\n{message}\n"

    try:
        sent = send_mail(
            subject=subject,
            message=body,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.CONTACT_RECEIVER],
            fail_silently=False,
        )
        return Response({"ok": True, "sent": sent}, status=status.HTTP_200_OK)

    except Exception as e:
        # This is the key: we will SEE the error now
        return Response({"ok": False, "error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

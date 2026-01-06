from django.urls import path
from .views import contact

urlpatterns = [
    # POST http://127.0.0.1:8000/api/contact/
    path("contact/", contact, name="contact"),
]

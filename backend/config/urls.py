from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),

    # Contact API:
    # POST http://127.0.0.1:8000/api/contact/
    path("api/", include("contact.urls")),
]

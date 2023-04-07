from django.urls import path, re_path
from api import views

urlpatterns = [
    path('companies/', views.passing),
    path('companies/<int:id>', views.passing),
    path('companies/<int:id>/vacancies/', views.passing),
    path('vacancies/', views.passing),
    path('vacancies/<int:id>/', views.passing),
    path('vacancies/top_ten/', views.passing)
]
from django.urls import path, re_path
from api import views

urlpatterns = [
    path('companies/', views.listOfCompanies),
    path('companies/<int:company_id>', views.companyDetails),
    path('companies/<int:company_id>/vacancies/', views.vacancyInCompany),
    path('vacancies/', views.listOfVacancies),
    path('vacancies/<int:vacancy_id>/', views.vacancyDetails),
    path('vacancies/top_ten/', views.topVacancy)
    ]
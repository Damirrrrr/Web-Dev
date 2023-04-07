from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse, HttpResponse
from api.models import Company, Vacancy

def listOfCompanies(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

def companyDetails(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company.to_json())

def vacancyInCompany(request, company_id):
    try:
        _company = Company.objects.get(id=company_id)
        vacancy = Vacancy.objects.get(company=_company)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy.to_json())

def listOfVacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [c.to_json() for c in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancyDetails(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    JsonResponse(vacancy.to_json())

def topVacancy(request):
    vacancies = Vacancy.objects.order_by("-salary")[0:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
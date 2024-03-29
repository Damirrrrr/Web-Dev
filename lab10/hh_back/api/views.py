from django.http import JsonResponse
from django.shortcuts import render

from rest_framework import generics
from api.models import *
from .serializers import *

class VacancyListAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyGetUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyTopTenListAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.all().order_by('-salary')[:10]
    serializer_class = VacancySerializer
# Create your views here.

# def vacancies_list(request):
#     vacancies = Vacancy.objects.all()
#     vacancies_json = [v.to_json() for v in vacancies]
#     print(vacancies_json)
#     return JsonResponse(vacancies_json, safe=False)

# def vacancies_detail(request, *args, **kwargs):
#     vacancy_id = kwargs['id']
#     try:
#         vacancy = Vacancy.objects.get(pk=vacancy_id)
#     except Vacancy.DoesNotExist as e:
#         return JsonResponse({'error': str(e)}, status=400)

#     return JsonResponse(vacancy.to_json(), status=200)

# def vacancies_top_ten(request):
#     vacancies = Vacancy.objects.all().order_by('-salary')[:10]
#     vacancies_json = [v.to_json() for v in vacancies]
#     return JsonResponse(vacancies_json, safe=False)

def company_list(request):
    company = Company.objects.all()
    company_json = [c.to_json() for c in company]
    return JsonResponse(company_json, safe=False)

def company_detail(request, *args, **kwargs):
    company_id = kwargs['id']
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(company.to_json(), status=200)

def vacancies_by_company(request, *args, **kwargs):
    company_id = kwargs['id']
    vacancies = Vacancy.objects.all().filter(company=company_id)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


from django.shortcuts import render
from django.http import HttpResponse
import datetime

def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)

def listOfProducts(request):
    html = "<div>List Of Products! </div>"
    return HttpResponse(html)

def productById(request, id):
    html = "<div>Product By ID: {}</div>".format(id)
    return HttpResponse(html)

def listOfCategories(request):
    html = "<div>List Of Categories! </div>"
    return HttpResponse(html)

def categoryById(request, id):
    html = "<div>Category By ID: {}</div>".format(id)
    return HttpResponse(html)

def listOfProductsByCategory(request, id):
    html = "<div>List Of Products By Category ID: {}</div>".format(id)
    return HttpResponse(html)

from django.shortcuts import render
from django.http import HttpResponse
from .models import contactMessage

# Create your views here.
def index(request):
    pars={'style':False}
    return render(request,'intro/index.html',pars)
def contact(request):
    pars={'style':True}
    if(request.POST):
        message=contactMessage()
        message.fName=request.POST.get('fName')
        message.lName=request.POST.get('lName')
        message.email=request.POST.get('email')
        message.message=request.POST.get('message')
        message.save()

    return render(request,'intro/contact.html',pars)